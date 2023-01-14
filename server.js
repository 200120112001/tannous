const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030
app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/data', function (req, res) {
    var data =[{id:17,name:'omar'},
    {id:54,name:'elia'},
    {id:32,name:'fatat'},
]
res.send(data)
  })


app.listen(PORT)