<template>
  <div class="find-information">
    <header-com></header-com>
    <div class="info_main">
      <el-row>
        <el-col :span="12" :xs="24">
          <div class="info_left">
            <h1 class="title">Provied WhiteHatBox with more information</h1>
            <p class="info_content">
              This will help write a more useful reply to you.It'll also help them verify that you've had a genuine experience with their business.
            </p>
            <el-form ref="form" :model="form" label-width="170px" :label-position="isMobile()?'top':'left'">
              <el-form-item label="Email:">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item label="Reference number:">
                <el-input v-model="form.reference"></el-input>
              </el-form-item>
              <el-form-item label="Full name:">
                <el-input v-model="form.fullName"></el-input>
              </el-form-item>
              <el-form-item label="Phone number:">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">Send information</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :span="12" :xs="24">
          <div class="info_right">
            <h1 class="title">Your review</h1>
            <div class="c_c_user">
              <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
              <div class="user">
                <h1>Kenny 13</h1>
                <div><i class="el-icon-edit"></i> 1 review</div>
              </div>
              </div>
            <el-divider class="divider"></el-divider>
            <div class="time">4 days ago</div>
            <h2 class="title_review">Me and my wife started this bout a month ago and we've defo got the bug now love love</h2>
            <p class="content">I have just signed up to FIIT and the Total Burn training plan, I absolutely love it. I can not recommend this app enough! The instructors are great and I always feel like I’ve had a good workout by the end of every session. I find the training programme really motivating and like that the classes are released each week so it’s not just a long list of ones to complete. I’ve been trying some of the breathing classes lately and I’ve been sleeping much better! So happy I signed up to this!</p>
            <div class="tag_group">
              <el-tag size="small" v-for="(tag,index) in 4" :key="index">poor</el-tag>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <footer-com></footer-com>
  </div>
</template>
<script>
import {isMobile} from "../../commons";
export default {
  data(){
    return{
      form:{
        email:null,
        reference:null,
        fullName:null,
        phone:null,
      }
    }
  },
  methods:{
    isMobile,
  }
}
</script>
<style lang="less" scoped>
.find-information{
  height: 100%;
  .info_main{
    background: #f2f2f5;
    padding: 10px;
    .el-row{
      background: #ffffff;
      .info_left{
        padding: 26px;
        .title{
          margin: 0;
          font-size: 22px;
        }
        .info_content{
          color: #606266;
          margin: 16px 0 34px 0;
          font-size: 15px;
        }
        .el-form{
          /deep/.el-form-item__label{
            color: #30322E;
          }
        }
      }
      .info_right{
        padding: 26px;
        .title{
          margin: 0;
          font-size: 22px;
        }
        .c_c_user{
          margin: 12px 0;
          display: flex;
          flex-direction: row;
          align-items: center;
          .el-avatar{
            width: 42px;
            height: 42px;
          }
          .user{
            margin-left: 10px;
            h1{
              font-size: 14px;
              margin: 0 0 3px 0;
              font-weight: normal;
              color: #454554;
            }
            div{
              font-size: 12px;
              line-height: 1.42857;
              color: #73738f;
            }
          }
        }
        .divider{
          margin: 12px 0;
        }
        .time{
          color: #73738f;
          font-size: 14px;
        }
        .title_review{
          font-size: 18px;
          color: #292929;
          font-weight: normal;
          margin: 6px 0 8px 0;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
        }
        .content{
          line-height: 1.5rem;
          margin: 0;
          color: #32323d;
          font-size: 14px;
        }
        .tag_group{
          margin-top: 8px;
          padding-bottom: 5px;
          .el-tag{
            margin-right: 5px;
          }
        }
      }
    }
  }
}
@media all and (max-width: 1024px) {
  /deep/.el-form-item {
    margin-bottom: 10px;
  }
  /deep/.el-form-item__label{
    padding: 0;
  }
}
</style>
