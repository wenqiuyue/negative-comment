<template>  
  <div class="login">
    <div class="card">
       <el-image
        class="c_bg_img"
        :src="require('@/assets/images/bg_l1.jpg')"
        ></el-image>
        <div class="login_card">
          <div class="l_c_top">
            <el-image
              style="width:40px"
              :src="require('@/assets/images/logo-17.png')"
              ></el-image>
            <div>Bad comments website</div>
          </div>
           <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login_form">
            <el-form-item prop="acc" class="padding_item">
              <el-input v-model="loginForm.acc" placeholder="Email">
                <svg-icon slot="prefix" value="icon-yonghuming"></svg-icon>
              </el-input>
            </el-form-item>
            <el-form-item prop="pwd" class="padding_item" style="margin-bottom:5px">
              <el-input v-model="loginForm.pwd" placeholder="Password" show-password>
                <svg-icon slot="prefix" value="icon-mima"></svg-icon>
              </el-input>
            </el-form-item>
             <el-form-item class="padding_item last_item">
              <!-- <el-checkbox v-model="automaticChecked">Remember the password</el-checkbox> -->
              <a class="forget" :href="`${pageUrl}/forget-password`">Forget Password?</a>
            </el-form-item>
            <el-form-item class="btn_item">
              <el-button class="login_btn" type="primary" @click="login" :loading="loading">Login</el-button>
            </el-form-item>
            <div class="register_tips">No account yet? <span @click="handleReg">Register now</span></div>
          </el-form>
        </div>
    </div>
  </div>
</template>
<script>
// import type from '../../commons/type';
export default {
  data(){
    return{
      loading:false, //加载
      loginForm:{
        acc:null,
        pwd:null
      },
      automaticChecked:false, //自动登录
      rules: {
        acc: [
          { required: true, message: 'Please input email', trigger: 'blur' },
        ],
        pwd: [
          { required: true, message: 'Please enter a valid password', trigger: 'blur' },
        ],
      }
    }
  },
  computed:{
    pageUrl(){
      return process.env.VUE_APP_PAGE_URL;
    }
  },
   created() {
  },
  methods:{
    /**
     * 注册
     */
    handleReg(){
      this.$router.push({
        path:'/register'
      })
    },
    /**
     * 登录
     */
    login(){
      this.$refs.loginForm.validate((valid)=>{
        if(valid){
          this.backstageLogin();
        }else{
          return;
        }
      })
    },
    /**
     * 后台登录
     */
    backstageLogin(){
      this.loading=true;
          this.$apiHttp.getProcessDetails(this.loginForm).then((resp)=>{
            if(resp.res==200){
              // localStorage.setItem(type.USER, JSON.stringify(resp.data));
              this.$store.dispatch("login", resp.data.token);
              this.$router.push({
                path: "/home"
              });
            }
            this.loading=false;
          })
    },
    /**
     * 后台验证Token
     */
    // handleCheckToken() {
    //   if (localStorage.getItem(type.TOKEN) && localStorage.getItem(type.USER)) {
    //     this.$router.push({
    //       path: "/home"
    //     })
    //   }
    // },
  }
}
</script>
<style lang="less" scoped>
.login{
  width: 100%;
  height: 100%;
  // background-color: #D7E2FE;
  background: url("~@/assets/images/bg.jpg") no-repeat;
  background-size:100% 100%;
  position: relative;
  .card{
    background: #ffffff;
    width: 76%;
    height: 74%;
    position: absolute;
    top: 13%;
    left: 12%;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    /deep/.c_bg_img{
      flex-shrink: 0;
      width:50%; 
      height: 100%;
      img{
        border-radius: 10px 0 0 10px;
      }
    }
    .login_card{
      width: 50%;
      padding: 25px 45px;
      .l_c_top{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 48px;
        div{
          color: #2B7DF2;
          margin-left: 8px;
          font-size: 20px;
        }
      }
    }
  }
  .login_form{
    margin-top: 30px;
    /deep/.padding_item{
      padding: 0 20px;
      .el-input__inner{
        height: 55px;
        line-height: 55px;
      }
    }
    /deep/.last_item{
      margin-bottom: 14px;
      .forget{
        float: right;
        color: #999999;
        text-decoration: none;
      }
    }
    /deep/.btn_item{
      padding: 0 20px;
      height: 55px;
      .el-form-item__content{
        height: 100%;
      }
      .el-button{
        width: 100%;
        height: 100%;
        font-size: 20px;
        background-color: #6cafff;
        background-image: linear-gradient(90deg, #6cafff 12%, #0a60ff 93%);
        box-shadow: 0 6px 20px -5px rgba(80,166,255,.7);
      }
    }
    .register_tips{
      text-align: center;
      margin-top: 30px;
      font-size: 14px;
      span{
        cursor: pointer;
        color: #428AFF;
      }
    }
  }
}
@media all and (max-width: 1024px) {
  .login{
    .card{
      width: 94%;
      height: 94%;
      top: 3%;
      left: 3%;
      /deep/.c_bg_img{
        width:0; 
        height: 0;
      }
      .login_card{
        width: 100%;
        padding: 25px 0;
      }
    }
  }
}
</style>