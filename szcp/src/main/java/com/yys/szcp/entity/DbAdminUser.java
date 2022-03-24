package com.yys.szcp.entity;

import io.swagger.models.auth.In;

import java.util.Date;


/**
 * <p>
 * 管理用户信息表
 * </p>
 *
 * @author yys
 * @since 2020-02-02
 */

public class DbAdminUser{

	private Integer id;
    /**
     * 所属角色（外键）
     */
	private Integer roleId;


    /**
     * 管理员名称
     */
	private String adminName;
    /**
     * 真实姓名
     */
    private String adminFullname;
    /**
     * 管理员手机号
     */
	private String adminPhone;
    /**
     * 管理员密码
     */
	private String adminPassword;
    /**
     * 创建时间
     */
	private Date createTime;
    /**
     * 更新时间
     */
	private Date updateTime;
    /**
     * 最后登录时间
     */
	private Date lastLoginTime;
    /**
     * 是否删除0: 未删除, 1表示删除
     */
	private Integer deleteStatus;
	/**
	 * 年龄
	 */
	private String age;

	/**
	 * 学历: 小学,初中,高中,专科,本科,研究生,博士,博士后
	 */
	private String education;

	/**
	 * 院校
	 */
	private String school;

	/**
	 * 专业
	 */
	private String subject;
	/**
	 * hr 上级
	 */
	private Integer superiorUserId;

	public Integer getSuperiorUserId() {
		return superiorUserId;
	}

	public void setSuperiorUserId(Integer superiorUserId) {
		this.superiorUserId = superiorUserId;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getRoleId() {
		return roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}


	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getAdminPhone() {
		return adminPhone;
	}

	public void setAdminPhone(String adminPhone) {
		this.adminPhone = adminPhone;
	}

	public String getAdminPassword() {
		return adminPassword;
	}

	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
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

	public Date getLastLoginTime() {
		return lastLoginTime;
	}

	public void setLastLoginTime(Date lastLoginTime) {
		this.lastLoginTime = lastLoginTime;
	}

	public Integer getDeleteStatus() {
		return deleteStatus;
	}

	public void setDeleteStatus(Integer deleteStatus) {
		this.deleteStatus = deleteStatus;
	}


    public String getAdminFullname() {
        return adminFullname;
    }

    public void setAdminFullname(String adminFullname) {
        this.adminFullname = adminFullname;
    }

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getEducation() {
		return education;
	}

	public void setEducation(String education) {
		this.education = education;
	}

	public String getSchool() {
		return school;
	}

	public void setSchool(String school) {
		this.school = school;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}
}
