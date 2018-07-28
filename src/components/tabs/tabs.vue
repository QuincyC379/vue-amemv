<template>
  <div class="tabs">

    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>

    <router-link tag="div" class="tab-item" to="/activity">
      <span class="tab-link">活动</span>
    </router-link>

    <router-link tag="div" class="tab-item" to="/follow">
      <span class="tab-link">关注</span>
    </router-link>

    <router-link tag="div" class="tab-item" to="/nearby">
      <span class="tab-link">附近</span>
    </router-link>

  </div>
</template>

<script>
  export default {
    name: 'tabs'
  }
</script>

<style scoped>
  div {
    display: inline-block;
    margin-right: 50px;
    margin-left: 50px;
  }
  .router-link-active{
    color: goldenrod;
    border-bottom: 2px solid goldenrod;
  }
</style>
