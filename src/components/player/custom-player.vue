<template>
    <div class="all-content">
      <div class="container" style="height: 540px;width: 720px;display: inline-block">
        <div class="player">
          <video-player class="video-player vjs-custom-skin"
                        ref="videoPlayer"
                        :playsinline="true"
                        :options="playerOptions"
                        @play="onPlayerPlay($event)"
                        @pause="onPlayerPause($event)"
                        @stateChanged="playerStateChanged($event)">
                        <!--style='height:720px;width:720px'-->
          </video-player>
        </div>
    </div>
    <div class="comment" style="display: inline-block">
      评论内容,评论内容,评论内容,评论内容,评论内容
      评论内容,评论内容,评论内容,评论内容,评论内容
      评论内容,评论内容,评论内容,评论内容,评论内容
      评论内容,评论内容,评论内容,评论内容,评论内容
      评论内容,评论内容,评论内容,评论内容,评论内容
    </div>
  </div>

</template>
<script>
  import {videoPlayer} from 'vue-video-player'

  export default {
    props: ['videoUrl', 'state'],
    data() {
      return {
        playerOptions: {
          playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
          autoplay: false, // 如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          // preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: 'video/mp4',
            src:'',
          }],
          poster: '', // 你的封面地址
          notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true  //全屏按钮
          }
        }
      }
    },
    components: {
      videoPlayer
    },
    watch: {
      videoUrl: function (val) {
        if (val !== '') {
          this.$refs.videoPlayer.player.src(val)
        }
      },
      state: function (val) {
        if (val) {
          // this.$refs.videoPlayer.player.pause()
        }
      }
    },
    methods: {
      onPlayerPlay(player) {
        // alert('play')
      },
      onPlayerPause(player) {
        // alert('pause')
      },
      playerStateChanged(player){
      },
    },
    mounted(){

      this.$set(this.playerOptions.sources, 0, {
        type: "video/mp4",
        referrer:"http://v11-tt.ixigua.com/0eddfb504ba7f7a33caf68db9e8645a7/5b5ea954/video/m/220b411bfa7ffd9497b92b1ab8b6b009e511159651d0001026618eb3024/",
        src: "http://v11-tt.ixigua.com/0eddfb504ba7f7a33caf68db9e8645a7/5b5ea954/video/m/220b411bfa7ffd9497b92b1ab8b6b009e511159651d0001026618eb3024/"
      });

    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },


  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" scoped>
  .container {
    background-color: #efefef;
    min-height: 100%;
  }
  .all-content{
    display: inline-block;
  }
</style>

