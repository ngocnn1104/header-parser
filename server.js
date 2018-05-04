var express = require('express')
var path = require('path')
var app = express()
var ip = require('ip')

app.get('/', (req, res) => {
  var ipaddress = ip.address()
  var language = req.headers["accept-language"].split(',')[0]
  var software = req.headers["user-agent"].split('(')[1]
  software = software.split(')')[0]

  res.send({
    'ip address': ipaddress,
    'language': language,
    'software': software
  })
})

app.listen(process.env.PORT || 4000)
