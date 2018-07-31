<template>
  <div class="recommend">

    <div @click="handleVideoClick">Next Video</div>
    <custom-player :videoUrl="videoUrlData"></custom-player>

  </div>
</template>

<script>
  import CustomPlayer from '@/components/player/custom-player'

  export default {
    name: 'recommend',
    components: {
      CustomPlayer
    },
    data() {
      return {
        videoUrlData: [],
        state: ''
      }
    },
    methods: {
      getData() {
        let this_ = this;
        this.$axios.get('/api').then(function (response) {
          console.log(response.data);
          this_.videoUrlData = response.data
        }).catch(function (err) {
          console.log(err)
        })
      },
      handleVideoClick() {

      }
    },
    mounted: function () {
      this.getData()
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

  div {
    margin-top: 30px;
  }
</style>
