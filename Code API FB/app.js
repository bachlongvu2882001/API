const express = require('express')
const path = require('path')
const app = express();
const pathHtml = path.join(__dirname, 'fb.html')
app.get('/', (req, res) => {
    res.sendFile(pathHtml)
})
app.listen(3000)