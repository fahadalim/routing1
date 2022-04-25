import {createContext, useState} from "react";

export const AuthContext = createContext();
//create empty box

export const AuthContextProvider = ({children})=>{
    //connect app to box
    const [isAuth,setIsAuth] = useState(false);

    const handleAuth = (state)=>{
        setIsAuth(state)
    }

    return (
        <AuthContext.Provider value={{isAuth,handleAuth}}>
            {children}
        </AuthContext.Provider>
    )
}