const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Server started running...........',
  })
})

app.listen(5000, () => console.log('server started at port 5000'))
