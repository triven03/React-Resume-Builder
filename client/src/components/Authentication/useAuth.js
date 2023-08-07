import React, { useState, useEffect, createContext, useContext } from 'react';
// import firebase from "firebase/app";
// import "firebase/auth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import {getAuth} from "firebase/auth"
// import {initializeApp}  from 'firebase/app'

// import firebaseConfig from '../../firebase.config';
import { Route, Redirect } from 'react-router-dom';



const firebaseConfig = {
  apiKey: "AIzaSyA8109di8FTpKDIivghYSuk_6OvJFhJjLg",
  authDomain: "resume-548fe.firebaseapp.com",
  projectId: "resume-548fe",
  storageBucket: "resume-548fe.appspot.com",
  messagingSenderId: "844694163869",
  appId: "1:844694163869:web:7153c0c5552383fad49f74",
  measurementId: "G-GQ8GSRHPJJ"
};


firebase.initializeApp(firebaseConfig);
// initializeApp(firebaseConfig);

const AuthContext = createContext();

export const AuthProvider = props => {

    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);



//***************** Redirect review item to signIn ************************
export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

 

const getUser = user => {
    const { email, displayName, photoURL } = user;
    return { email, name: displayName, photo: photoURL };
}


export const Auth = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
         setUser(items);
        }
      }, []);

    

    const signIn = async (email, password,lerr,setlErr) => {
        
        // console.log(email,password);

        const requestData = {
            Email: email,
            Password: password,
          };
          const requestJson = JSON.stringify(requestData);
          try {
            const response = await fetch("http://localhost:8080/loginuser", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
            },
              body: requestJson,
            });
            const responseText = await response.text();
            const userdata= JSON.parse(responseText);
            if (response.status==200) {
                
                setUser(userdata);
                localStorage.clear();
                localStorage.setItem('rdata', JSON.stringify(userdata.Data));
                localStorage.setItem('items', JSON.stringify(userdata));
                // localStorage.removeItem('error');

                let a =document.createElement("a");
                a.href="/"
                a.click();
                window.history.back();

            }

            else  {
            //   return false;
                console.log(userdata);
            }
           

          } catch (ex) {
            // return false;

            setlErr([{"message":"User Not Found"}]);
            console.error("POST error!");
            console.log(ex);
          }
     

        
    }

    const signUp = async (email, password, name,serr,setsErr) => {
       
        // console.log(email,password,name);
        const requestData = {
            Name:name,
            Email: email,
            Password: password,
          };
          const requestJson = JSON.stringify(requestData);
          try {
            const response = await fetch("http://localhost:8080/saveuser", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
            },
              body: requestJson,
            });
            const responseText = await response.text();
            const userdata= JSON.parse(responseText);
            if (response.status==200) { 
                setUser(userdata);   
                // localStorage.setItem('rdata', JSON.stringify(userdata.Data));
                localStorage.setItem('items', JSON.stringify(userdata));
                // localStorage.removeItem('error');
              setsErr([]);

                let a =document.createElement("a");
                a.href="/"
                a.click();
                window.history.back();

            }

            else  {
            //   return false;
                console.log(userdata);
            }
           

          } catch (ex) {
            // return false;
            setsErr([{"message":"Email Already Taken"}]);
            // localStorage.setItem('error', JSON.stringify({"message":"User Not Found"}));
            console.error("POST error!");
          }
    }

    const signOut = () => {
       
         setUser(null);
         localStorage.clear();



    }
    const saveUdata = async (udata) => {
        // console.log(user);
        const reqD = {
            id: user._id,
            newData: udata,
          };
          const requestJson = JSON.stringify(reqD);
          try {
            const response = await fetch("http://localhost:8080/savedata", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
            },
              body: requestJson,
            });

            const responseText = await response.text();
            const userdata= JSON.parse(responseText);
            if (response.status==200) {               
                // console.log(userdata);
                localStorage.setItem('rdata', JSON.stringify(udata));
                console.log("save  data success");
            }

            else  {
                //   return false;
                console.log(userdata);
            }
           

          } catch (ex) {
        
            console.error("user data not updated error");
          }
    }

    return {
        getUser,
        signIn,
        signUp,
        signOut,
        user,
        saveUdata
    }
}

export default Auth;