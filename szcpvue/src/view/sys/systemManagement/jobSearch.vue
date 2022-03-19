<template>
  <div>
    <div style="min-width:1000px">
      <Card shadow>
        <!--添加工作-->
        <Button
          v-if="buttonVerifAuthention('sys:fundInfo:addFundInfo')"
          type="primary"
          icon="md-add"
          @click="addFundInfoButton"
          style="margin-bottom: 10px;"
        >添加职位（权限控制）</Button>

        <!-- 查询 -->
        <Row>
          <Col span="4" style="margin-right: 10px;">
            <Select v-model="model1" clearable style="width:200px"  placeholder="工作区域">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Col>
          <Col span="4" style="margin-right: 10px;">
            <Select v-model="model2" clearable style="width:200px" placeholder="职位类型">
              <Option v-for="item in jobTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Col>
          <Col span="4" style="margin-right: 10px;" >
            <Select v-model="model3" clearable style="width:200px" placeholder="学历要求">
              <Option v-for="item in eduTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Col>

          <Col span="4" style="margin-right: 10px;" >
            <Select v-model="model4" clearable style="width:200px" placeholder="薪资要求">
              <Option v-for="item in salaryTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Col>

          <Col span="2" style="margin-right: 10px;">
            <Button
              type="primary"
              icon="md-search"
              @click="searchQuery"
              style="margin-bottom: 10px;"
            >查询</Button>
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
        <Page :total="totalPage" show-total :styles="stylePage" @on-change="changePage" />

        <!--添加工作弹出框-->
        <Modal v-model="modalFundInfoAdd" title="添加工作" :mask-closable="false">
          <Form
            ref="formValidateFundTypeAdd"
            :model="formValidateFundTypeAdd"
            :label-width="120"
          >
            <FormItem label="岗位名称" prop="remark">
              <Input
                type="textarea"
                :autosize="{minRows: 2,maxRows: 5}"
                v-model="formValidateFundTypeAdd.remark"
                placeholder="请输入岗位名称"
              ></Input>
            </FormItem>
            <FormItem label="工作区域" prop="title">
              <Select v-model="formValidateFundTypeAdd.type1" placeholder="工作区域" clearable>
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>
            <FormItem label="职位类型" prop="title">
              <Select v-model="formValidateFundTypeAdd.type2" placeholder="职位类型" clearable>
                <Option v-for="item in jobTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>
            <FormItem label="学历要求" prop="title">
              <Select v-model="formValidateFundTypeAdd.typ3" placeholder="学历要求" clearable>
                <Option v-for="item in eduTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>
            <FormItem label="薪资要求" prop="title">
              <Select v-model="formValidateFundTypeAdd.salaryTypeList" placeholder="薪资要求" clearable>
                <Option v-for="item in salaryTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>

            <FormItem label="职位描述" prop="remark">
              <Input
                type="textarea"
                :autosize="{minRows: 2,maxRows: 5}"
                v-model="formValidateFundTypeAdd.remark"
                placeholder="请输入职位描述"
              ></Input>
            </FormItem>

            <FormItem label="岗位职责" prop="remark">
              <Input
                type="textarea"
                :autosize="{minRows: 2,maxRows: 5}"
                v-model="formValidateFundTypeAdd.remark"
                placeholder="请输入岗位职责"
              ></Input>
            </FormItem>

            <FormItem label="任职要求" prop="remark">
              <Input
                type="textarea"
                :autosize="{minRows: 2,maxRows: 5}"
                v-model="formValidateFundTypeAdd.remark"
                placeholder="请输入任职要求"
              ></Input>
            </FormItem>
            
            <FormItem label="职位福利" prop="remark">
              <Input
                type="textarea"
                :autosize="{minRows: 2,maxRows: 5}"
                v-model="formValidateFundTypeAdd.remark"
                placeholder="请输入职位福利"
              ></Input>
            </FormItem>

            <FormItem label="工作地点" prop="remark">
              <Input
                type="textarea"
                :autosize="{minRows: 2,maxRows: 5}"
                v-model="formValidateFundTypeAdd.remark"
                placeholder="请输工作地点"
              ></Input>
            </FormItem>

          </Form>
          <div slot="footer">
            <Button type="text" size="large" @click="modalFundInfoAdd=false">取消</Button>
            <Button type="primary" size="large" @click="addFundTypeClick" >确定</Button>
          </div>
        </Modal>
  
      </Card>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { permsVerifAuthention } from "@/libs/util";
