package com.yys.szcp.service.impl;

import com.yys.szcp.entity.DbRecruitmentInformation;
import com.yys.szcp.mapper.DbRecruitmentInformationMapper;
import com.yys.szcp.service.DbRecruitmentInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class RecruitmentInformationServiceImpl implements DbRecruitmentInformationService {

    @Autowired
    private DbRecruitmentInformationMapper RecruitmentInformationMapper;

    @Override
    public int addRecruitmentInformation(DbRecruitmentInformation recruitmentInformation) {
        return RecruitmentInformationMapper.addRecruitmentInformation(recruitmentInformation);
    }

    @Override
    public int deleteRecruitmentInformation(DbRecruitmentInformation recruitmentInformation) {
        return RecruitmentInformationMapper.deleteRecruitmentInformation(recruitmentInformation);
    }

    @Override
    public int updateRecruitmentInformation(DbRecruitmentInformation recruitmentInformation) {
        return RecruitmentInformationMapper.updateRecruitmentInformation(recruitmentInformation);
    }

    @Override
    public List<Map> findRecruitmentInformationList(Map map) {
        return RecruitmentInformationMapper.findRecruitmentInformationList(map);
    }

    @Override
    public int findRecruitmentInformationListCount(Map map) {
        return RecruitmentInformationMapper.findRecruitmentInformationListCount(map);
    }

}
