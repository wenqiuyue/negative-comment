<template>
  <el-rate
    class="c_t_rate"
    v-model="value"
    :icon-classes="iconClasses"
    void-icon-class="iconfont icon-tx-fill-changfangxing"
    :colors="['#FF3722', '#FFDD58','#02C48D']"
    :disabled="isDisabled"
    disabled-void-color="rgb(198, 209, 222)"
    disabled-void-icon-class="iconfont icon-tx-fill-changfangxing"
    allow-half
  >
  </el-rate>
</template>
<script>
export default {
  name:'rate',
  props:{
    value:{
      type:Number,
      default:null
    },
    isDisabled:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      iconClasses: ['iconfont icon-tx-fill-changfangxing', 'iconfont icon-tx-fill-changfangxing', 'iconfont icon-tx-fill-changfangxing'],
    }
  },
}
</script>
<style lang="less" scoped>
</style>