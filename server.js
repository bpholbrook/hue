const express = require('express')
const app = express()

// The number of milliseconds in one day
const ONE_DAY = 86400000

// Serve up content from build directory
app.use('/hue', express.static(__dirname + '/build', { maxAge: ONE_DAY }))

app.listen(5000, () => {
  console.log('')
  console.log('   ┌──────────────────────────────────────────┐')
  console.log('   │                                          │')
  console.log('   │   Serving!                               │')
  console.log('   │                                          │')
  console.log('   │   - Local:  http://localhost:5000/hue    │')
  console.log('   │                                          │')
  console.log('   └──────────────────────────────────────────┘')
  console.log('')
})