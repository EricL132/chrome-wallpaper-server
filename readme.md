# Chrome Wallpaper Server
This repository contains the server side code for the repository below
https://github.com/EricL132/chrome-wallpaper-extension  
If you have any questions feel free to send me a message

# Extra info
Chrome extension sends request to  
```http://localhost:8000/api/upload-wallpaper```   
to upload new images to Google Cloud Storage  
Authorization is required to access google storage from nodeJS  
Login credentials should be saved in .env file and should not be shared

# How to Install
To use locally run the following command in terminal
```
git clone https://github.com/EricL132/chrome-wallpaper-server.git

npm install

node server.js
```
Google cloud storage is required for application to run without errors

# Setting up Google Cloud Storage
Create a bucket at https://console.cloud.google.com/storage  
Create a service account at https://console.cloud.google.com/apis/credentials

After creating service account click into account and go to keys and "Add key"
![](https://i.gyazo.com/6bd3be3d713502519d7339bf0b383efa.png)  
After creating key download json and you'll see the credentials for your .env variables  
Go back to https://console.cloud.google.com/storage  
and give permissions to service account for the bucket 

## Giving permission
Click on 3 dots on the right to open dropdown and click Edit access  
![](https://i.gyazo.com/cfd2a68ff9843157c1111ff275bf6fbe.png)  
Click on add principal  
For new principals put service account email (located in the json file downloaded earlier)  
For roles give it ```Storage Admin```

# Environment variables
Create .env file in root of folder  
Required variables to authorize Google Cloud Storage  

googlePROJECTID=Project id of cloud storage  
googleStorageClientEmail=Client email of service worker from json file  
googleStoragePrivateKey=Private key of service worker from json file  
bucketName=Name of created bucket  