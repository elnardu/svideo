<template lang="html">
  <div id="videojs-container" class="d-flex justify-content-center align-items-center">
    <video id="videojs" class="video-js vjs-default-skin vjs-big-play-centered">
    </video>
  </div>
</template>

<script>
import videojs from 'video.js'

export default {
  props: ['time', 'url', 'paused'],
  mounted() {


    this.player = videojs('videojs', {
      controls: true,
      autoplay: false,
      preload: 'auto',
      techOrder: ["html5"],
      sources: []
    })
    this.player.show()
    this.player.src({
      type: "application/x-mpegURL",
      src: this.url
    })
    this.player.currentTime(this.time)

    if (this.paused) {
      this.player.pause()
    } else {
      this.player.play()
    }
  },
  destroyed() {
    this.player.dispose()
  },
  watch: {
    url() {
      this.player.src({
        type: "application/x-mpegURL",
        src: this.url
      })
    },
    time() {
      if (Math.abs(this.time - this.player.currentTime()) > 3) {
        this.player.currentTime(this.time)
      }
    },
    paused() {
      if (this.paused) {
        this.player.pause()
      } else {
        this.player.play()
      }
    }
  }
}
</script>

<style lang="css">
#videojs {
  width: 100%;
  height: 100%;
}
#videojs-container {
  width: 100%;
  height: 100vh;
}
</style>
