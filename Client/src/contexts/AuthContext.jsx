import React from "react";
import {createContext,useState} from "react";




export const AuthContext=createContext()

export const AuthContextProvider=({children})=>{

    const [logindetails, setlogindetails] = useState({})

    const handlelogindetails=(data)=>{

        setlogindetails(data)

        localStorage.setItem('logindetails', JSON.stringify(data))

    }

    return<AuthContext.Provider value={{handlelogindetails}}>{children}</AuthContext.Provider>
}
