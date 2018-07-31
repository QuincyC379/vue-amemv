<template>
  <div>
    <div class="detail">
      <video-player class="video-player-box"
                    ref="videoPlayer"
                    :options="playerOptions"
                    :playsinline="true"
      >
      </video-player>
    </div>
    <h3>第{{$route.params.id}}集</h3>
    <!--<item></item>-->
    <router-link class="video-item" :to="{ name: 'detail', params: { id: 1 }}">
      1
    </router-link>
    <router-link class="video-item" :to="{ name: 'detail', params: { id: 2 }}">
      2
    </router-link>
    <router-link class="video-item" :to="{ name: 'detail', params: { id: 3 }}">
      3
    </router-link>
  </div>
</template>
<script>
  //import Item from '@/components/item'
  export default {
    name: 'Detail',
    data() {
      console.log(this.$route.params.id);
      return {
        playerOptions: {
          //videojs options
          muted: false,
          language: 'zh-CN',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "videos/" + this.$route.params.id + ".mp4"
          }],
          width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试',
          poster: "",
        }
      }
    },
    watch: {
      '$route': 'fetchdata'
    },
    methods: {
      fetchdata() {
        console.log("created");
        console.log("before: " + this.playerOptions.sources.src);
        this.playerOptions.sources.src = "videos/" + this.$route.params.id + ".mp4";
        console.log("after: " + this.playerOptions.sources.src);
      }
    }
// },
// components: {
// Item
// }
  }
</script>
<style>
  .vjs_video_3-dimensions {
    width: 100% !important;
    max-height: 300px;
  }

</style>

<style scoped>
  .detail {
    width: 100%;
  }
</style>
