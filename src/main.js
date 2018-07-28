import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import VideoPlayer from 'vue-video-player'

require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
require('@/common/stylus/custom-player.css');
require('videojs-contrib-hls/dist/videojs-contrib-hls');


Vue.config.productionTip = false;
Vue.use(VideoPlayer);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
});
