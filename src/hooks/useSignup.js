import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import {useState} from 'react'

import {auth} from '../firebase/config'
import { useAuthContext } from './useAuthContext'

const useSignup = () => {
    const[error, setError] = useState(null)
    const[isPending, setIsPending] = useState(null)
    const{dispatch} = useAuthContext()
  
    const signup =async(email, password, displayName) =>{
        setError(null)
        setIsPending(true)

        try{
            const res = await createUserWithEmailAndPassword(auth, email, password)

            
            if(!res){
                throw new Error('Could not complete signup')
            }
            // add displayName to user
            await updateProfile(res.user, {displayName})
            console.log(res.user)

            dispatch({type: "LOGIN", payload:res.user})

            setIsPending(false)
            setError(null)
            
        }catch(err){
            setIsPending(false)
            setError(err.message)
        }
    }
  return {error, signup, isPending}
}

export default useSignup

/* createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {console.log('user signed up:', res.user)})
            .catch(err =>{
                setError(err.message)
            }) */