const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');



//Create a Database Connection=============================>
mongoose.connect('mongodb+srv://lutfor251588_db_user:lutfor251588@cluster0.0upay7m.mongodb.net/')
.then(()=>console.log('MongoDB Database connection'))
.catch(error => console.log(error))



const app = express()
const PORT = process.env.PORT || 5000;


app.use(
    cors({
        origin : 'http://localhost:5173/',
        methods : ['GET','POST','DELETE','PUT'],
        allowedHeaders : [
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials : true
    })
)

app.use(cookieParser());
app.use(express.json());
app.listen(PORT, ()=>console.log(`server is running on port ${PORT}`))
