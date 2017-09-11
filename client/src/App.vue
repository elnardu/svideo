<template>
<div id="app" class="container-fluid">
  <div class="row">
    <div class="col-7 col-sm-7 col-md-9 col-xl-10 p-0">
      <VideoWrapper :video="video" @setVideoTime="setVideoTime"/>
    </div>
    <div class="col-5 col-sm-5 col-md-3 col-xl-2 d-flex flex-column justify-content-between">
      <Control :socket="socket" :video="video"/>
      <Chat :socket="socket"/>
    </div>
  </div>
</div>
</template>

<script>
import Chat from './components/Chat'
import VideoWrapper from './components/VideoWrapper'
import Control from './components/Control'

import io from 'socket.io-client'

export default {
  name: 'app',
  components: {
    Chat,
    VideoWrapper,
    Control
  },
  data() {
    return {
      video: {
        paused: true,
        type: "",
        time: 0,
        url: ""
      }
    }
  },
  created() {
    this.socket = io()
    this.socket.on('video', video => {
      console.log(video);
      this.$set(this, 'video', video)
    })
  },
  methods: {
    setVideoTime() {

    }
  }
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;

}
#app {
  width: 100vw;
  height: 100vh;
  background: #34495e;
  overflow: hidden;

}
</style>
