const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Server started running...........',
  })
})

app.get('/info', (req, res) => {
  res.json({
    project: 'node js',
    host: 'heroku',
    deployment: 'ci/cd using github actions',
  })
})

app.get('/hello', (req, res) => {
  res.json({
    message: 'Hellow guys hehehe ..............',
  })
})

app.get('/test', (req, res) => {
  res.json({
    message: 'This is a test route',
  })
})

app.get('/login', (req, res) => {
  res.json({
    message: 'Please enter credentials !',
  })
})

app.listen(process.env.PORT || 5000, () =>
  console.log('server started at port 5000')
)
