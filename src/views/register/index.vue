<template>  
  <div class="register" v-loading="loading">
    <div class="card">
      <div class="l_c_top">
        Sign up
      </div>
      <el-form :model="registerForm" :rules="rules" ref="registerForm" class="register_form">
        <el-form-item prop="name" class="padding_item">
          <el-input v-model="registerForm.name" placeholder="Full Name">
          </el-input>
        </el-form-item>
        <el-form-item prop="email" class="padding_item">
          <el-input v-model="registerForm.email" placeholder="Email">
          </el-input>
        </el-form-item>
        <el-form-item prop="pwd" class="padding_item">
          <el-input v-model="registerForm.pwd" placeholder="Password">
          </el-input>
        </el-form-item>
        <el-form-item class="btn_item">
          <el-button class="register_btn" type="primary" @click="register">Sign Up</el-button>
        </el-form-item>
        <div class="register_tips">Already have an account?  <span @click="handleLogin">Sign In</span></div>
      </el-form>
    </div>
    <!-- <Notice ref="notice"></Notice> -->
  </div>
</template>
<script>
export default {
  components:{
    // Notice:()=> import('./notice')
  },
  data(){
    return{
      loading:false, //加载
      registerForm:{
        name:null,
        email:null,
        pwd:null
      },
      isRead:false, //是否阅读
      rules: {
        name: [
          { required: true, message: 'Please input your name', trigger: 'blur' },
        ],
        email: [
          { required: true, message: 'Please input email', trigger: 'blur' },
          { type: 'email', message: 'Email format error', trigger: ['blur', 'change']  },
        ],
        pwd: [
          { required: true, message: 'Please input password', trigger: 'blur' },
        ],
      }
    }
  },
   created() {
  },
  methods:{
    /**
     * 登录
     */
    handleLogin(){
      this.$router.push({
        path:'/'
      })
    },
    /**
     * 注册
     */
    register(){
      this.$refs.registerForm.validate((valid)=>{
        if(valid){
          this.backstageRegister();
        }else{
          return;
        }
      })
    },
  }
}
</script>
<style lang="less" scoped>
.register{
  width: 100%;
  height: calc(100% - 40px);
  // background-color: #D7E2FE;
  background: url("~@/assets/images/bg.jpg") no-repeat;
  background-size:100% 100%;
  padding-top: 40px;
  .card{
    background: #ffffff;
    width: 40%;
    height: 70%;
    margin: 0 auto;
    border-radius: 10px;
    padding: 32px 28px;
    margin-top: 56px;
    box-shadow: 0 6px 20px -5px rgba(80,166,255,.7);
    .l_c_top{
    color: #2B7DF2;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    }
  }
  .register_form{
    margin-top: 40px;
    /deep/.padding_item{
      padding: 0 20px;
      margin-bottom: 30px;
      .el-input__inner{
        height: 55px;
        line-height: 55px;
      }
    }
    /deep/.last_item{
      // margin-bottom: 5px;
      margin-top: 26px;
      .read{
        color: #428AFF;
        cursor: pointer;
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
      color: #606266;
      span{
        cursor: pointer;
        color: #428AFF;
      }
    }
  }
}
@media all and (max-width: 1024px) {
  .register{
    padding-top: 1px;
    height: 100%;
    .card{
      width: 97%;
      height: 80%;
      padding: 32px 0px;
      margin-top: 33px;
    }
  }
}
</style>