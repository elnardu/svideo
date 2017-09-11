<template lang="html">
  <div id="videoWrapper">
    <VideoDefault v-if="video.type === 'default'" :time="video.time" :url="video.url" :paused="video.paused"/>
    <VideoYoutube v-if="video.type === 'youtube'" :time="video.time" :url="video.url" :paused="video.paused"/>
  </div>
</template>

<script>
import VideoYoutube from './VideoYoutube'
import VideoDefault from './VideoDefault'

export default {
  props: ['video'],
  components: {
    VideoYoutube,
    VideoDefault
  }
}
</script>

<style lang="css">
#videoWrapper {
  width: 100%;
  height: 100%;
}
</style>
