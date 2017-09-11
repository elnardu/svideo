const express = require('express'),
  app = express(),
  http = require('http').Server(app),
  io = require('socket.io')(http),
  port = 8080,
  path = require('path'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  jsonfile = require('jsonfile')

var video = require('./video.json')

app.use('/', express.static(path.resolve(__dirname + '/../client/dist')))
app.use('/s/', express.static(path.resolve(__dirname + '/../static')))

var users = []

io.on('connection', socket => {
  let name = 'Кто-то'
  users.push(name)
  console.log(users)

  io.to(socket.id).emit('video', video)
  io.emit('users', users)

  socket.on('setUrl', url => {
    video = {
      paused: true,
      time: 0,
      url: url,
      type: 'default'
    }

    if (url.includes('youtu'))
      video.type = 'youtube'

    console.log(video)
    io.emit('message', {
      server: true,
      text: `${name} поставил видосик`
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
      text: `${name} поставил на паузу`
    })
    io.emit('video', video)
  })

  socket.on('play', () => {
    video.paused = false
    console.log(video)
    io.emit('message', {
      server: true,
      text: `${name} включил воспроизведение`
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
      text: `${name} приперся в чат`
    })
    io.emit('users', users)
  })

  socket.on('disconnect', () => {
    users.splice(users.indexOf(name), 1)
    console.log(users)
    if (name != 'Кто-то') {
      io.emit('message', {
        server: true,
        text: `${name} свалил нафиг`
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
  jsonfile.writeFileSync('./video.json', video)
  process.exit(code)
})

process.on('SIGINT', () => {
  process.exit(0);
});
