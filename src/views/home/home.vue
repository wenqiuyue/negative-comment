<template>
<div class="home" v-loading="loading">
  <header-com :isShowSearch="false"></header-com>
  <div class="h_home">
    <div class="banner">
      <div class="c_banner">
        <h1 class="title_1">Behind every comment is a story</h1>
        <h2 class="title_2">Read reviews. Write reviews. Find businesses.</h2>
        <div class="b_search">
          <el-input class="s_input" v-model="searchData" placeholder="Search for a company or category…"></el-input>
          <el-button class="s_button" type="primary" icon="el-icon-search" @click="handleSearch">Search</el-button>
        </div>
        <h2 class="title_3">Browse businesses by category</h2>
        <div class="b_type">
          <div class="type_card" v-for="(item,index) in hotType" :key="item.id" @click="handleProList(item)">
            <div class="type_card_icon">
              <svg-icon value="icon-fuwuleixing" :size="1.6" :color="'#9AE5D6'"></svg-icon>
            </div>
            <div class="type_card_text">{{item.TypeName}}</div>
          </div>
          <div class="type_card" @click="goCategories">
            <div class="type_card_icon">
              <svg-icon value="icon-fuwuleixing" :size="1.6" :color="'#9AE5D6'"></svg-icon>
            </div>
            <div class="type_card_text">More</div>
          </div>
        </div>
      </div>
    </div>
    <div class="recent_reviews pc" @click="clickCard($event)">
      <div class="r_r_title">Recent reviews</div>
      <vue-seamless-scroll v-if="hotReview && hotReview.length>0" :data="hotReview" :class-option="defaultOption" class="seamless-warp">
        <div class="r_r_reviews" >
          <div class="r_r_r_card" v-for="(item,index) in hotReview" :key="index">
            <div class="r_r_r_c_card" v-for="(review,ind) in item" :key="ind">
              <div class="c_title">
                <el-avatar class="c_t_img" size="large" :src="review.Icon"></el-avatar>
                <p class="c_user">{{review.Name}} <span class="rev">reviewed</span> <span :data-pro="JSON.stringify(review)" :id="review.Id"  class="pro">{{review.ProName}}</span></p>
              </div>
              <p class="c_text">
                {{review.Content}}
              </p>
            </div>
          </div>
        </div>
      </vue-seamless-scroll>
      <empty v-else :tips="'No hot comments'" :paddingData="3"></empty>
    </div>
    <div class="recent_reviews phone">
      <div class="r_r_title">Recent reviews</div>
        <div class="r_r_reviews" v-if="hotReview && hotReview.length>0">
          <div class="r_r_r_card" v-for="(item,index) in hotReview" :key="index">
            <div class="r_r_r_c_card" v-for="(review,ind) in item" :key="ind">
              <div class="c_title">
                <el-avatar class="c_t_img" size="large" :src="url+review.Icon"></el-avatar>
                <p class="c_user">{{review.Name}} <span class="rev">reviewed</span> <span @click="handleProInfo(review)" class="pro">{{review.ProName}}</span></p>
              </div>
              <p class="c_text">
                {{review.Content}}
              </p>
            </div>
          </div>
        </div>
      <empty v-else :tips="'No hot comments'" :paddingData="3"></empty>
    </div>
    <div class="terrible_business">
      <div class="t_b_title">Most Terrible Business</div>
      <div class="t_b_list" v-if="hotProduct && hotProduct.length">
        <div class="t_b_card" v-for="(item,index) in hotProduct" :key="item.ProId" @click="handleProInfo(item)">
          <div class="c_product">
            <div class="p_img">
              <img
                :src="url+item.Image"
              >
              </img>
            </div>
            <div class="c_p_right">
              <p>{{item.Name}}</p>
              <div class="c_p_r_score">
                <!-- <rate
                  class="c_t_rate"
                  :value="3"
                  :isDisabled="true"
                >
                </rate> -->
                <span class="score">{{item.Score}}%</span>
              </div>
            </div>
          </div>
          <p class="t_b_c_text">
            {{item.Content}}
          </p>
          <p class="t_b_c_user">{{item.Time?dateEnglish(item.Time):'--:--'}}  •  by {{item.UserName}}</p>
        </div>
        <div class="t_b_card t_b_card_empty"></div>
        <div class="t_b_card t_b_card_empty"></div>
      </div>
       <empty v-else :tips="'No data available'" :paddingData="3"></empty>
    </div>
    <div class="be_heard">
      <h1 class="heard_title">About Sitespilot</h1>
      <p class="heard_text">
        Sitespilot.com is committed to creating the most authentic review platform, where everyone can easily share the most authentic experience. Provide valuable reference for other users.
      </p>
      <div class="what_do"><el-button class="companies" type="gone" plain @click="goCategories">Find out</el-button></div>
    </div>
    <footer-com></footer-com>
  </div>
