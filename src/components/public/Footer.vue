<template>
  <div class = "footer">
      <a href="/">
        <span class="iconfont icon-shitidianpu"></span>
        <span>首页</span>
      </a>
      <a href="#/list">
        <span class="iconfont icon-icon122"></span>
        <span>新品</span>
      </a>
      <a href="">
        <span class="iconfont icon-erji"></span>
        <span>客服</span>
      </a>
      <a href="">
        <span class="iconfont icon-dingwei1"></span>
        <span>附近体验店</span>
      </a>
      <a href="">
        <span class="iconfont icon-wode"></span>
        <span>我的</span>
      </a>
  </div>
</template>
<script>
export default {
  name : "Footer",
  dara (){
      
  }
}
</script>

<style lang = "scss" scoped>
    .footer{
      height: 0.54rem;
      width:100%;
      background: white;
      position: fixed;
      left: 0;
      bottom: 0;
      a{
        float: left;
        width:20%;
        height:100%;
        span{
          font-size: 0.12rem;
          display: inline-block;
          width:100%;
          height:0.27rem;
          color: #333;
          line-height: 0.25rem;
        }
        .iconfont{
          font-size: 0.2rem;
          line-height: 0.35rem;
        }
      }
    }
</style>

