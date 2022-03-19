<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="Valve公司实习招聘系统" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit" @on-success-register="handleRegister"></login-form>
          <p class="login-tip" style="color: green">Valve公司实习招聘系统</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
  import LoginForm from '_c/login-form'
  import {mapActions} from 'vuex'

  export default {
    components: {
      LoginForm
    },
    created() {
      //注册that
      this.setThat();
    },


    methods: {
      ...mapActions([
        'handleLogin',
        'getUserInfo',
        'getVcode',
        'setThatVue'

      ]),

      //设置that
      setThat(){
        var that=this;
        this.setThatVue({that}).then(res => {
          // console.log("设置that:"+res);
        })

      },
      handleSubmit({username, password, vcode}) {

        this.handleLogin({username, password, vcode}).then(res => {
          // console.log("login请求:" + res);
          if(res.code==200){
            this.getUserInfo().then(res => {
              // console.log(this.$config.homeName)
              this.$router.push({
                name: this.$config.homeName
              })
            })
          }
        })
      },
      /**
       * 注册
       */
      handleRegister(value) {
        console.log(value,123);
        this.handleLogin({username, password, vcode}).then(res => {
          // console.log("login请求:" + res);
          if(res.code==200){
            this.getUserInfo().then(res => {
              // console.log(this.$config.homeName)
              this.$router.push({
                name: this.$config.homeName
              })
            })
          }
        })
      },



    }
  }
</script>

<style>

</style>
