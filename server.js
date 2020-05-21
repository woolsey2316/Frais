const express = require('express')
const favicon = require('express-favicon')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()
const {
  expressCspHeader,
  INLINE,
  NONE,
  SELF,
  EVAL,
} = require('express-csp-header')

app.use(
  expressCspHeader({
    directives: {
      'default-src': [SELF, INLINE, 'https://mongodb-server.herokuapp.com'],
      'script-src': [SELF, EVAL, INLINE],
      'style-src': [SELF, INLINE, 'fonts.googleapis.com'],
      'img-src': ['data:', SELF, INLINE],
      'font-src': ['data:', SELF, INLINE, 'fonts.gstatic.com'],
      'worker-src': [NONE],
      'block-all-mixed-content': true,
    },
  })
)

app.use(favicon(__dirname + '/favicon.ico'))
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'public')))
app.get('/ping', function(req, res) {
  return res.send('pong')
})
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.listen(port)
