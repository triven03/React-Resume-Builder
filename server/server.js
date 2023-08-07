import express from 'express';
import connect  from "./database/conn.js"
import cors from 'cors';
import bodyParser from 'body-parser';
// const bodyParser = require('body-parser');

import jsonData from './model/data.json'  assert { type: "json" };

// import UserModel from './model/user.js';

import userController from './controller/userController.js';

// const userController = require("./controller/userController");
// const connect = require( './database/conn');

const app = express();
// app.use(bodyparse.json())

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(cors());

const port = process.env.PORT || 8080;

// import model

/** GET: http://localhost:8080 */
app.get('/', (req, res) => {
    try{
       res.send("server run succsess")
    }catch(error){
        res.json({error})
    }
})

// console.log(jsonData);
/** POST: http://localhost:8080/uploads  */
// app.post("/uploads", async (req, res) => {
//     const body = req.body;
//     try{
//         const newImage = await Post.create(body)
//         newImage.save();
//         res.status(201).json({ msg : "New image uploaded...!"})
//     }catch(error){
//         res.status(409).json({ message : error.message })
//     }
// })

app.route("/saveuser").post(userController.saveUser)
app.route("/loginuser").post(userController.loginUser)
app.route("/savedata").post(userController.saveData)



connect().then(() => {
    try{
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    }catch(error){
        console.log("Can't connect to the server");
    }
}).catch((error) => {
    console.log("Invalid Database Connection...!")
})

