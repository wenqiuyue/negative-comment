<template>
  <div class="comment-condition">
    <header-com></header-com>
    <div class="comment-condition_main">
      <div class="main_head">
        <div class="m_h_content">
          <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
          <div class="m_h_c_user">
            <h1>Kenny 13</h1>
            <div>United Kingdom</div>
          </div>
        </div>
      </div>
      <div class="comment_list">
        <div class="c_l_main">
          <div class="c_l_m_card">
            <div class="card_pro">
              <span>Review of <a href="#">Fiit</a></span>
            </div>
            <div class="card_comment">
              <div class="c_c_user">
                <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                <div class="user">
                  <h1>Kenny 13</h1>
                  <div><i class="el-icon-edit"></i> 1 review</div>
                </div>
              </div>
              <el-divider></el-divider>
              <div class="time">4 days ago</div>
              <h2 class="title">Me and my wife started this bout a month ago and we've defo got the bug now love love</h2>
              <p class="content">I have just signed up to FIIT and the Total Burn training plan, I absolutely love it. I can not recommend this app enough! The instructors are great and I always feel like I’ve had a good workout by the end of every session. I find the training programme really motivating and like that the classes are released each week so it’s not just a long list of ones to complete. I’ve been trying some of the breathing classes lately and I’ve been sleeping much better! So happy I signed up to this!</p>
              <div class="tag_group">
                <el-tag size="small" v-for="(tag,index) in 4" :key="index">poor</el-tag>
              </div>
              <el-divider></el-divider>
              <div class="card_bottom">
                <div class="item">
                  <el-tooltip class="item" effect="dark" content="Useful" placement="top-start">
                    <svg-icon value="icon-xihuan1" :size="1.2" style="color:#aaa"></svg-icon>
                  </el-tooltip>
                  <span>(0)</span>
                </div>
              </div>
              <div class="reply">
                <svg-icon value="icon-icon_reply"></svg-icon>
                <div class="reply_right">
                  <div class="reply_right_user">
                    <span>Reply from Paw Print Genetics</span>
                    <span class="date">12月20日</span>
                  </div>
                  <div class="reply_right_text">
                    Thank you for your review, Diane. We are so happy to hear you have had a great experience . Thank you for choosing PPG!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <el-button type="primary" plain class="solved_btn">Solved</el-button>
      </div>
      <footer-com></footer-com>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.comment-condition{
  background-color: #f2f2f2;
  .comment-condition_main{
    .main_head{
      padding: 30px 20px;
      background: #ffffff;
      .m_h_content{
        max-width: 842px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        .el-avatar{
          width: 73px;
          height: 73px;
        }
        .m_h_c_user{
          margin-left: 46px;
          h1{
            font-size: 26px;
            margin: 0 0 10px 0;
            font-weight: normal;
            color: #32323d;
          }
          div{
            font-size: 12px;
            line-height: 1.42857;
            color: #292929;
          }
        }
      }
    }
    .comment_list{
      width: 60%;
      margin: 0 auto;
      padding: 48px 0 26px 0;
      .c_l_main{
        .c_l_m_card{
          .card_pro{
            margin-bottom: 16px;
            color: #292929;
            font-size: 14px;
            a{
              color: #428bca;
              text-decoration: none;
            }
          }
          .card_comment{
            padding: 24px;
            background: #ffffff;
            .c_c_user{
              display: flex;
              flex-direction: row;
              align-items: center;
              .el-avatar{
                width: 44px;
                height: 44px;
              }
              .user{
                margin-left: 10px;
                h1{
                  font-size: 14px;
                  margin: 0 0 6px 0;
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
            .el-divider{
              margin: 12px 0;
            }
            .time{
              color: #73738f;
              font-size: 14px;
            }
            .title{
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
              .el-tag{
                margin-right: 5px;
              }
            }
            .card_bottom{
              display: flex;
              flex-direction: row;
              align-items: center;
              .item{
                display: flex;
                flex-direction: row;
                align-items: center;
                svg{
                  cursor: pointer;
                }
                span{
                  margin-left: 5px;
                  color: #666666;
                  user-select: none;
                }
              }
            }
            .reply{
              margin-top: 18px;
              padding:16px;
              background-color: #f2f2f5;
              border-radius: 2px;
              border-left: 5px solid #02C48D;
              display: flex;
              flex-direction: row;
              .reply_right{
                margin-left: 8px;
                flex: 1;
                .reply_right_user{
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  span:first-child{
                    font-weight: bolder;
                    font-size: 14px;
                    color: #454554;
                  }
                  span:last-child{
                    font-size: 14px;
                    color:#73738f;
                  }
                }
                .reply_right_text{
                  margin-top: 12px;
                  color: #515174;
                  font-size: 14px;
                  word-break: break-all;
                }
              }
            }
          }
        }
      }
      .solved_btn{
        width: 100%;
        margin-top: 14px;
      }
    }
  }
}
</style>