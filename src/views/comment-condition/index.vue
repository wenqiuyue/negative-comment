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
              <el-divider class="divider"></el-divider>
              <div class="time">4 days ago</div>
              <h2 class="title">Me and my wife started this bout a month ago and we've defo got the bug now love love</h2>
              <p class="content">I have just signed up to FIIT and the Total Burn training plan, I absolutely love it. I can not recommend this app enough! The instructors are great and I always feel like I’ve had a good workout by the end of every session. I find the training programme really motivating and like that the classes are released each week so it’s not just a long list of ones to complete. I’ve been trying some of the breathing classes lately and I’ve been sleeping much better! So happy I signed up to this!</p>
              <div class="tag_group">
                <el-tag size="small" v-for="(tag,index) in 4" :key="index">poor</el-tag>
              </div>
              <div class="score_date">
                    <div class="s_d_com">
                      <span>comment(3)</span>
                      <i class="el-icon-caret-bottom"></i>
                    </div>
                    <el-divider direction="vertical"></el-divider>
                    <div class="card_bottom">
                      <el-tooltip class="item" effect="dark" content="Useful" placement="top-start">
                        <svg-icon value="icon-xihuan1" :size="1.1" style="color:#aaa"></svg-icon>
                      </el-tooltip>
                      <span>(2)</span>
                    </div>
                    <el-divider direction="vertical"></el-divider>
                    <div class="card_bottom">
                      <el-tooltip class="item" effect="dark" content="Report" placement="top-start">
                        <svg-icon value="icon-jubao" :size="1.1" style="color:#aaa"></svg-icon>
                      </el-tooltip>
                    </div>
                    <el-divider direction="vertical"></el-divider>
                    <div class="card_bottom">
                      <el-tooltip class="item" effect="dark" content="Delete" placement="top-start">
                        <svg-icon value="icon-shanchu1" :size="1.1" style="color:#aaa"></svg-icon>
                      </el-tooltip>
                    </div>
                  </div>
                  <template v-if="true">
                    <div class="comment">
                      <el-input
                        type="textarea"
                        :rows="3"
                        placeholder="Please input"
                        v-model="commentText">
                      </el-input>
                      <div class="c_btn_group">
                        <el-button type="info" plain size="mini">Cancel</el-button>
                        <el-button size="mini">Post Comment</el-button>
                      </div>
                    </div>
                    <div class="reply">
                      <svg-icon value="icon-icon_reply"></svg-icon>
                      <div class="reply_right">
                        <div class="reply_right_user">
                          <span>Reply from Paw Print Genetics</span>
                          <span class="date">2021年12月</span>
                        </div>
                        <div class="reply_right_text">
                          Thank you for your review, Diane. We are so happy to hear you have had a great experience . Thank you for choosing PPG!
                        </div>
                      </div>
                    </div>
                    <div class="reply" v-for="(item,index) in 4" :key="index">
                      <div class="reply_right">
                        <div class="reply_right_user">
                          <div class="user_info">
                            <el-avatar size="large" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
                            <span>Courtney M.</span>
                          </div>
                          <span class="date">2021年12月</span>
                        </div>
                        <div class="reply_right_text">
                          Thank you for your review, Diane. We are so happy to hear you have had a great experience . Thank you for choosing PPG!
                        </div>
                      </div>
                    </div>
                  </template>
            </div>
          </div>
        </div>
        <div>
          <el-button type="primary" plain class="solved_btn">Solved</el-button>
          <div class="solved_tips">
            <i class="el-icon-info"></i>
            <span>If the company's reply has solved your problem, please click the "solved" button.</span>
          </div>
        </div>
      </div>
      <footer-com></footer-com>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      commentText:null
    }
  }
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
            .divider{
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
              padding-bottom: 5px;
              .el-tag{
                margin-right: 5px;
              }
            }
            .score_date{
              border-top: 1px solid #e8e8eb;
              display: flex;
              flex-direction: row;
              align-items: center;
              padding-top: 12px;
              .s_d_com{
                display: flex;
                flex-direction: row;
                align-items: center;
                cursor: pointer;
                span{
                  color: #6d728b;
                  font-size: 14px;
                }
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
            .comment{
              margin-top: 14px;
              .c_btn_group{
                margin-top: 10px;
                button:nth-child(2){
                  background: #02C48D;
                  color: #ffffff;
                  border-color: #02C48D;
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
                  .user_info{
                    display: flex;
                    align-items: center;
                    span:last-child{
                      font-size: 14px;
                      color: #454554;
                      margin-left: 5px;
                      font-weight: bolder;
                    }
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
      .solved_tips{
        font-size: 12px;
        margin-top: 8px;
        color: #E14242;
        span{
          margin-left: 5px;
        }
      }
    }
  }
}
  @media all and (max-width: 1024px) {
    .comment-condition{
      .comment-condition_main{
        .main_head{
          padding: 20px 12px;
          background: #ffffff;
          .m_h_content{
            .el-avatar{
              width: 66px;
              height: 66px;
            }
            .m_h_c_user{
              margin-left: 34px;
            }
          }
        }
        .comment_list{
          width: 96%;
          margin: 0 auto;
          padding: 28px 0 26px 0;
          .c_l_main{
            .c_l_m_card{
              .card_comment{
                padding: 16px 12px;
                .reply{
                 margin-top: 6px;
                 padding:14px 8px;
                  .reply_right{
                    .reply_right_user{
                      span:first-child{
                        font-size: 13px;
                      }
                      span:last-child{
                        font-size: 12px;
                      }
                      .user_info{
                        span:last-child{
                          font-size: 13px;
                        }
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
          .solved_tips{
            font-size: 12px;
            margin-top: 8px;
            color: #E14242;
            span{
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
</style>