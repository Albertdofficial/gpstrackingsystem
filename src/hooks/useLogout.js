import {useState} from 'react'
import { auth } from "../firebase/config"
import { signOut } from "firebase/auth"
import { useAuthContext } from './useAuthContext'

export const useLogout = ()=>{
    const[error, setError] = useState(null)
    const[isPending, setIsPending] = useState(null)
    const{dispatch} = useAuthContext()

    const logout = async()=>{
        try{
            setIsPending(true)
            setError(null)

            await signOut(auth)
            console.log('user signed out');

            dispatch({type: "LOGOUT"})
            
            setIsPending(false)
        }catch(err){
            setError(err.message)
            setIsPending(false)
        }
        
    }

    return {error, logout, isPending}
}