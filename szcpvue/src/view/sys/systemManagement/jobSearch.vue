<template>
  <div>
    <div style="min-width:1000px">
      <Card shadow>
        <!--添加工作-->
        <!-- -->
        <Button v-if="buttonVerifAuthention('sys:recruitmentInformation:addRecruitmentInformation')"
                type="primary"
                icon="md-add"
                @click="addFundInfoButton"
                style="margin-bottom: 10px;"
        >添加职位
        </Button>

        <!-- 查询 -->
        <Row>
          <Col span="4" style="margin-right: 10px;">
            <Select v-model="model1" clearable style="width:200px" placeholder="工作区域">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Col>
          <Col span="4" style="margin-right: 10px;">
            <Select v-model="model2" clearable style="width:200px" placeholder="职位类型">
              <Option v-for="item in jobStyle" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Col>

          <Col span="2" style="margin-right: 10px;">
            <Button
              v-if="buttonVerifAuthention('sys:recruitmentInformation:findRecruitmentInformationList')"
              type="primary"
              icon="md-search"
              @click="searchQuery"
              style="margin-bottom: 10px;"
            >查询
            </Button>
          </Col>

        </Row>
        <!--表格-->
        <Table
          ref="tables"
          width="1200px"
          stripe
          border
          :loading="loading"
          :data="tableData"
          :columns="columns"
        ></Table>
        <Page :total="totalPage" show-total :styles="stylePage" @on-change="changePage"/>

        <!--添加工作弹出框-->
        <Modal v-model="modalFundInfoAdd" title="发布工作" :mask-closable="false">
          <Form
            ref="formValidateFundTypeAdd"
            :model="formValidateFundTypeAdd"
            :label-width="120"
          >
            <FormItem label="岗位名称" prop="postName">
              <Input
                type="textarea"
                :autosize="{minRows: 2,maxRows: 5}"
                v-model="formValidateFundTypeAdd.postName"
              ></Input>
            </FormItem>
            <FormItem label="年薪" prop="postAnnualSalary">
              <Input
                v-model="formValidateFundTypeAdd.postAnnualSalary"
              ></Input>
            </FormItem>
            <FormItem label="职位类型" prop="postType">
              <Select v-model="formValidateFundTypeAdd.postType">
                <Option v-for="(item, index) in jobStyle" :key="index" v-text="item.label"
                        :value="item.value+''">{{ item.label }}
                </Option>
              </Select>
            </FormItem>
            <FormItem label="学历" prop="postEducation">
              <Input v-model="formValidateFundTypeAdd.postEducation"></Input>
            </FormItem>

            <FormItem label="职位简介" prop="postProfile">
              <Input
                type="textarea"
                :autosize="{minRows: 2,maxRows: 5}"
                v-model="formValidateFundTypeAdd.postProfile"
              ></Input>
            </FormItem>

            <FormItem label="工作地区" prop="companyRegion">
              <Select v-model="formValidateFundTypeAdd.companyRegion" clearable>
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>

            <FormItem label="详细地址" prop="companyAddress">
              <Input
                type="textarea"
                :autosize="{minRows: 2,maxRows: 5}"
                v-model="formValidateFundTypeAdd.companyAddress"
              ></Input>
            </FormItem>

            <FormItem label="公司名称" prop="companyName">
              <Input v-model="formValidateFundTypeAdd.companyName"></Input>
            </FormItem>

            <FormItem label="公司简介" prop="companyProfile">
              <Input
                type="textarea"
                :autosize="{minRows: 2,maxRows: 5}"
                v-model="formValidateFundTypeAdd.companyProfile"
              ></Input>
            </FormItem>
            <FormItem label="公司邮箱" prop="companyMailbox">
              <Input v-model="formValidateFundTypeAdd.companyMailbox"></Input>
            </FormItem>

          </Form>
          <div slot="footer">
            <Button type="text" size="large" @click="modalFundInfoAdd=false">取消</Button>
            <Button type="primary" size="large" @click="addFundTypeClick" v-if="modalType!='view'">确定</Button>
          </div>
        </Modal>

      </Card>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {permsVerifAuthention} from "@/libs/util";

