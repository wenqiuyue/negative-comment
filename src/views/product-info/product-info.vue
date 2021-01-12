<template>
  <div class="product-info" v-loading="loading">
    <header-com></header-com>
    <div class="p_product-info" v-if="processDetails">
      <div class="p_p-info_main">
        <el-row :gutter="20">
          <el-col :span="10" :xs="24">
            <div class="pro_main_info">
              <div class="p_m_i_top">
                <el-image
                  :src="processDetails.Cover"
                  fit="contain">
                  <div slot="error" class="error_img_tips">
                    Failed to load 
                  </div>
                </el-image>
                <div class="p_m_i_top_right">
                  <h2 @click="handleHomePage">{{processDetails.Name}}</h2>
                  <h5><a :href="processDetails.Url" target="_blank">{{processDetails.Url.split('://')[1]}}</a>  •  {{processDetails.CommentCount?processDetails.CommentCount:0}} Reviews</h5>
                </div>
              </div>
              <div class="p_m_i_bottom">
                <div class="p_m_i_b_tablt">
                  <div class="main_score">
                    <p class="score">3.2 <span>/ 5</span></p>
                    <p class="score_text">Main Score</p>
                  </div>
                  <div class="table_score">
                    <div class="table_score_item">
                      <p>3.9</p>
                      <p>Bad</p>
                    </div>
                    <div class="table_score_item">
                      <p>3.9</p>
                      <p>Poor</p>
                    </div>
                    <div class="table_score_item">
                      <p>3.9</p>
                      <p>Average</p>
                    </div>
                    <div class="table_score_item">
                      <p>3.9</p>
                      <p>Great</p>
                    </div>
                    <div class="table_score_item">
                      <p>3.9</p>
                      <p>Excellent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="right_discount">
              <h3 v-if="processDetails.Price">${{processDetails.Price}} one time fee</h3>
              <div class="r_d_main">
                <span class="m_discount" v-if="processDetails.Discount">{{processDetails.Discount}}</span>
                <span v-if="processDetails.Coupon">Coupon: {{processDetails.Coupon}}</span>
              </div>
              <div class="relevant_pro">
                <el-dropdown trigger="click" placement="bottom-start" @command="handleTypeProductCommand">
                  <el-button type="product" plain>
                    <span class="button_text">
                      <span>Related products</span>
                      <svg-icon value="icon-goahead" :size="1.4"></svg-icon>
                    </span>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="(item,index) in processDetails.TypeProduct" :key="index" :command="item.Id">{{item.Name}}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div> -->
            <!-- <el-button class="add_comparison_button" type="warning" plain @click="handleAddComparison">Add Into Comparison</el-button>
            <div class="right_comparison">
              <div class="comparison_list_title">
                <svg-icon value="icon-cebianlan-bijiao-xuanzhong" :size="1.3"></svg-icon>
                <span>{{`Comparison[${comparisonList.length}/4]`}}</span>
              </div>
              <ul class="comparison_list_ul">
                <li v-for="(item,index) in comparisonList" :key="index">
                  <span>{{item.name}}</span>
                  <svg-icon value="icon-shanchu" :size="1.6" @click="handleComparisonDel(item)"></svg-icon>
                </li>
              </ul>
              <div class="comparison_list_button">
                <el-button class="comparison_button" type="comp" plain @click="handleCompare">Compare</el-button>
                <p class="comparison_tips">
                  Please choose the same type of product to compare the more detailed data
                </p>
              </div>  
            </div> -->
            <div class="right_Informations">
              <h3>What is the {{processDetails.Name}}</h3>
              <div class="r_r_Informations">
                <div class="c_row">
                  <div class="card_left_introduce">{{processDetails.Description?processDetails.Description.replace(/&lt;.+?&gt;/g, ''):'No introduction'}}</div>
                </div>
              </div>
            </div>
            <div class="right_img" v-if="processDetails.Images && processDetails.Images.length>0">
              <h3>{{processDetails.Images.length}} Images</h3>
              <div class="r_r_img">
                <el-carousel indicator-position="outside">
                  <el-carousel-item v-for="(item,index) in processDetails.Images" :key="index">
                    <el-image
                      style="height:100%;width:100%"
                      :src="item"
                      fit="contain"
                     >
                      <div slot="error" class="error_img_tips">
                        Failed to load 
                      </div>
                    </el-image>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <div class="right_Informations">
              <h3>{{processDetails.Name}} Informations</h3>
              <div class="r_r_Informations">
                <div class="c_row">
                  <div class="card_left">Contacts</div>
                    <div class="card_right">
                      <span class="c_r_span">
                        <svg-icon value="icon-youjian"></svg-icon>
                        <span>Email</span>
                      </span>
                      <span class="c_r_span span_click" @click="handleHomePage">
                        <svg-icon value="icon-gongsiwangzhi"></svg-icon>
                        <span>{{processDetails.Url}}</span>
                      </span>
                    </div>
                </div>
                <div class="c_row">
                  <div class="card_left">Infomations</div>
                    <div class="card_right">
                      <span class="c_r_span">
                        <svg-icon value="icon-icon_pinglun"></svg-icon>
                        <span>Reviews ({{processDetails.CommentCount}})</span>
                      </span>
                      <span class="c_r_span" v-if="processDetails.Price">
                        <svg-icon value="icon-qian"></svg-icon>
                        <span>${{processDetails.Price}} one time fee</span>
                      </span>
                      <span class="c_r_span">
                        <svg-icon value="icon-rili"></svg-icon>
                        <span>Start in {{processDetails.BirthYear}}</span>
                      </span>
                      <span class="c_r_span">
                        <svg-icon value="icon-xihuan"></svg-icon>
                        <span>Likes ({{processDetails.Likes}})</span>
                      </span>
                      <span class="c_r_span" v-if="processDetails.Discount">
                        <svg-icon value="icon-fenxiangzhuanqian"></svg-icon>
                        <span>{{processDetails.Discount}}</span>
                      </span>
                    </div>
                </div>
              </div>
            </div>
            <!-- <div class="right_scam">
              <h3>Is {{processDetails.Name}} a Scam?</h3>
              <div class="scam_tips">Do you think that {{processDetails.Name}} is a scam ? Please vote!</div>
              <div class="scam_button">
                  <div class="button_text_success" @click="handleVote(1)">
                    <div>
                      <svg-icon value="icon-dui"></svg-icon>
                      <span> NOT SCAM ({{processDetails.VoteY}})</span>
                    </div>
                    <div>{{processDetails.Name}} is <strong>NOT</strong> a scam</div>
                  </div>
                  <div class="button_text_fail" @click="handleVote(0)">
                    <div>
                      <svg-icon value="icon-icon1"></svg-icon>
                      <span>SCAM ({{processDetails.VoteN}})</span>
                    </div>
                    <div>{{processDetails.Name}} is a scam</div>
                  </div>
              </div>
            </div> -->
          </el-col>
          <el-col :span="14" :xs="24">
            <div class="left_main_top">
              <div class="write_one"></div>
              <div class="write_two"></div>
              <div class="write_three">
                <div class="t_title" @click="handleWriteReview">Write a review...</div>
              </div>
            </div>
            <div class="left_main_review">
              <div class="review_tag">
                <div class="left_main_review_title">
                  {{processDetails.Name}} Reviews ({{processDetails.CommentCount?processDetails.CommentCount:0}})
                </div>
                <div class="Good_bad">
                  <div class="g_b_tag" :style="selgoodBadTagList.indexOf('Bad')!=-1?'background:#EE2F18':''"  @click="handleSelgoodBadTagList('Bad')">
                    <span>Bad</span>
                    <span>20%</span>
                  </div>
                  <div class="g_b_tag" :style="selgoodBadTagList.indexOf('Poor')!=-1?'background:#F5AE1A':''"  @click="handleSelgoodBadTagList('Poor')">
                    <span>Poor</span>
                    <span>20%</span>
                  </div>
                  <div class="g_b_tag" :style="selgoodBadTagList.indexOf('Average')!=-1?'background:#FCD628':''" @click="handleSelgoodBadTagList('Average')">
                    <span>Average</span>
                    <span>20%</span>
                  </div>
                  <div class="g_b_tag" :style="selgoodBadTagList.indexOf('Great')!=-1?'background:#A4CD32':''" @click="handleSelgoodBadTagList('Great')">
                    <span>Great</span>
                    <span>20%</span>
                  </div>
                  <div class="g_b_tag" :style="selgoodBadTagList.indexOf('Excellent')!=-1?'background:#00C48A':''" @click="handleSelgoodBadTagList('Excellent')">
                    <span>Excellent</span>
                    <span>20%</span>
                  </div>
                </div>
                <el-tabs class="tag_tab" v-model="tabsActiveName" @tab-click="handleTabsClick">
                  <el-tab-pane label="Complaint" name="1"></el-tab-pane>
                </el-tabs>
              </div>
              <div v-if="productComment && productComment.length>0">
                <div class="left_main_review_card" v-for="(item,index) in productComment" :key="index">
                  <div class="user">
                    <div class="card_user">
                      <el-avatar size="large" :src="item.Icon"></el-avatar>
                      <span class="user_name">{{item.Name}}</span>
                    </div>
                    <span class="date">{{item.Time?dateEnglish(item.Time):'--:--'}}</span>
                  </div>
                  <p class="card_text" v-html="item.Content"></p>
                  <div class="review_tag_list">
                    <el-tag size="small">标签二</el-tag>
                    <el-tag size="small">标签二</el-tag>
                    <el-tag size="small">标签二</el-tag>
                  </div>
                  <div class="score_date">
                    <div class="card_bottom">
                      <el-tooltip class="item" effect="dark" content="Useful" placement="top-start">
                        <svg-icon value="icon-xihuan1" :size="1.3" :style="likeReviewList.indexOf(`${processDetails.Id}-${item.ComentId}`)==-1?'color:#aaa':'color:#f56c6c'" @click="handleUseFul(item,index)" v-preventReClick></svg-icon>
                      </el-tooltip>
                      <span>({{item.Likes}})</span>
                    </div>
                  </div>
                  <div class="reply">
                    <svg-icon value="icon-icon_reply"></svg-icon>
                    <div class="reply_right">
                      <div class="reply_right_user">
                        <span>Reply from Paw Print Genetics</span>
                        <span class="date">{{item.Time?dateEnglish(item.Time):'--:--'}}</span>
                      </div>
                      <div class="reply_right_text">
                        Thank you for your review, Diane. We are so happy to hear you have had a great experience . Thank you for choosing PPG!
                      </div>
                    </div>
                  </div>
                </div>
                <div class="left_page" v-if="commentPage.pageNum>1">
                  <el-pagination
                    layout="prev, pager, next"
                    :page-count="commentPage.pageNum"
                    :current-page="commentPage.pageIndex"
                    :page-size="commentPage.pageSize"
                    @current-change="getQueryProductCommentData($event)"
                  >
                  </el-pagination>
                </div>
              </div>
              <empty v-else :tips="'No Reviews'" :paddingData="3"></empty>
            </div>
          </el-col>
        </el-row>
      </div>
      <footer-com></footer-com>
    </div>
  </div>
