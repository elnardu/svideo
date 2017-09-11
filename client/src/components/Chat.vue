<template lang="html">
  <div class="chat mt-3 d-flex flex-column justify-content-between">

    <div class="messages" id="messages">
      <div class="scroll-content">

        <div class="message" v-for="mes in messages" :class="{server: mes.server}">
          <span v-if="!mes.server">{{mes.from}}: </span>{{mes.text}}
        </div>
      </div>
    </div>
    <form v-if="!logged" class="my-2" @submit.prevent="login">
      <input type="text" class="form-control w-100" v-model="name" placeholder="Имя">
      <button type="submit" class="btn btn-primary mt-1 w-100">Войти</button>
    </form>
    <form v-if="logged" class="my-2 message-form" @submit.prevent="send">
      <input type="text" class="form-control w-100" v-model="text" placeholder="Сообщение">
      <button type="submit" class="btn btn-success mt-1 w-100">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['socket'],
  data() {
    return {
      logged: false,
      name: "",
      text: "",
      messages: [],
      notificationSound: {}
    }
  },
  mounted() {
    this.notificationSound = new Audio('/static/sound.mp3')

    this.socket.on('message', message => {
      // if (!this.logged) return
      this.messages.push(message)
      // this.notificationSound.play()
      setTimeout(() => {
        let e = document.getElementById('messages')
        e.scrollTop = e.scrollHeight + 100
      }, 250)
    })

    setTimeout(() => {
      document.getElementById("messages").setAttribute("style", "height:" + document.getElementById("messages").offsetHeight + 'px !important')
    }, 1000)

    this.socket.on('reconnect', () => {
      this.socket.emit('setName', this.name)
    });
  },
  methods: {
    login() {
      if (!this.name) return
      this.logged = true
      this.socket.emit('setName', this.name)

    },
    send() {
      if (!this.text) return
      this.socket.emit('message', {
        from: this.name,
        text: this.text
      })
      this.text = ""
    }
  }
}
</script>

<style lang="css" scoped>
.chat {
  width: 100%;
  /*min-height: 75% !important;*/
  flex-grow: 100;
  overflow: hidden;
}
.message > span {
  color: #2ecc71;
}

.message {
  color: white;
  hyphens: auto;
}

.message.server {
  color: #bdc3c7;
}

.messages {
  /*max-height: 80%;*/
  /*height: 100% !important;*/
  display: block;
  width: 100%;
  overflow-y: scroll;
  min-height: 0;
  /*flex-basis: 100%;*/
  flex-grow: 10000;
}

.scroll-content {
  overflow: hidden;
  /*max-height: 100%;*/
}

.message-form {
  /*height: 20%;*/
  /*flex-basis: 20%;*/
  flex-grow: 1;
}
</style>
