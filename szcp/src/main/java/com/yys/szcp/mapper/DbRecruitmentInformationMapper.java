package com.yys.szcp.mapper;

import com.yys.szcp.entity.DbRecruitmentInformation;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface DbRecruitmentInformationMapper {

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
