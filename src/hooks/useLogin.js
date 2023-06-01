import {useState} from 'react'

// firebase imports
import {auth} from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

import {useAuthContext} from '../hooks/useAuthContext'

export const useLogin = () =>{
    const[error, setError] = useState(null)
    const[isPending, setIsPending] = useState(null)
    const{dispatch} = useAuthContext()

    const login = async(email, password)=>{
       try{
        setError(null)
        setIsPending(true)

        const res = await signInWithEmailAndPassword(auth, email, password)

        if(!res){
            throw new Error('User could not login')
        }
        console.log('User logged in: ', res.user);

        dispatch({type: "LOGIN", payload:res.user})

        setIsPending(false)
       }catch(err){
        setError(err.message)
        setIsPending(false)
        console.log(err.message);
       }
    }
    return {error, login, isPending}

}