import mongoose from "mongoose";

export default async function connect()
{
  mongoose.set("strictQuery", false);
  // mongoose.connect('mongodb+srv://trivendra:12312312@cluster0.v0fa8wf.mongodb.net/GraphicalPass?retryWrites=true&w=majority')
  mongoose.connect( "mongodb://0.0.0.0:27017/resume")
  .then(function()
  {
    console.log("connect to db")
  })
  .catch(function(err)
  {
    console.log("db connection error",err)
  })

}