export default {
  name: "tree_table_page",
  data() {

    return {
      model1:"",
      model2:"",
      model3:"",
      model4:"",
      cityList: [
        {value: 'beijing', label: '北京市'}, 
        {value: 'shanghai', label: '上海市'}, 
        {value: 'guangzhou', label: '广州市'}, 
      ],
      jobTypeList: [
        {value: '0', label: '不限'}, 
        {value: '1', label: '销售/商务拓展'}, 
        {value: '2', label: '人事/行政/财务/法务'}, 
        {value: '3', label: '金融/保险'}, 
        {value: '4', label: '房地产/工程/建筑'}, 
        {value: '5', label: '影视传媒'}, 
        {value: '6', label: '互联网/通信及硬件'}, 
        {value: '7', label: '农业/能源/环保'}, 
      ],
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
        title: "",
        type: "",
        remark: "",
        sorting: ""
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
        { title: "工作区域", align: "center",  key: "fundName" },
        { title: "职位类型", align: "center",  key: "fundName" },
        { title: "学历要求", align: "center",  key: "fundName" },
        { title: "薪资", align: "center",  key: "fundName" },
        { title: "名称", align: "center",  key: "fundName" },
        { title: "要求工作年限", align: "center",  key: "fundName" },

        {
          title: "操作",
          key: "handle",
          align: "center",
          minWidth: 150,
          render: (h, params) => {
            return h("div", [
              (() => {
                if (this.buttonVerifAuthention("sys:fundInfo:updateFundInfo")) {
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
                if (this.buttonVerifAuthention("sys:fundInfo:deleteFundInfo")) {
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
                if (this.buttonVerifAuthention("sys:fundInfo:deleteFundInfo")) {
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
                          this.detail(params);
                        }
                      }
                    },
                    "详情"
                  );
                }
              })()
            ]);
          }
        }
      ],
      //表格数据
      tableData: [{id:"1"}]
    };
  },
  created() {
    // this.queryList();
  },
  methods: {
    ...mapActions([
      // "addFundInfo",
      // "getFundInfoList",
      // "getFundTypeListByType",
      // "deleteFundInfoById",
      // "editFundInfoById"
    ]),
    buttonVerifAuthention(perms) {
      return permsVerifAuthention(perms, this.$store.state.user.authentionList);
    },
    //分页改变
    changePage(page) {
      this.currentPage = page;
      this.queryList();
    },
    //获取页面菜单列表
    queryList() {
      this.loading = true;
      //发送请求
      this.getFundInfoList({ searchPream }).then(res => {
        this.tableData = res.data;
        this.totalPage = res.count;
        this.loading = false;
      }).catch((e)=>{
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
    },
    /**
     * 添加数据提交
     */
    addFundTypeClick(){

    },

    //删除文章菜单
    deleteFundInfoButton(scope) {
      this.$Modal.confirm({
        title: "删除",
        content: "<p>你确认要删除此条信息吗!</p>",
        onOk: () => {
          let fundInfoId = scope.row.id;
          this.deleteFundInfoById({ fundInfoId }).then(res => {
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
      console.log(scope)
      console.log("edit")
      this.modalFundInfoAdd = true;
    },
    
    //详情
    detail(scope) {
      console.log(scope)
      console.log("detail")
      this.modalFundInfoAdd = true;
    },


  }
};
</script>

<style>
</style>
