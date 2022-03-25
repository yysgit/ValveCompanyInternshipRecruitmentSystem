package com.yys.szcp.entity;

import com.baomidou.mybatisplus.enums.IdType;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;
import java.util.Date;

/**
 * <p>
 * 招聘信息
 * </p>
 *
 * @author yys
 * @since 2022-03-23
 */
public class DbRecruitmentInformation  {


	private Integer id;
    /**
     *  岗位名称 
     */
	private String postName;
    /**
     * 年薪
     */
	private String postAnnualSalary;
    /**
     * 职位类型
     */
	private String postType;
    /**
     * 学历
     */
	private String postEducation;
    /**
     * 职位简介
     */
	private String postProfile;
    /**
     * 详细地址
     */
	private String companyAddress;
    /**
     * 地区
     */
	private String companyRegion;
    /**
     * 公司名称
     */
	private String companyName;
    /**
     * 公司简介
     */
	private String companyProfile;
	/**
	 * 公司邮箱
	 */
	private String companyMailbox;
	/**
	 * 创建时间
	 */
	private Date createTime;
	/**
	 * 更新时间
	 */
	private Date updateTime;
	/**
	 * 是否删除0: 未删除, 1表示删除
	 */
	private Integer deleteStatus;

	public String getCompanyMailbox() {
		return companyMailbox;
	}

	public void setCompanyMailbox(String companyMailbox) {
		this.companyMailbox = companyMailbox;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	public Integer getDeleteStatus() {
		return deleteStatus;
	}

	public void setDeleteStatus(Integer deleteStatus) {
		this.deleteStatus = deleteStatus;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getPostName() {
		return postName;
	}

	public void setPostName(String postName) {
		this.postName = postName;
	}

	public String getPostAnnualSalary() {
		return postAnnualSalary;
	}

	public void setPostAnnualSalary(String postAnnualSalary) {
		this.postAnnualSalary = postAnnualSalary;
	}

	public String getPostType() {
		return postType;
	}

	public void setPostType(String postType) {
		this.postType = postType;
	}

	public String getPostEducation() {
		return postEducation;
	}

	public void setPostEducation(String postEducation) {
		this.postEducation = postEducation;
	}

	public String getPostProfile() {
		return postProfile;
	}

	public void setPostProfile(String postProfile) {
		this.postProfile = postProfile;
	}

	public String getCompanyAddress() {
		return companyAddress;
	}

	public void setCompanyAddress(String companyAddress) {
		this.companyAddress = companyAddress;
	}

	public String getCompanyRegion() {
		return companyRegion;
	}

	public void setCompanyRegion(String companyRegion) {
		this.companyRegion = companyRegion;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getCompanyProfile() {
		return companyProfile;
	}

	public void setCompanyProfile(String companyProfile) {
		this.companyProfile = companyProfile;
	}


}
