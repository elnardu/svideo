<template lang="html">
  <div id="yplayer-container" class="d-flex justify-content-center align-items-center">
    <div id="yplayer">

    </div>
  </div>
</template>

<script>
import YouTubePlayer from 'youtube-player'

export default {
  props: ['time', 'url', 'paused'],
  data() {
    return {
      player: {}
    }
  },
  mounted() {
    this.player = YouTubePlayer('yplayer')
    this.player.loadVideoById(this.url.slice(-11), 0, 'large')

    this.player.seekTo(this.time)

    if(this.paused) {
      this.player.pauseVideo()
    } else {
      this.player.playVideo()
    }
  },
  destroyed() {
    this.player.destroy()
  },
  watch: {
    url() {
      this.player.loadVideoById(this.url.slice(-11), 0)
    },
    time() {
      this.player.getCurrentTime().then(time => {
        if (Math.abs(this.time - time) > 5) {
          this.player.seekTo(this.time)
        }
      })
    },
    paused() {
      if(this.paused) {
        this.player.pauseVideo()
      } else {
        this.player.playVideo()
      }
    }
  }
}
</script>

<style lang="css">
#yplayer {
  width: 100%;
  height: 100%;
}
#yplayer-container {
  width: 100%;
  height: 100vh;
  border-right: solid 2px white;
}
</style>