export default {
  name: "tree_table_page",
  data() {
    return {
      model1: "",
      model2: "",
      model3: "",
      model4: "",
      cityList: [
        {value: 'beijing', label: '北京市'},
      ],
      jobStyle: [], //工作类型
      eduTypeList: [
        {value: '0', label: '不限'},
        {value: '1', label: '初中及以下'},
        {value: '2', label: '高中'},
        {value: '3', label: '中专/中技'},
        {value: '4', label: '大专'},
        {value: '5', label: '硕士'},
        {value: '6', label: 'MBA/EMBA'},
        {value: '7', label: '博士'},
      ],
      salaryTypeList: [
        {value: '0', label: '不限'},
        {value: '1', label: '4K以下'},
        {value: '2', label: '4K-6K'},
        {value: '3', label: '8K-10K'},
        {value: '4', label: '10K-15K'},
        {value: '5', label: '5K-35K'},
        {value: '6', label: '35K-50K'},
        {value: '7', label: '50K以上'},
      ],

      stylePage: {
        marginTop: "20px"
      },
      currentPage: 1,
      fetchNum: 10,
      totalPage: 0,

      //对话框
      loading: false, //表格加载转圈
      modalFundInfoAdd: false, //添加工作弹窗
      //工作数据
      formValidateFundTypeAdd: {
        id: "",
        postName: "", //岗位名称
        postAnnualSalary: "", //年薪
        postType: "",   //职位类型
        postEducation: "", //学历
        postProfile: "", //职位简介
        companyAddress: "", //详细地址
        companyRegion: "", //地区
        companyName: "", //公司名称
        companyProfile: "", //公司简介
        companyMailbox: "", //公司邮箱
      },
      //表单验证
      modalFundInfoEdit: false,
      //修改表单
      formValidateFundInfoEdit: {
        id: "",
      },

      //表格列
      columns: [
        {
          type: "index2",
          width: 70,
          title: "序号",
          align: "center",
          render: (h, params) => {
            return h(
              "span",
              params.index + (this.currentPage - 1) * this.fetchNum + 1
            );
          }
        },
        {title: "岗位名称", align: "center", key: "postName"},
        {title: "工作区域", align: "center", key: "companyRegion"},
        {title: "工作地址", align: "center", key: "companyAddress"},
        {
          title: "职位类型",
          align: "center",
          key: "postType",
          render: (h, params) => {
            if (params.row.postType == null) {
              return h(
                "div",
                '不限'
              );
            } else {
              return h(
                "div",
                params.row.postType
              );
            }
          }
        },
        {title: "学历要求", align: "center", key: "postEducation"},
        {title: "薪资", align: "center", key: "postAnnualSalary"},
        {
          title: "操作",
          key: "handle",
          align: "center",
          minWidth: 150,
          render: (h, params) => {
            return h("div", [
              (() => {
                if (this.buttonVerifAuthention("sys:recruitmentInformation:updateRecruitmentInformation")) {
                  return h(
                    "Button",
                    {
                      props: {
                        type: "primary",
                        size: "small"
                      },
                      style: {
                        marginRight: "5px"
                      },
                      on: {
                        click: () => {
                          this.editFundInfoButton(params);
                        }
                      }
                    },
                    "编辑"
                  );
                }
              })(),
              (() => {
                if (this.buttonVerifAuthention("sys:recruitmentInformation:deleteRecruitmentInformation")) {
                  return h(
                    "Button",
                    {
                      props: {
                        type: "error",
                        size: "small"
                      },
                      style: {
                        marginRight: "5px"
                      },
                      on: {
                        click: () => {
                          this.deleteFundInfoButton(params);
                        }
                      }
                    },
                    "删除"
                  );
                }
              })(),
              (() => {
                if (this.buttonVerifAuthention("sys:recruitmentInformation:updateRecruitmentInformation")) {
                  return h(
                    "Button",
                    {
                      props: {
                        type: "primary",
                        size: "small"
                      },
                      style: {
                        marginRight: "5px"
                      },
                      on: {
                        click: () => {
                          this.viewData(params);
                        }
                      }
                    },
                    "查看"
                  );
                }
              })(),
            ]);
          }
        }
      ],
      //表格数据
      tableData: [{id: "1"}],
      baseUlr: "sys/recruitmentInformation",
      //添加接口
      addUrl: "addRecruitmentInformation",
      //删除接口
      delUrl: "deleteRecruitmentInformation",
      //更新
      upUrl: "updateRecruitmentInformation",
      // 查询列表
      tableUrl: "findRecruitmentInformationList",
      modalType: "",//弹窗类型 add-edit
      editId: "",  //编辑条目的id
    };
  },
  created() {
    this.init();
    this.jobStyle = this.$store.state.user.jobTypeList;//赋值区域数据字典
    this.queryList()//获取列表
  },
  methods: {
    ...mapActions([
      "addJobSearchType",
      "getJobSearchTableList",
      "deleteJobSearchById",
      "upJobSearchType"
    ]),
    buttonVerifAuthention(perms) {
      return permsVerifAuthention(perms, this.$store.state.user.authentionList);
    },
    init() {
      var provs = DC.getProvs();
      var _provs = [];
      for (let i = 0; i < provs.length; i++) {
        const ele = provs[i];
        let _obj = {
          value: ele.name,
          label: ele.name,
        }
        _provs.push(_obj);
      }
      this.cityList = _provs;
    },
    //分页改变
    changePage(page) {
      this.currentPage = page;
      this.queryList();
    },
    //获取页面菜单列表
    queryList() {
      this.loading = true;
      let searchPream = {
        page: this.currentPage,
        limit: this.fetchNum,
        searchPostType: this.model2, //职位类型
        searchCompanyRegion: this.model1 //公司区域
      }
      if (this.model1 == '0') {
        searchPream.searchCompanyRegion = "";
      }
      if (this.model2 == '0') {
        searchPream.searchPostType = "";
      }
      //发送请求
      this.getJobSearchTableList({searchPream}).then(res => {
        this.tableData = res.data;
        this.totalPage = res.count;
        this.loading = false;
      }).catch((e) => {
        this.loading = false;
      });
    },
    //查询
    searchQuery() {
      this.currentPage = 1;
      this.queryList();
    },
    //点击添加子菜单按钮
    addFundInfoButton(scope) {
      console.log("add")
      this.modalFundInfoAdd = true;
      this.modalType = "add";
      this.formValidateFundTypeAdd = {
        id: "",
        postName: "", //岗位名称
        postAnnualSalary: "", //年薪
        postType: "",   //职位类型
        postEducation: "", //学历
        postProfile: "", //职位简介
        companyAddress: "", //详细地址
        companyRegion: "", //地区
        companyName: "", //公司名称
        companyProfile: "", //公司简介
        companyMailbox: "", //公司邮箱
      }
    },
    /**
     * 添加数据提交
     */
    addFundTypeClick() {
      let fundType = {
        "postName": this.formValidateFundTypeAdd.postName,//岗位名称
        "postAnnualSalary": this.formValidateFundTypeAdd.postAnnualSalary, //年薪
        "postType": this.formValidateFundTypeAdd.postType,
        "postEducation": this.formValidateFundTypeAdd.postEducation,
        "postProfile": this.formValidateFundTypeAdd.postProfile,
        "companyAddress": this.formValidateFundTypeAdd.companyAddress,
        "companyRegion": this.formValidateFundTypeAdd.companyRegion,
        "companyName": this.formValidateFundTypeAdd.companyName,
        "companyProfile": this.formValidateFundTypeAdd.companyProfile,
        "companyMailbox": this.formValidateFundTypeAdd.companyMailbox,
      }
      if (fundType.postType == '0') {
        fundType.postType = "";
      }
      if (this.modalType == "add") {
        this.addJobSearchType({fundType}).then(res => {
          console.log(res, '添加返回')
          if (res.code == 200) {
            this.$Message.success("添加成功!");
            this.modalFundInfoAdd = false;
            // 可以做些清空form表单的动作
            //刷新菜单页面
            this.queryList();
          }
        });
      }
      if (this.modalType == "edit") {
        fundType.id = this.editId;
        this.upJobSearchType({fundType}).then(res => {
          if (res.code == 200) {
            this.$Message.success("更新成功!");
            this.modalFundInfoAdd = false;
            // 可以做些清空form表单的动作
            //刷新菜单页面
            this.queryList();
          }
        });
      }
    },

    //删除
    deleteFundInfoButton(scope) {
      console.log(scope, "<<<<<<<del")
      this.$Modal.confirm({
        title: "删除",
        content: "<p>你确认要删除此条信息吗!</p>",
        onOk: () => {
          let recruitmentInformationId = scope.row.id;
          this.deleteJobSearchById({recruitmentInformationId}).then(res => {
            this.$Message.info(res.msg);
            //刷新菜单页面
            this.queryList();
          });
        },
        onCancel: () => {
          this.$Message.info("取消删除!");
        }
      });
    },

    //编辑
    editFundInfoButton(scope) {
      this.modalFundInfoAdd = true;
      this.formValidateFundTypeAdd.postName = scope.row.postName;
      this.formValidateFundTypeAdd.postAnnualSalary = scope.row.postAnnualSalary;
      this.formValidateFundTypeAdd.postType = scope.row.postType;
      if (!this.formValidateFundTypeAdd.postType) {
        this.formValidateFundTypeAdd.postType = "0";
      }
      this.formValidateFundTypeAdd.postEducation = scope.row.postEducation;
      this.formValidateFundTypeAdd.postProfile = scope.row.postProfile;
      this.formValidateFundTypeAdd.companyAddress = scope.row.companyAddress;
      this.formValidateFundTypeAdd.companyRegion = scope.row.companyRegion;
      this.formValidateFundTypeAdd.companyName = scope.row.companyName;
      this.formValidateFundTypeAdd.companyProfile = scope.row.companyProfile;
      this.formValidateFundTypeAdd.companyMailbox = scope.row.companyMailbox;
      this.editId = scope.row.id;
      this.modalType = "edit";
    },

    //查看
    viewData(scope) {
      this.modalFundInfoAdd = true;
      this.formValidateFundTypeAdd.postName = scope.row.postName;
      this.formValidateFundTypeAdd.postAnnualSalary = scope.row.postAnnualSalary;
      this.formValidateFundTypeAdd.postType = scope.row.postType;
      if (!this.formValidateFundTypeAdd.postType) {
        this.formValidateFundTypeAdd.postType = "0";
      }
      this.formValidateFundTypeAdd.postEducation = scope.row.postEducation;
      this.formValidateFundTypeAdd.postProfile = scope.row.postProfile;
      this.formValidateFundTypeAdd.companyAddress = scope.row.companyAddress;
      this.formValidateFundTypeAdd.companyRegion = scope.row.companyRegion;
      this.formValidateFundTypeAdd.companyName = scope.row.companyName;
      this.formValidateFundTypeAdd.companyProfile = scope.row.companyProfile;
      this.formValidateFundTypeAdd.companyMailbox = scope.row.companyMailbox;
      this.editId = scope.row.id;
      this.modalType = "view";
    },


  }
};
</script>

<style>
</style>
