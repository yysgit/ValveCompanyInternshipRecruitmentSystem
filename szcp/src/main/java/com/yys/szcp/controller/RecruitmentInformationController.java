package com.yys.szcp.controller;

import com.alibaba.druid.support.json.JSONUtils;
import com.yys.szcp.constant.ExceptionConstant;
import com.yys.szcp.entity.DbAdminUser;
import com.yys.szcp.entity.DbRecruitmentInformation;
import com.yys.szcp.service.DbRecruitmentInformationService;
import com.yys.szcp.utils.ResultUtil;
import com.yys.szcp.utils.StringISNULLUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("sys/recruitmentInformation")
public class RecruitmentInformationController {

    private static final Logger logger = LoggerFactory.getLogger(RecruitmentInformationController.class);
    @Autowired
    private DbRecruitmentInformationService recruitmentInformationService;

    /**
     * 添加
     *
     * @param
     * @return
     */
    @RequestMapping("addRecruitmentInformation")
    @ResponseBody
    public ResultUtil addRecruitmentInformation(HttpServletRequest request, String recruitmentInformation) {
        try {

            Map RecruitmentInformationParam = (Map) JSONUtils.parse(recruitmentInformation);
            DbRecruitmentInformation RecruitmentInformationMy = new DbRecruitmentInformation();
            RecruitmentInformationMy.setPostName(StringISNULLUtil.mapToString(RecruitmentInformationParam.get("postName")));
            RecruitmentInformationMy.setPostAnnualSalary(StringISNULLUtil.mapToString(RecruitmentInformationParam.get("postAnnualSalary")));
            RecruitmentInformationMy.setPostType(StringISNULLUtil.mapToString(RecruitmentInformationParam.get("postType")));
            RecruitmentInformationMy.setPostEducation(StringISNULLUtil.mapToString(RecruitmentInformationParam.get("postEducation")));
            RecruitmentInformationMy.setPostProfile(StringISNULLUtil.mapToString(RecruitmentInformationParam.get("postProfile")));
            RecruitmentInformationMy.setCompanyAddress(StringISNULLUtil.mapToString(RecruitmentInformationParam.get("companyAddress")));
            RecruitmentInformationMy.setCompanyRegion(StringISNULLUtil.mapToString(RecruitmentInformationParam.get("companyRegion")));
            RecruitmentInformationMy.setCompanyName(StringISNULLUtil.mapToString(RecruitmentInformationParam.get("companyName")));
            RecruitmentInformationMy.setCompanyProfile(StringISNULLUtil.mapToString(RecruitmentInformationParam.get("companyProfile")));
            RecruitmentInformationMy.setCompanyMailbox(StringISNULLUtil.mapToString(RecruitmentInformationParam.get("companyMailbox")));
            recruitmentInformationService.addRecruitmentInformation(RecruitmentInformationMy);
            return ResultUtil.success("添加成功!");
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("添加错误: " + e.getMessage());
            return ResultUtil.error("添加失败!");
        }
    }

    /**
     * 删除
     *
     * @param
     * @return
     */
    @RequestMapping("deleteRecruitmentInformation")
    @ResponseBody
    public ResultUtil deleteRecruitmentInformation(HttpServletRequest request, Integer recruitmentInformationId) {
        try {
            DbRecruitmentInformation RecruitmentInformationMy = new DbRecruitmentInformation();
            RecruitmentInformationMy.setId(recruitmentInformationId);
            RecruitmentInformationMy.setDeleteStatus(1);
            recruitmentInformationService.deleteRecruitmentInformation(RecruitmentInformationMy);
            return ResultUtil.success("删除成功!");
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("删除错误: " + e.getMessage());
            return ResultUtil.error("删除失败!");
        }
    }

    /**
     * 更新
     *
     * @param
     * @return
     */
    @RequestMapping("updateRecruitmentInformation")
    @ResponseBody
    public ResultUtil updateRecruitmentInformation(HttpServletRequest request, String recruitmentInformation) {
        try {
            Map RecruitmentInformationParam = (Map) JSONUtils.parse(recruitmentInformation);
            DbRecruitmentInformation RecruitmentInformationMy = new DbRecruitmentInformation();
            RecruitmentInformationMy.setPostName(StringISNULLUtil.mapToString(RecruitmentInformationParam.get("postName")));
            RecruitmentInformationMy.setPostAnnualSalary(StringISNULLUtil.mapToString(RecruitmentInformationParam.get("postAnnualSalary")));
            RecruitmentInformationMy.setPostType(StringISNULLUtil.mapToString(RecruitmentInformationParam.get("postType")));
            RecruitmentInformationMy.setPostEducation(StringISNULLUtil.mapToString(RecruitmentInformationParam.get("postEducation")));
            RecruitmentInformationMy.setPostProfile(StringISNULLUtil.mapToString(RecruitmentInformationParam.get("postProfile")));
            RecruitmentInformationMy.setCompanyAddress(StringISNULLUtil.mapToString(RecruitmentInformationParam.get("companyAddress")));
            RecruitmentInformationMy.setCompanyRegion(StringISNULLUtil.mapToString(RecruitmentInformationParam.get("companyRegion")));
            RecruitmentInformationMy.setCompanyName(StringISNULLUtil.mapToString(RecruitmentInformationParam.get("companyName")));
            RecruitmentInformationMy.setCompanyProfile(StringISNULLUtil.mapToString(RecruitmentInformationParam.get("companyProfile")));
            RecruitmentInformationMy.setCompanyMailbox(StringISNULLUtil.mapToString(RecruitmentInformationParam.get("companyMailbox")));
            RecruitmentInformationMy.setId(StringISNULLUtil.mapToInteger(RecruitmentInformationParam.get("id")));
            recruitmentInformationService.updateRecruitmentInformation(RecruitmentInformationMy);
            return ResultUtil.success("更新成功!");
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("更新错误: " + e.getMessage());
            return ResultUtil.error("更新失败!");
        }
    }




    /**
     * 查询提现记录列表
     *
     * @param
     * @return
     */
    @RequestMapping("findRecruitmentInformationList")
    @ResponseBody
    public ResultUtil findRecruitmentInformationList(HttpServletRequest request, String searchPream) {
        try {
            ResultUtil resultUtil = new ResultUtil();
            DbAdminUser adminUser = (DbAdminUser) request.getAttribute("adminUser");
            Map search = (Map) JSONUtils.parse(searchPream);
            Map map = new HashMap();
            map.put("page", (Integer.valueOf(search.get("page").toString()) - 1) * 10);
            map.put("limit", search.get("limit"));
            map.put("searchPostType", search.get("searchPostType"));
            map.put("searchCompanyRegion", search.get("searchCompanyRegion"));


            resultUtil.setData(recruitmentInformationService.findRecruitmentInformationList(map));
            resultUtil.setCount(recruitmentInformationService.findRecruitmentInformationListCount(map));
            resultUtil.setMsg("查询成功!");
            resultUtil.setCode(ExceptionConstant.SUCCESS_HTTPREUQEST);
            return resultUtil;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("查询提现记录错误: " + e.getMessage());
            return ResultUtil.error("查询失败!");
        }
    }
}


