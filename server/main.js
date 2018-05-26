const express = require('express'),
  app = express(),
  http = require('http').Server(app),
  io = require('socket.io')(http),
  port = 3000,
  path = require('path'),
  jsonfile = require('jsonfile'),
  fs = require('fs')


let videoConfFilePath = path.resolve(__dirname + '/../configuration/video.json')

if (fs.existsSync(videoConfFilePath)) {
  var video = require(videoConfFilePath)
} else {
  var video = {
    paused: true,
    time: 0,
    url: "",
    type: 'none'
  }
}

app.use('/', express.static(path.resolve(__dirname + '/../client/dist')))

var users = []

io.on('connection', socket => {
  let name = 'Someone'
  users.push(name)
  console.log(users)

  io.to(socket.id).emit('video', video)
  io.emit('users', users)

  socket.on('setUrl', url => {
    video = {
      paused: false,
      time: 0,
      url: url,
      type: 'default'
    }

    if (url.includes('youtu'))
      video.type = 'youtube'

    console.log(video)
    io.emit('message', {
      server: true,
      text: `${name} added new video`
    })
    io.emit('video', video)
  })

  socket.on('setTime', (time) => {
    video.time = time
    console.log(video)
    io.emit('video', video)
  })

  socket.on('pause', () => {
    video.paused = true
    console.log(video)
    io.emit('message', {
      server: true,
      text: `${name} paused the video`
    })
    io.emit('video', video)
  })

  socket.on('play', () => {
    video.paused = false
    console.log(video)
    io.emit('message', {
      server: true,
      text: `${name} unpaused the video`
    })
    io.emit('video', video)
  })

  socket.on('message', (message) => {
    io.emit('message', message)
  })

  socket.on('setName', newName => {
    if (!newName)
      return
    users[users.indexOf(name)] = newName
    name = newName
    console.log(users)
    io.emit('message', {
      server: true,
      text: `${name} joined`
    })
    io.emit('users', users)
  })

  socket.on('disconnect', () => {
    users.splice(users.indexOf(name), 1)
    console.log(users)
    if (name != 'Someone') {
      io.emit('message', {
        server: true,
        text: `${name} left`
      })
    }
    io.emit('users', users)
  })
})

setInterval(() => {
  if (!video.paused) {
    video.time += 1
  }
  io.emit('video', video)
}, 1000)

http.listen(port, () => console.log('listening on port ' + port))

process.stdin.resume()
process.on('exit', code => {
  console.log('exit')
})

process.on('SIGINT', () => {
  http.close()
  jsonfile.writeFileSync(videoConfFilePath, video)
  process.exit(0)
})

process.on('SIGTERM', function () {
  http.close()
  jsonfile.writeFileSync(videoConfFilePath, video)
  process.exit(0)  
})