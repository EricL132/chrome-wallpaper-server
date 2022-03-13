const express = require('express')
const app = express()
const apiRoutes = require('./Routes/api')
const PORT = process.env.port || 8000
const server = require('http').createServer(app)
const dotenv = require('dotenv')
const fileUpload = require('express-fileupload');
dotenv.config()
//Handle file upload
app.use(fileUpload());
//Api Routes
app.use('/api',apiRoutes)
server.listen(PORT,()=>console.log(`Server On : ${PORT}`))