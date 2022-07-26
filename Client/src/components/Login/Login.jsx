import React from 'react'
import axios from 'axios'

import "./Login.css"
import { useNavigate } from 'react-router-dom'
import {LoginForm} from"../LoginForm/LoginForm"
import { useState,useContext } from 'react'
import { SignupForm } from '../SignupForm/SignupForm'
import { authentication } from '../../firbaseConfig'
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { async } from '@firebase/util'
import { AuthContext } from '../../contexts/AuthContext'



export const Login = () => {
  const [toggle, settoggle] = useState(true)

   const { handlelogindetails } = useContext(AuthContext);

  const navigate=useNavigate()

  const togglestate = (value) => {
    settoggle(value);
  };


  const getdata= async(data) => {
     try {

   
          const res = await axios.post(
            "https://huffpost-clone.herokuapp.com/googleuser",
            data
          );

          console.log(res);
              
        } catch (err) {
          console.log(err);
        }

  }


  

  const GoogleSignIn=()=>{
    const provider = new GoogleAuthProvider();


    signInWithPopup(authentication,provider).then((res)=>{



      console.log(res)

      const googledata = {
        first_name: res.user.displayName,
        email: res.user.email,
        ImageUrl: res.user.photoURL,
      };



       const credential = GoogleAuthProvider.credentialFromResult(res);
       const token = credential.accessToken;
       console.log(token)
       console.log(googledata)

       getdata(googledata)

       handlelogindetails(googledata)

       if(res.user.email!==null){
         navigate("/")
       }

    }).catch((er)=>{
      console.log(er)
    })

    console.log("vikas")

  }

  const FbSignIn=()=> {

    const provider = new FacebookAuthProvider();

        signInWithPopup(authentication, provider)
          .then((res) => {

            console.log(res);
            // console.log(res.user.email);
            // console.log(res.user.displayName);
            // const credential = FacebookAuthProvider.credentialFromResult(res);
            // const token = credential.accessToken;
            // console.log(token);

            if (res.user.email !== null) {
              navigate("/");
            }
          })
          .catch((er) => {
            console.log(er);
          });




  }
  return (
    <div className="login_outer">
      <div className="login_inner">
        {toggle ? (
          <LoginForm
            togglestate={togglestate}
            GoogleSignIn={GoogleSignIn}
            FbSignIn={FbSignIn}
          />
        ) : (
          <SignupForm
            togglestate={togglestate}
            GoogleSignIn={GoogleSignIn}
            FbSignIn={FbSignIn}
          />
        )}
      </div>
    </div>
  );
}

