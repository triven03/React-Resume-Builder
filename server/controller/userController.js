// const userModel=require("../model/user")
import userModel from "../model/user.js";
import jsonData from '../model/data.json'  assert { type: "json" };


const saveUser = async function(req,res){
    const user = {
        Name: req.body.Name,
        Email:req.body.Email,
        Password: req.body.Password,
        Data:jsonData 
	}	
    // console.log(user);	
    // console.log(req.body);
	try
	{

		const data=  new userModel(user);
        const olddata= await userModel.find({Email:user.Email}) ;
        if (olddata.length==0) {
            data.save().then(function(data) {
                console.log("saved user");
                    res.status(200).send( data)
             }).catch(function (err) {
                
                 console.log(err);
             })
        }
        else{
            res.status(400).send("Email Already Used")
        }
        
            
             
        
	}
	catch(err)
	{
		console.log(err)
        console.log("error for new user creation");
	}

}

const loginUser= async function(req,res){

    const mail= req.body.Email;
    const password =req.body.Password;
    try {
        // console.log(mail,password);
        const user= await userModel.find({Email:mail,Password:password})
    
        if (user.length) {
            const member=user[0];   
            res.status(200).send(member)
        } else {
            res.status(400).send("User Not Found")            
        }
    
    } catch (error) {
        console.log(error);
    }
    
    }

    const saveData = async function(req,res){
        
        const id = req.body.id;
        const data = req.body.newData;
        try
        {
            
             userModel.findOneAndUpdate({ _id: id }, { '$set': { Data:data}},{ returnNewDocument: true })
             .then((docs)=>{
                if (docs) {
                    console.log("user Data changed and save");  
                    res.send(docs) ;                                
                } else {
                    console.log("NOt saved error");
                }
             })
    
        }
        catch(err)
        {
            console.log(err)
            console.log("error aaya");
        }
    
    }


    export default{
    saveUser,
    loginUser,
    saveData
}