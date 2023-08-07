// import { json } from "body-parser";
import mongoose from "mongoose";
const { Schema } = mongoose;


const UserSchema = new mongoose.Schema({
  Name:{type:String},
  Email:{type:String},
  Password:{type:String},
  Data:{type:Object},
  
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;

