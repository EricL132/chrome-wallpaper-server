const router = require('express').Router()
const { Storage } = require('@google-cloud/storage')
var crypto = require("crypto");
const dotenv = require('dotenv')
dotenv.config()


//Authorize google storage
const storage = new Storage({   credentials: {
    client_email: process.env.googleStorageClientEmail,
    private_key: process.env.googleStoragePrivateKey.replace(/\\n/g, '\n')
}, projectId: process.env.googlePROJECTID })



//Api route is http://localhost:8000/api/upload-wallapepr
//Replace 8000 with port
//Called to upload image to google storage
//uses express-fileupload in server.js file to pass file through requests
router.post('/upload-wallpaper', async (req, res) => {
    //File info myfile is set in the chrome extension it is the object name when declaring the body
    uploadedFile = req.files.myfile
    //Create new file name for storage random 10 character string + current time in ms 
    filename = crypto.randomBytes(10).toString('hex')+Date.now() + uploadedFile.name
    //Return if not file
    if (uploadedFile) {
        //Upload to storage storage is already authenticated
        await storage.bucket(process.env.bucketName).file(filename).save(uploadedFile.data)
        //Return url with public url to access file in google storage
        return res.status(200).send({wallpaper:'https://storage.googleapis.com/wallpaper-en/' + filename})
    }
    return res.status(400).send("No image attached")
})

module.exports = router