</div>
</template>
<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
import {dateEnglish} from '../../commons';
export default {
  components:{
    vueSeamlessScroll
  },
  data(){
    return{
      loading:false, //加载
      searchData:null, //搜索
      hotReview:null, //热门评论
      hotType:null, //热门分类
      hotProduct:null, //热门产品
    }
  },
  computed: {
    url(){
      return process.env.VUE_APP_BASE_URL;
    },
    defaultOption () {
      return {
        step: 1, // 数值越大速度滚动越快
        limitMoveNum: this.hotReview.length, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 3, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    }
},
  mounted(){
    this.getQueryCommentTypeData();
  },
  methods:{
    dateEnglish,
    /**
     * 去当前热门分类的产品列表
     */
    handleProList(item){
      this.$router.push({
        path:'/product-list',
        query:{
          Name:item.TypeName,
          Id:item.Id
        }
      })
    },
    clickCard(e){
      if(!e.target.id){
        return;
      }
      const item = JSON.parse(e.target.dataset.pro);
      if(!item.ProId){
        return;
      }
      this.$router.push({
        path:'/product-info',
        query:{
          pid:item.ProId
        }
      })
    },
    /**
     * 查看评论中的产品详情
     */
    handleProInfo(review){
      if(!review.ProId){
        return;
      }
      this.$router.push({
        path:'/product-info',
        query:{
          pid:review.ProId
        }
      })
    },
    /**
     * 搜索
     */
    handleSearch(){
      if(this.searchData){
          this.$router.push({
          path:'/product-list',
          query:{
            searchData:this.searchData
          }
        })
      }
    },
    /**
     * 获取首页热门评论
     */
    getQueryCommentTypeData(){
      this.loading=true;
      Promise.all([
        this.$apiHttp.negativeNCHotType({params:{count:3}}),
        this.$apiHttp.negativeNCHotComment({params:{count:12}}),
        this.$apiHttp.negativeNCHotProduct({params:{count:10}})
      ]).then((resp)=>{
        if(resp[0].res == 200){
          this.hotType=resp[0].data;
        }
        if(resp[1].res == 200){
          if(resp[1].data){
            this.hotReview = _.chunk(resp[1].data,2);
          }
        }
        if(resp[2].res == 200){
          this.hotProduct=resp[2].data;
        }
        this.loading=false;
      }).catch(()=>{
        this.loading=false;
      })
    },
    /**
     * 查看分类
     */
    goCategories(){
      window.location.href='http://192.168.1.15:8080/categories';
      // this.$router.push({ path: '/categories'});
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/style/style.less';
.home{
  height: 100%;
}
.h_home{
  height: calc(100% - 72px);
  overflow: auto;
  .banner{
    background: url("~@/assets/images/banner.jpg") no-repeat;
    height: 600px;
    width: 100%;
    background-size:cover;
    .c_banner{
      padding: 80px 24px 88px;
      width: 620px;
      margin:0 auto;
      .title_1{
        margin-bottom: 12px;
      }
      .title_2{
        font-size: 1.25rem;
        color: #454554;
        margin-bottom: 40px;
        font-weight: 500;
      }
      .title_3{
        font-size: 1rem;
        color: #454554;
        margin-bottom: 30px;
        font-weight: 500;
      }
      .b_search{
        display: flex;
        flex-direction: row;
        margin-bottom: 56px;
        .s_input{
          margin-right: 3px;
          /deep/.el-input__inner{
            height: 60px;
            color: #1B1B21;
            font-size: 1rem;
          }
        }
        .s_button{
          font-size: 1rem;
        }

      }
      .b_type{
        padding-top: 16px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        .type_card{
          cursor: pointer;
          width: 105px;
          height: 110px;
          background-color: #7797C0;
          margin-bottom: 8px;
          box-shadow: 0 2px 2px 0 rgba(0,0,50,0.04);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 5px;
          border-radius: 5px;
          .type_card_text{
            font-size: 0.875rem;
            line-height: 1.2rem;
            color: #ffffff;
            text-align: center;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            font-weight: 600;
          }
          .type_card_icon{
            margin-bottom: 0.2rem;
          }
            transition: all 0.8s ease-in-out;
            -webkit-transition: all 0.8s ease-in-out;
            -moz-transition: all 0.8s ease-in-out;
            -o-transition: all 0.8s ease-in-out;

          &:hover{
            transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
          }
        }
      }
    }
  }
  .recent_reviews{
    background-color: #f5f8fd;
    overflow:hidden;
    .seamless-warp{
      // height: 480px;
    }
    .r_r_title{
      text-align: center;
      font-size: 36px;
      font-weight: 500;
      padding:65px 0 60px 0;
    }
    .r_r_reviews{
      padding: 5px 12px;
      display:flex;
      flex-direction: row;
      width: 2160px;
      &:last-child {
        margin-right:-143px;
      }
      .r_r_r_card{
        display: flex;
        flex-direction: column;
        padding-bottom: 15px;
        margin-right: 10px;
        width: 330px;
        flex-shrink: 0;
        .r_r_r_c_card{
          background: #ffffff;
          margin-bottom: 10px;
          padding: 22px 15px 22px 22px;
          width: 290px;
          transition: transform .6s,box-shadow .6s;
          cursor: default;
          &:hover{
            transform: perspective(1px) scale(1.05);
            box-shadow: 0 12px 20px 0 rgba(0,0,50,0.12);
          }
          .c_title{
            display: flex;
            flex-direction: row;
            align-items: center;
            .c_t_img{
              flex-shrink: 0;
              margin-right: 5px;
            }
          }
          .c_user{
            color: #1b1b21;
            font-weight: 700;
            font-size: 0.75rem;
            .rev{
              color: #adadad;
            }
            .pro{
              cursor: pointer;
            }
          }
          .c_text{
            font-size: 0.875rem;
            display: -webkit-box;
            -webkit-line-clamp: 6;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            color: #1B1B21;
            margin-top: 10px;
          }
        }
      }
    }
  }
  .phone{
    display: none;
  }
  .pc{
    display: flex;
    flex-direction: column;
  }
  .terrible_business{
    background-color: #f5f8fd;
    .t_b_title{
      text-align: center;
      font-size: 36px;
      font-weight: 500;
      padding:70px 0 60px 0;
    }
    .t_b_list{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      padding: 0 10px;
      .t_b_card{
          background: #ffffff;
          margin: 10px;
          padding: 22px 15px 22px 22px;
          width: 380px;
          border: 1px solid #eaeef4;
          cursor: pointer;
          border-radius: 7px;
        .c_product{
            display: flex;
            flex-direction: row;
            align-items: center;
            .p_img{
              width: 77px;
              height: 77px;
              margin-right: 15px;
              border: 1px solid rgba(0,0,0,.1);
              border-radius: 10px;
              box-shadow: 0 1px 3px 0 rgba(0,0,0,.1);
              img{
                width: 100%;
                height: 100%;
                border-radius: 10px;
                object-fit: contain;
              }
            }
            .c_p_right{
              p{
                margin: 0;
                font-size: 20px;
                line-height: 32px;
                text-overflow: ellipsis;
                -webkit-line-clamp: 1;
                overflow: hidden;
                color: #0b143e;
                font-weight: bold;
                cursor: pointer;
              }
              .c_p_r_score{
                margin-top: 8px;
                display: flex;
                flex-direction: row;
                align-items: center;
                .c_t_rate{
                    /deep/.iconfont{
                      font-size: 22px;
                      margin-right:0
                    }
                  }
                .score{
                  color: #787d97;
                  font-size: 18px;
                  font-weight: bold;
                  margin-left: 5px;
                }
              }
            }
          }
          .t_b_c_user{
            color: #96969a;
            font-size: 13px;
            border-bottom: 1px solid #e4ebf3;
            margin: 0;
            padding-bottom: 13px;
          }
          .t_b_c_text{
            font-size: 0.875rem;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            color: #1B1B21;
            border-top: 1px solid #e4ebf3;
            padding-top: 10px;
          }
      }
      .t_b_card_empty{
        background:#f5f8fd;
        border: none;
      }
    }
  }
  .be_heard{
    background-color:#DCE4EF;
    padding: 88px 24px 80px;
    .heard_title{
      text-align: center;
      font-size: 2.875rem;
      margin-top: 0;
      margin-bottom: 16px;
    }
    .heard_text{
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 32px;
      font-size: 1.25rem;
      line-height: 1.75rem;
      max-width: 750px;
    }
    .what_do{
      text-align: center;
      .companies{
        border: 2px solid  #000032;
        font-weight: bold;    
      }
      .el-button--gone:hover
      {
        background: #000032;
        color: #ffffff;
      }
      .el-button--gone{
        background: #DCE4EF;
        color: #000032;
      }
    }
  }
}
	@media all and (max-width: 1024px) {
    .h_home{
      height: calc(100% - 72px);
      overflow: auto;
      .banner{
        background: url("~@/assets/images/banner.jpg") no-repeat;
        height: auto;
        .c_banner{
          padding: 1rem;
          width: 90%;
          margin-left: auto;
          margin-right: auto;
          .title_1{
            margin-bottom: 0.875rem;
            font-size: 1.7rem;
          }
          .title_2{
            font-size: 0.875rem;
            margin-bottom: 1rem;
          }
          .title_3{
            font-size: 1rem;
            margin-bottom: 1rem;
          }
          .b_search{
            margin-bottom: 2rem;
            .s_input{
              margin-right: 0.1rem;
              /deep/.el-input__inner{
                height: 3rem;
                font-size: 1rem;
              }
            }
            .s_button{
              font-size: 1rem;
            }

          }
          .b_type{
            padding-top: 0.2rem;
            .type_card{
              margin-bottom: 10px;
              box-shadow: 0 2px 2px 0 rgba(0,0,50,0.04);
              padding:0.5rem 0.2rem 0.2rem 0.2rem;
              .type_card_text{
                font-size: 0.75rem;
                line-height: 1rem;
              }
              .type_card_icon{
                margin-bottom: 0.1rem;
              }
            }
          }
        }
      }
      .phone{
        display: flex;
        flex-direction: column;
      }
      .pc{
        display: none;
      }
      .recent_reviews{
        .r_r_title{
          font-size: 1.25rem;
          padding:2rem 0;
        }
        .r_r_reviews{
          padding: 0 8px;
          display:-webkit-box;
          width: calc(100% - 24px);
          margin-right: 0 !important;
          overflow-x: scroll;
          .r_r_r_card{
            padding-bottom: 0.8rem;
            margin-right: 0.5rem;
            width: 70%;
            .r_r_r_c_card{
              margin-bottom: 0.5rem;
              padding: 1.1rem 0.5rem;
              width: calc(100% - 1rem);
              transition: transform .6s;
              cursor: default;
              &:hover{
                transform: perspective(0px) scale(1);
                box-shadow: 0 12px 20px 0 rgba(0,0,50,0.12);
              }
              .c_title{
                .c_t_rate{
                  margin-left: 0.5rem;
                }
              }
            }
          }
        }
      }
      .terrible_business{
        .t_b_title{
          font-size: 1.25rem;
          padding: 2rem 0;
        }
      }
      .be_heard{
        padding: 2rem 1rem 2rem;
        .heard_title{
          font-size: 2rem;
          margin-bottom: 0;
        }
        .heard_text{
          margin-bottom: 1rem;
          font-size: 1rem;
          line-height: 1.75rem;
        }
      }
    }
	}
</style>