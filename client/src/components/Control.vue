<template lang="html">
  <div class="mt-3 w-100 control">
    <form class="input-group" @submit.prevent="changeVideo">
        <input type="text" class="form-control w-100" id="inlineFormInput" v-model="url" :placeholder="video.url">
        <span class="input-group-btn">
          <button type="submit" class="btn btn-primary"><i class="fa fa-plus" aria-hidden="true"></i></button>
        </span>
    </form>

    <div class="btn-group mt-2 w-100">
      <button v-if="!video.paused" @click="pause" type="button" name="button" class="btn btn-danger w-100"><i class="fa fa-pause" aria-hidden="true"></i></button>
      <button v-else @click="play" type="button" name="button" class="btn btn-success w-100"><i class="fa fa-play" aria-hidden="true"></i></button>
      <button @click="toggleFullScreen" type="button" name="button" class="btn btn-secondary w-100"><i class="fa fa-arrows-alt" aria-hidden="true"></i></button>
      <button @click="toggleUsersList" type="button" name="button" class="btn btn-secondary w-100"><i class="fa fa-users" aria-hidden="true"></i> {{users.length}}</button>
    </div>

    <div v-if="usersListVisible" class="usersList mt-1">
      <ul class="list-group">
        <li class="list-group-item" v-for="user in users">{{user}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['socket', 'video'],
  data() {
    return {
      url: "",
      users: [],

      usersListVisible: false
    }
  },
  mounted() {
    this.socket.on('users', (users) => {
      this.users = users.map((el) => {
        if(!el) return "Кто-то"
        else return el
      })
      console.log(this.users)
    })
  },
  methods: {
    changeVideo() {
      if (!this.url) return
      this.socket.emit('setUrl', this.url)
    },
    pause() {
      this.socket.emit('pause')
    },
    play() {
      this.socket.emit('play')
    },
    toggleFullScreen() {
      if (this.fullscreenToggled) {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
        this.fullscreenToggled = false
      } else {
        let elem = document.getElementById('app');
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        }
        this.fullscreenToggled = true
      }
    },
    toggleUsersList() {
      this.usersListVisible = !this.usersListVisible
    }
  }
}
</script>

<style lang="css">
.control {
  flex-grow: 1;
}

.usersList {
  position: absolute;
  width: calc(100% - 30px);
  /*padding-left: 15px;*/
}

.usersList > ul > li {
  /*height: 1.4em;*/
}
</style>
