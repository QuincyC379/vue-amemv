<template>
  <div class="container">
    <div class="player">
      <video-player class="video-player vjs-custom-skin"
                    ref="videoPlayer" :playsinline="true"
                    :options="playerOptions"
                    @play="onPlayerPlay($event)"
                    @pause="onPlayerPause($event)">
      </video-player>
    </div>
  </div>
</template>
<script>
  import {videoPlayer} from 'vue-video-player'

  export default {
    data() {
      return {
        playerOptions: {
          // playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
          autoplay: false, // 如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: 'video/mp4',

            // http://v9-dy.ixigua.com/ae88837f5836ebb161bf9ca4e582bd65/5b5c3aa1/video/m/220a147c11786f547a3b752b72bde0828b911592b00000063dcde50ccc1/
            // http://v3-dy-z.ixigua.com/87ee8a577a222fd30d7c7695769f1521/5b5c3aa4/video/m/2208e85a240bfa3498bb750c51ce025b27d115985630000c4a13be22a4e/
            // http://v1-dy.ixigua.com/6c52cd8ec2209e026142223e70d696aa/5b5c3aaf/video/m/220e21a0114c5d04ba9b6af0fb3503855251159558e0000863bfe38f1ea/
            // http://v11-tt.ixigua.com/195c435d194fc882987b193f0ecf07a3/5b5c3aa3/video/m/2208d5e17ef65e44bd7b5ae456c67e659741157099500002b9e910cd858/
            // http://v9-dy.ixigua.com/15367cf25e2dd35347f7cf5a95d5878a/5b5c3a9f/video/m/220e8cdb9a8f70c4ad99f6591937c15127111598aa1000028c678ddf8ba/
            // http://v7.pstatp.com/3bb9390eede44174bf73ab8f08b94e23/5b5c3a99/video/m/220eabfb65ff4954cb489cd8fad9226ea8a1155615100008a7f998a5a38/
            // http://v6-dy.ixigua.com/video/m/2203863d2d632c04323abf69f15226352d01158f2230000b88928dff07b/?Expires=1532770974&AWSAccessKeyId=qh0h9TdcEMoS2oPj7aKX&Signature=BGPrYvOaZkXJF0FYiUFl%2Bjys1jo%3D
            // http://v6-dy.ixigua.com/video/m/220ef6aae2a4be048a89d84a6bdcec9607b11598a420000923c9cfb5ae0/?Expires=1532770977&AWSAccessKeyId=qh0h9TdcEMoS2oPj7aKX&Signature=poy4dJinbk%2F%2BnxEVtqUAsQd%2Fy5o%3D
            // http://v11-tt.ixigua.com/0e5d99bb1434563fcd383d2fa0bd4d83/5b5c3aa6/video/m/220c4e44bfdfb004ac7bdd11cc178589f84115984840000cce695bdbd92/
            // http://v3-dy.ixigua.com/620d4d7bf5bffd04a4c2ebaf87d40a1e/5b5c3aa3/video/m/220dfdee3e6ea714bc0b141ee861b78011f11592a400000a648ef776c46/

            src: 'http://v9-dy.ixigua.com/ae88837f5836ebb161bf9ca4e582bd65/5b5c3aa1/video/m/220a147c11786f547a3b752b72bde0828b911592b00000063dcde50ccc1/' // 你的视频地址（必填）
          }],
          poster: '', // 你的封面地址
          width: document.documentElement.clientWidth,
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
    methods: {
      onPlayerPlay(player) {
        // alert('play')
      },
      onPlayerPause(player) {
        // alert('pause')
      }
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" scoped>
  .container {
    background-color: #efefef;
    min-height: 100%;
  }
</style>

