<template>  
  <div class="forget-password">
    <div class="card">
       <el-image
        class="c_bg_img"
        :src="require('@/assets/images/bg_l1.jpg')"
        ></el-image>
        <div class="forget_card">
          <div class="l_c_top">
            <el-image
              style="width:40px"
              :src="require('@/assets/images/logo-17.png')"
              ></el-image>
            <div>Reset Password</div>
          </div>
           <el-form :model="form" :rules="rules" ref="form" class="forget_form">
            <el-form-item prop="email" class="padding_item">
              <el-input v-model="form.email" placeholder="Email">
              </el-input>
            </el-form-item>
            <el-form-item class="btn_item">
              <el-button class="forget_btn" type="primary" @click="handleSend" :loading="loading">Send Password Reset Link</el-button>
            </el-form-item>
            <div class="register_tips">Already have an account?  <a :href="pageUrl">Sign In</a></div>
            <div class="register_tips">Need an account? <a :href="`${pageUrl}/register`">Sign up</a></div>
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
      form:{
        email:null,
      },
      rules: {
        email: [
          { required: true, message: 'Please input email', trigger: 'blur' },
          { type: 'email', message: 'Email format error', trigger: ['blur', 'change']  },
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
     * 发送修改密码邮件
     */
    handleSend(){
      this.$router.push({
        path:'/password-reset'
      })
    }
  }
}
</script>
<style lang="less" scoped>
.forget-password{
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
    .forget_card{
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
  .forget_form{
    margin-top: 68px;
    /deep/.padding_item{
      padding: 0 20px;
      margin-bottom: 46px;
      .el-input__inner{
        height: 55px;
        line-height: 55px;
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
      a{
        text-decoration: none;
        color: #428AFF;
      }
    }
    .register_tips:last-child{
      margin-top: 5px;
    }
  }
}
@media all and (max-width: 1024px) {
  .forget-password{
    .card{
      width: 94%;
      height: 94%;
      top: 3%;
      left: 3%;
      /deep/.c_bg_img{
        width:0; 
        height: 0;
      }
      .forget_card{
        width: 100%;
        padding: 25px 0;
      }
    }
  }
}
</style>