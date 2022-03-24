import axios from '@/libs/api.request'
import qs from 'qs'

/**
 * 添加
 * @param {*} token 
 * @param {*} searchPream 
 * @returns 
 */
export const addJobSearchType = (token,searchPream) => {
  return axios.request({
    url: 'sys/recruitmentInformation/addRecruitmentInformation',
    params: {
      token,searchPream
    },
    method: 'post'
  })
}
/**
 * 修改
 * @param {*} token 
 * @param {*} searchPream 
 * @returns 
 */
export const upJobSearchType = (token,searchPream) => {
  return axios.request({
    url: 'sys/recruitmentInformation/addRecruitmentInformation',
    params: {
      token,searchPream
    },
    method: 'post'
  })
}
/**
 * 获取表格
 * @param {*} token 
 * @param {*} searchPream 
 * @returns 
 */
export const getJobSearchTableList = (token,searchPream) => {
  return axios.request({
    url: 'sys/recruitmentInformation/findRecruitmentInformationList',
    params: {
      token,searchPream
    },
    method: 'post'
  })
}
/**
 * 删除
 * @param {*} token 
 * @param {*} fundInfo 
 * @returns 
 */
export const deleteJobSearchById= (token,fundInfo) => {
  return axios.request({
    url: 'sys/recruitmentInformation/deleteRecruitmentInformation',
    params: {
      token,
      fundInfo
    },
    method: 'post'
  })
}
