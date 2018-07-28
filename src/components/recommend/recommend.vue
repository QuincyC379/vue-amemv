<template>
  <div class="recommend">
    <custom-player></custom-player>
  </div>
</template>

<script>
import CustomPlayer from '@/components/player/custom-player'
export default {
  name: 'recommend',
  components: {
    CustomPlayer
  },
  data () {
    return {
      msg: '推荐热门视频'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
div{
  margin-top: 30px;
}

</style>