</template>
<script>
import preventReClick from '../../utils/plugins';
import types from '../../commons/types';
import {dateEnglish} from '../../commons';
export default {
  data(){
    return{
      loading:false, //加载
      isEllipsis:true, //产品介绍是否是省略状态
      rateValue:null,
      comparisonList:[], //产品比较列表
      processDetails:null, //产品详情
      likeProList:[], //喜欢产品列表
      likeReviewList:[], //喜欢的评论
      voteList:[], //投票列表
      pid:null, //产品id
      productComment:[], //产品评论
      commentPage:{
        pageIndex: 1,
        pageSize: 5,
        pageNum: 0,
      },
      isMoreRow:false, //产品介绍是否需要显示更多
      isClick:false, //是否点击
      selgoodBadTagList:[], //选择的好坏标签
      tabsActiveName:'1'
    }
  },
  created(){
    this.pid=this.$route.query.pid;
  },
  mounted(){
    this.getComparisonList();
    this.getLikeList();
    this.getLikeReviewList();
    this.getInit();
    this.getVoteList();
    // setTimeout(()=>{
    //   const row=this.$refs.description.offsetHeight/24
    //   if(row>2){
    //     this.isMoreRow=true;
    //   }
    // },500)
  },
  methods:{
    dateEnglish,
    /**
     * 评论标签页选择
     */
    handleTabsClick(tab,event){
      console.log(tab,event);
    },
    /**
     * 选择好坏标签
     */
    handleSelgoodBadTagList(tag){
      if(this.selgoodBadTagList.indexOf(tag)!=-1){
        this.selgoodBadTagList=this.selgoodBadTagList.filter((m)=> m!=tag)
      }else{
        this.selgoodBadTagList.push(tag);
      }
    },
    /**
     * 相关产品
     */
    handleTypeProductCommand(com){
      window.open("http://120.25.67.116:8030/product-info?pid="+com);
    },
    /**
     * 评论分数进入写评论
     */
    rateChange(){
      this.$router.push({
        path:'/write-review',
        query:{
          rate:this.rateValue,
          proid:this.processDetails.Id
        }
      })
    },
    /**
     * 跳转产品页
     */
    handleHomePage(url){
      window.open("http://120.25.67.116:8030/check-page?url="+this.processDetails.Url);
    },
    /**
     * 产品详情数据初始化
     */
    getInit(){
      this.loading=true;
      const data={
        Id:this.pid,
        page:1,
        pageCount:this.commentPage.pageSize
      }
      Promise.all([
        this.$apiHttp.getProcessDetails({params:{Id:this.pid}}),
        this.$apiHttp.getQueryProductComment({params:data})
      ]).then((resp)=>{
        if(resp[0].res==200 && resp[1].res==200){
          this.processDetails=resp[0].data;
          this.productComment=resp[1].data.data;
          this.commentPage.pageNum=resp[1].data.TotalPage;
          this.loading=false;
        }
      })
    },
    /**
     * 产品详情
     */
    getProcessDetailsData(){
      this.loading=true;
      this.$apiHttp.getProcessDetails({params:{Id:this.pid}}).then((resp)=>{
        if(resp.res==200){
          this.processDetails=resp.data
        }
        this.loading=false;
      })
    },
    /**
     * 产品评论
     */
    getQueryProductCommentData(page){
      this.commentPage.pageIndex=page;
      const data={
        Id:this.pid,
        page:this.commentPage.pageIndex,
        pageCount:this.commentPage.pageSize
      };
      this.loading=true;
      this.$apiHttp.getQueryProductComment({params:data}).then((resp)=>{
        if(resp.res==200){
          this.productComment=resp.data.data;
          this.commentPage.pageNum=resp.data.TotalPage;
        }
        this.loading=false;
      })
    },
    /**
     * 获取投票
     */
    getVoteList(){
      this.voteList=[];
      const lVoteList=JSON.parse(localStorage.getItem(types.VOTE));
      if(lVoteList){
        this.voteList=lVoteList;
      }
    },
    /**
     * 投票
     */
    handleVote(vote){
      if(this.voteList.indexOf(this.processDetails.Id)!=-1){
        this.$message({
              message: 'You have voted',
              type: 'warning'
            });
            return;
      }
      const data={
        ProId: this.processDetails.Id,
        votes:vote
      }
      this.$apiHttp.vote({params:data}).then((resp)=>{
        if(resp.res==200){
          if(resp.data){
            this.$message({
              message: 'success',
              type: 'success'
            });
            this.getProcessDetailsData();
            this.voteList.push(this.processDetails.Id);
            localStorage.setItem(types.VOTE, JSON.stringify(this.voteList));
          }else{
            this.$message({
              message: 'You have voted',
              type: 'warning'
            });
          }
        }
      })
    },
    /**
     * 评论点赞
     */
    handleUseFul(com,index){
      //该评论点过赞，则退出
       if(this.likeReviewList.indexOf(`${this.processDetails.Id}-${com.ComentId}`)!=-1 || this.isClick){
        return;
      }
      this.isClick=true;
      this.$apiHttp.fabulous({params:{Id:com.ComentId}}).then((resp)=>{
        if(resp.res==200){
          this.$message({
            message: 'Comments like success',
            type: 'success'
          });
          //评论点赞成功后，则将缓存评论数据
          this.likeReviewList.push(`${this.processDetails.Id}-${com.ComentId}`);
          localStorage.setItem(types.LIKE_REVIEW, JSON.stringify(this.likeReviewList));
          this.productComment[index].Likes = this.productComment[index].Likes + 1;
        }
        this.isClick=false;
      })
    },
    /**
     * 获取点赞的评论
     */
    getLikeReviewList(){
      this.likeReviewList=[];
      const lReviewList=JSON.parse(localStorage.getItem(types.LIKE_REVIEW));
      if(lReviewList){
        this.likeReviewList=lReviewList;
      }
    },
    /**
     * 喜欢
     */
    handleLike(){
      if(this.likeProList.indexOf(this.processDetails.Id)!=-1 || this.isClick){
        return;
      }
      this.isClick=true;
      const data={
        proId:this.processDetails.Id
      }
      this.$apiHttp.ProductLikes({params:data}).then((resp)=>{
        if(resp.res==200){
          this.$message({
            message: 'Like success',
            type: 'success'
          });
          this.likeProList.push(data.proId);
          //将点赞的产品存到本地
          localStorage.setItem(types.LIKE_PROID, JSON.stringify(this.likeProList));
          this.processDetails.Likes=this.processDetails.Likes+1;
        }
        this.isClick=false;
      })
    },
    /**
     * 获取喜欢产品列表
     */
    getLikeList(){
      this.likeProList=[];
      const lList=JSON.parse(localStorage.getItem(types.LIKE_PROID));
      if(lList){
        this.likeProList=lList;
      }
    },
    /**
     * 删除比较列表
     */
    handleComparisonDel(pro){
      this.comparisonList=this.comparisonList.filter((m,ind) => m.id!=pro.id);
      localStorage.setItem(types.PRODUCT_COMPARISON, JSON.stringify(this.comparisonList));
    },
    /**
     * 获取产品比较列表
     */
    getComparisonList(){
      this.comparisonList=[];
      const cList=JSON.parse(localStorage.getItem(types.PRODUCT_COMPARISON));
      if(cList){
        this.comparisonList.push(...cList)
      }
    },
    /**
     * 将产品加入到比较列表
     */
    handleAddComparison(){
      const idList=this.comparisonList.map((m)=>{
        return m.id
      })
      if( idList.indexOf(this.processDetails.Id)!=-1 || this.comparisonList.length>=4){
        return;
      }
      const comparisonData={
        name: this.processDetails.Name,
        id: this.processDetails.Id
      }
      this.comparisonList.push(comparisonData)
      localStorage.setItem(types.PRODUCT_COMPARISON, JSON.stringify(this.comparisonList));
    },
    /**
     * 进入比较
     */
    handleCompare(){
      this.$router.push('/compare')
    },
    /**
     * 进入写评论
     */
    handleWriteReview(){
      this.$router.push({
        path:'/write-review',
        query:{
          proid:this.processDetails.Id
        }
      })
    },
  }
}
</script>
<style lang="less" scoped>
.share_title{
  color: #333333;
  font-weight: bold;
}
.product-info{
  height: 100%;
  /deep/.error_img_tips{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    color: #c0c4cc;
    vertical-align: middle;
    background: #f5f7fa;
  }
  .p_product-info{
    background: #f2f2f5;
    height: calc(100% - 72px);
    overflow: auto;
    .p_p-info_main{
      padding: 16px;
      max-width: 1234px;
      margin: 0 auto;
      .pro_main_info{
        background: #ffffff;
        padding: 22px 24px;
        margin-bottom: 12px;
        border: 1px solid #eaeef4;
        border-radius: 8px;
        .p_m_i_top{
          display: flex;
          flex-direction: row;
          .el-image{
            width: 102px;
            height: 102px;
            border-radius: 10px;
            box-shadow: 0 1px 3px 0 rgba(0,0,0,.1);
            padding: 5px;
            margin-right: 20px;
          }
          .p_m_i_top_right{
            h2{
              color: #0b143e;
              font-size: 20px;
              line-height: 32px;
              text-overflow: ellipsis;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
            h5{
              font-weight:normal;
              color: #6d728b;
              a{
                color: #0084d6;
                font-size: 15px;
                text-decoration: none;
              }
            }
          }
        }
        .p_m_i_bottom{
          margin-top: 15px;
          .p_m_i_b_tablt{
            border: 1px solid #e4ebf3;
            border-radius: 10px;
            .main_score{
              padding: 16px 0;
              text-align: center;
              border-bottom: 1px solid #e4ebf3;
              p{
                margin: 0;
              }
              .score{
                font-size: 33px;
                font-weight: bold;
                span{
                  font-size: 18px;
                  font-weight: normal;
                }
              }
              .score_text{
                color: #888d93;
                font-size: 15px;
              }
            }
            .table_score{
              display: flex;
              flex-direction: row;
              .table_score_item{
                text-align: center;
                padding: 8px 12px;
                width: 20%;
                border-right: 1px solid #e4ebf3;
                p{
                  margin: 0;
                }
                p:nth-child(1){
                  color: #0b143e;
                  font-size: 16px;
                }
                p:nth-child(2){
                  color: #7d8288;
                  font-size: 13px;
                }
              }
              .table_score_item:last-child{
                border: none;
              }
            }
          }
        }
      }
      .left_main_introduce{
        background: #ffffff;
        padding: 22px 24px;
        margin-bottom: 12px;
        .introduce_title{
          display: flex;
          flex-direction: row;
          align-items: center;
          // justify-content: space-between;
          h2{
            font-size: 1.5rem;
            color: #32323d;
            margin: 0;
            margin-left: 5px;
            user-select: none;
          }
        }
        .introduce_container{
          padding-left: 5px;
          font-size: 0.875rem;
          text-indent: 2em;
          color: #515174;
          line-height: 1.5rem;
          word-break: break-all;
          user-select: none;
        }
        .c_ellipsis{
          display: -webkit-box;
          -webkit-line-clamp: 2;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
        }
        .more{
          display: flex;
          justify-content: flex-end;
          align-items: center;
          span{
            font-size: 13px;
            margin-right: 5px;
            color: #1a66ff;
            cursor: pointer;
            user-select: none;
            &:hover{
              text-decoration:underline;
            }
          }
        }
      }
      .left_main_top{
        height: 120px;
        display: flex;
        position: relative;
        align-items: center;
        flex-direction: row;
        background-color: #fff;
        background-image: linear-gradient(to top, #00D876, #02C48D);
        background-repeat: no-repeat;
        margin-bottom: 3px;
        border-radius: 10px;
        .write_one{
          left: 0;
          width: 260px;
          height: 100%;
          position: absolute;
          clip-path: circle(76% at 35% 72%);
          background-color: #fff;
          -webkit-clip-path: circle(76% at 35% 72%);
          border-radius: 10px;
          border: 1px solid #e4ebf3;
        }
        .write_two{
          width: 138px;
          height: 125px;
          z-index: 1;
          margin-left: 44px;
          margin-right: 112px;
          background: url('~@/assets/images/write.png') no-repeat;
          background-size: contain;
        }
        .write_three{
          .t_title{
            color: #ffffff;
            font-size: 24px;
            font-weight: bold;
            cursor: pointer;
            &:hover{
              text-decoration:underline;
            }
          }
        }
      }
      .left_main_review{
        padding: 0;
        margin-top: 10px;
        .review_tag{
          background: #ffffff;
          padding: 26px 35px 0;
          border-radius: 10px 10px 0 0;
          border: 1px solid #e4ebf3;
          border-bottom: none;
        }
        .left_main_review_title{
          color: #090161;
          font-size: 22px;
          font-weight: bold;
        }
        .Good_bad{
          display: flex;
          flex-direction: row;
          border: 1px solid #e4ebf3;
          border-radius: 8px;
          height: 44px;
          margin-top: 23px;
          .g_b_tag{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 11px 12px 14px;
            border-right: 1px solid #e4ebf3;
            width: 20%;
            cursor: pointer;
            &:hover{
              background: #EBEBEE;
            }
            span:nth-child(1){
              color: #6d728b;
              font-size: 14px;
            }
            span:nth-child(2){
              color: #050364;
              font-size: 14px;
              margin-left: 5px;
            }
          }
        }
        .tag_tab{
          margin-top: 10px;
          /deep/.el-tabs__item.is-active{
            color:#02C48D;
          }
          /deep/.el-tabs__active-bar{
            background-color: #02C48D;
          }
          /deep/.el-tabs__item{
            &:hover{
              color:#02C48D;
            }
          }
        }
      }
      .left_main_review_card{
        background: #ffffff;
        padding: 22px 32px;
        margin-bottom: 3px;
        border: 1px solid #e4ebf3;
        border-radius: 10px;
        .user{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 16px;
          .card_user{
            display: flex;
            align-items: center;
            .user_name{
              margin: 0 10px 0 8px;
              font-size: 0.875rem;
              color: #454554;
            }
          }
          .date{
            color: #73738f;
            font-size: 0.875rem;
            user-select: none;
          }
        }
        .review_tag_list{
          padding-bottom: 5px;
          .el-tag{
            margin-right: 8px;
          }
        }
        .score_date{
          border-top: 1px solid #e8e8eb;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding-top: 8px;
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
        .card_text{
          margin: 0;
          padding-bottom: 15px;       
          line-height: 1.5rem;
          color: #32323d;
          font-size: 15px;
          // user-select: none;
        }
        .card_bottom{
          display: flex;
          align-items: center;
          padding-top: 8px;
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
      .left_main_review_card:first-child{
        border-top: none;
         border-radius:0 0 10px 10px;
      }
      .left_page{
        background: #ffffff;
        padding: 5px 0;
        border: 1px solid #e4ebf3;
      }
      .left_main-img{
        background: #ffffff;
        padding: 22px 24px 10px 24px;
        margin-bottom: 12px;
        .img_title{
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 15px;
          h2{
            font-size: 1.5rem;
            color: #32323d;
            margin: 0;
            margin-left: 5px;
          }
        }
      }
      .left_main-informations{
        background: #ffffff;
        padding: 22px 24px 10px 24px;
        margin-bottom: 12px;
        .informations_title{
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 15px;
          h2{
            font-size: 1.5rem;
            color: #32323d;
            margin: 0;
            margin-left: 5px;
          }
        }
        .informations_card{
          .c_row{
            border-bottom: 1px dotted #ddd;
            padding-bottom: 10px;
            margin-bottom: 10px;
            .card_left{
              font-size: 15px;
              color: #555;
            }
            .card_right{
              display: flex;
              flex-flow: row wrap;
              .c_r_span{
                flex-basis: 50%;
                margin-bottom: 8px;
                font-size: 13px;
                color: #aaaaaa;
                display: flex;
                align-items: center;
                span{
                  margin-left: 5px;
                }
              }
            }
          }
        }
      }
      .add_comparison_button{
        width: 100%;
      }
      .right_scam{
        margin-top: 12px;
        background: #ffffff;
        border: 1px solid #e4ebf3;
        border-radius: 10px;
        h3{
          margin: 0;
          padding: 12px 15px;
          border-bottom: 1px solid #e8e8eb;
          font-size: 1rem;
          font-weight: 500;
        }
        .scam_tips{
          font-size: 12px;
          color: #999;
          text-align: center;
          padding: 18px 24px;
        }
        .scam_button{
          display: flex;
          flex-direction: column;
          padding: 2px 24px;
          button{
            margin-left: 0;
            margin-bottom: 15px;
          }
          .button_text{
            display: flex;
            flex-direction: column;
            div{
              &:nth-child(1){
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                span{
                  margin-left: 5px;
                }
              }
              &:nth-child(2){
                margin-top: 5px;
                word-wrap: break-word;
              }
            }
          }
          .button_text_success{
            text-align: center;
            color: #67c23a;
            background: #f0f9eb;
            border:1px solid #c2e7b0;
            border-radius: 4px;
            padding: 12px 10px;
            cursor: pointer;
            margin-bottom: 10px;
            &:hover{
              background: #67c23a;
              color: #ffffff;
            }
             div{
              &:nth-child(1){
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                span{
                  margin-left: 5px;
                }
              }
              &:nth-child(2){
                margin-top: 5px;
                word-break: break-all;
                font-size: 13px;
              }
            }
          }
          .button_text_fail{
            text-align: center;
            color: #f56c6c;
            background: #fef0f0;
            border:1px solid #fbc4c4;
            border-radius: 4px;
            padding: 12px 10px;
            cursor: pointer;
            margin-bottom: 15px;
            &:hover{
              background: #f56c6c;
              color: #ffffff;
            }
             div{
              &:nth-child(1){
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                span{
                  margin-left: 5px;
                }
              }
              &:nth-child(2){
                margin-top: 5px;
                word-break: break-all;
                font-size: 13px;
              }
            }
          }
        }
      }
      .right_img{
        margin-top: 12px;
        background: #ffffff;
        h3{
          margin: 0;
          padding: 12px 15px;
          border-bottom: 1px solid #e8e8eb;
          font-size: 1rem;
          font-weight: 500;
        }
        .r_r_img{
          padding-top: 5px;
          /deep/.el-carousel__container{
            height: 200px;
          }
        }
      }
      .right_Informations{
        margin-top: 12px;
        background: #ffffff;
        border: 1px solid #e4ebf3;
        border-radius: 10px;
        h3{
          margin: 0;
          padding: 12px 15px;
          border-bottom: 1px solid #e8e8eb;
          font-size: 1rem;
          font-weight: 500;
        }
        .r_r_Informations{
          padding: 8px 15px 0 15px;
          .c_row{
            padding-bottom: 5px;
            margin-bottom: 10px;
            .card_left{
              font-size: 15px;
              color: #555;
              margin-bottom: 5px;
            }
            .card_right{
              display: flex;
              flex-flow: row wrap;
              .c_r_span{
                flex-basis: 50%;
                margin-bottom: 8px;
                font-size: 13px;
                color: #aaaaaa;
                display: flex;
                align-items: center;
                span{
                  margin-left: 5px;
                }
              }
              .span_click{
                color: #4395ff;
                cursor: pointer;
                &:hover{
                  color: #60bf39;
                }
              }
            }
            .card_left_introduce{
              line-height: 1.5rem;
              word-break: break-all;
              user-select: none;
              min-height: 60px;
              font-size: 14px;
              color: #555555;
            }
          }
        }
      }
      .right_discount{
        margin-bottom: 12px;
        background: #ffffff;
        border: 1px solid #e4ebf3;
        border-radius: 10px;
        h3{
          margin: 0;
          padding: 12px 15px;
          border-bottom: 1px solid #e8e8eb;
          font-size: 1rem;
          font-weight: 500;
        }
        .r_d_main{
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 16px;
          span{
            font-size: 0.875rem;
            margin-bottom: 5px;
            color: #777777;
          }
          .m_discount{
            color: #67c23a !important;
            font-weight: 700;
          }
        }
        .relevant_pro{
          padding: 8px 24px 11px 24px;
          .el-dropdown,button{
            width: 100%;
          }
          button{
            padding-bottom: 8px;
            padding-top: 8px;
            .button_text{
              display: flex;
              align-items: center;
              justify-content: center;
              span{
                margin-right: 5px;
              }
            }
          }
          .el-button--product{
            background: #ffffff;
            color:#1b1b21;;
            border: 1px solid #9a9aad;
          }
          .el-button--product:hover{
            background: #ffffff;
            color:#409eff;
            border: 1px solid#409eff;
          }
        }
      }
      .right_comparison{
        margin-top: 2px;
        background: #ffffff;
        border: 1px solid #e4ebf3;
        border-radius: 10px;
        .comparison_list_button{
          padding: 0 24px 12px 24px;
          .comparison_button{
            width: 100%;
          }
          .el-button--comp{
            background: #ffffff;
            color:#1b1b21;;
            border: 1px solid #9a9aad;
          }
          .el-button--comp:hover{
            background: #ffffff;
            color:#409eff;
            border: 1px solid#409eff;
          }
          .comparison_tips{
            text-align: center;
            font-size: 12px;
            color: #999999;
          }
        }
        .comparison_list_title{
          padding: 12px 15px;
          border-bottom: 1px dotted #ddd;
          display: flex;
          align-items: center;
          span{
            margin-left: 5px;
            color: #515174;
          }
          svg{
            color: #515174;
          }
        }
        .comparison_list_ul{
          margin: 0;
          padding: 12px 24px;
          list-style-type: none;
          li{
            padding: 6px 0;
            font-size: 13px;
            border-bottom: 1px dashed #ddd;
            display: flex;
            justify-content: space-between;
            align-items: center;
            svg{
              flex-shrink: 0;
            }
          }
        }
      }
    }
  }
  @media all and (max-width: 1024px) {
    .p_product-info{
      .p_p-info_main{
        padding: 0.6rem 0.3rem;
        .pro_main_info{
          .p_m_i_bottom{
            .p_m_i_b_tablt{
              .table_score{
                .table_score_item{
                  p:nth-child(1){
                    color: #0b143e;
                    font-size: 14px;
                  }
                  p:nth-child(2){
                    color: #7d8288;
                    font-size: 12px;
                  }
                }
                .table_score_item:last-child{
                  border: none;
                }
              }
            }
          }
        }
        .left_main_introduce{
          padding: 1.5rem 1.6rem;
          margin-bottom: 0.75rem;
          .more{
            span{
              font-size: 0.8rem;
            }
          }
        }
        .left_main_top{
          height: 100px;
          margin-bottom: 3px;
          margin-top: 10px;
          .write_one{
            left: 0;
            width: 270px;
            clip-path: circle(76% at 35% 72%);
            -webkit-clip-path: circle(92% at -16% 130%);
          }
          .write_two{
            width: 115px;
            height: 80px;
            margin-left: 12px;
            margin-right: 20px;
          }
        }
        .left_main_review{
          .review_tag{
            padding: 26px 18px 0;
          }
          .left_main_review_title{
            font-size: 18px;
          }
          .Good_bad{
            .g_b_tag{
              padding: 11px 7px;
              border-right: 1px solid #e4ebf3;
              width: 20%;
              display: flex;
              flex-direction: column;
              span:nth-child(1){
                color: #6d728b;
                font-size: 13px;
              }
              span:nth-child(2){
                color: #050364;
                font-size: 13px;
                margin-left: 5px;
                margin-top: 5px;
              }
            }
          }
        }
        .left_main_review_card{
          padding: 18px;
          .user{
            padding-bottom: 12px;
          }
          .reply{
            padding:10px;
            .reply_right{
              margin-left: 6px;
              .reply_right_user{
                span:first-child{
                  font-size: 13px;
                }
                span:last-child{
                  font-size: 12px;
                  color:#73738f;
                }
              }
              .reply_right_text{
                margin-top: 10px;
              }
            }
          }
          .card_text{      
            line-height: 1.4rem;
            font-size: 14px;
            // user-select: none;
          }
        }
        .left_page{
          background: #ffffff;
          padding: 5px 0;
        }
        .right_Informations{
          .r_r_Informations{
            padding: 8px 15px 0 15px;
            .c_row{
              .card_right{
                .c_r_span{
                  font-size: 0.75rem;
                }
              }
            }
          }
        }
        .right_discount{
          margin: 0.75rem 0;
          h3{
            padding: 0.75rem 0.875rem;
          }
          .r_d_main{
            padding-top: 1rem;
          }
        }
      }
    }
  }
}
</style>