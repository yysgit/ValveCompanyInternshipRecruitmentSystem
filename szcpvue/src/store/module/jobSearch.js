import {
    addJobSearchType,
  } from '@/api/jobSearch'
  import { setToken, getToken } from '@/libs/util'
  
  export default {
    state: {
      token: getToken()
    },
    mutations: {
      setToken(state, token) {
        state.token = token
        setToken(token)
      }
    },
    getters: {
  
    },
    actions: {
      //提交表单
      addJobSearchType({ state, commit }, {fundType} ) {
          console.log(fundType,12345)
        return new Promise((resolve, reject) => {
          try {
            addJobSearchType(state.token, fundType).then(res => {
              const data = res.data;
              resolve(data)
            }).catch(err => {
              reject(err)
            })
          } catch (error) {
            reject(error)
          }
        })
      },

    }
  }
  