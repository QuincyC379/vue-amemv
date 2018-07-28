<template>
  <div class="tabs">
    <router-link tag="div" class="tab-item" to="/activity">
      <span class="tab-link">活动</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/follow">
      <span class="tab-link">关注</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/nearby">
      <span class="tab-link">附近</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'tabs'
  }
</script>

<!--<style scoped lang="stylus" rel="stylesheet/stylus">-->
<!--@import "~common/stylus/variable"-->
<!--.tab-->
<!--display: flex-->
<!--height: 44px-->
<!--line-height: 44px-->
<!--font-size: $font-size-medium-->
<!--.tab-item-->
<!--flex: 1-->
<!--text-align: center-->
<!--.tab-link-->
<!--padding-bottom: 5px-->
<!--color: $color-text-l-->
<!--&.router-link-active-->
<!--.tab-link-->
<!--color: $color-theme-->
<!--border-bottom: 2px solid $color-theme-->

<!--</style>-->
<style scoped>
  div {
    display: inline-block;
    margin-right: 50px;
    margin-left: 50px;
  }
</style>
