package com.yys.szcp.service;

import com.yys.szcp.entity.DbRecruitmentInformation;

import java.util.List;
import java.util.Map;

public interface DbRecruitmentInformationService {

    /**
     * 添加提现记录
     *
     * @param
     * @return
     */
    int addRecruitmentInformation(DbRecruitmentInformation recruitmentInformation);

    /**
     * 删除提现记录
     *
     * @param
     * @return
     */
    int deleteRecruitmentInformation(DbRecruitmentInformation recruitmentInformation);

    /**
     * 修改提现记录
     *
     * @param
     * @return
     */
    int updateRecruitmentInformation(DbRecruitmentInformation recruitmentInformation);

    /**
     * 查询提现记录列表
     *
     * @param
     * @return
     */
    List<Map> findRecruitmentInformationList(Map map);
    int findRecruitmentInformationListCount(Map map);


}
