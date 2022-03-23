import axios from '@/libs/api.request'
import qs from 'qs'


export const addJobSearchType = (token,searchPream) => {
  return axios.request({
    url: '/sys/fundType/findFundTypeList123',
    params: {
      token,searchPream
    },
    method: 'post'
  })
}



