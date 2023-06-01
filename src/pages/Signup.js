import React, {useRef} from 'react'

// firebase imports 
import {db} from '../firebase/config'
import {collection, addDoc} from 'firebase/firestore'

import './signup.css'
import useSignup from '../hooks/useSignup'

import {useNavigate} from 'react-router-dom'

const Signup = () => {
    const{error, signup, isPending} = useSignup();
    const navigate = useNavigate()

    const roleRef = useRef("")
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const displayNameRef = useRef("")

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const role = roleRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const displayName = displayNameRef.current.value;

        await signup(email, password, displayName)

        const data = {
            role,
            email,
            password,
            displayName
        }

        const ref = collection(db, 'users')
        await addDoc(ref, data)

        navigate('/dashboard') // redirects user to dashboard
        
        resetForm()
    }


    const resetForm = ()=>{
        roleRef.current.value = ''
        emailRef.current.value = ''
        passwordRef.current.value = ''
        displayNameRef.current.value = ''

    }
  return (
    <form onSubmit={handleSubmit} className="signup-form" >

        <label>
            <span>Role:</span>
            <input 
                type="text"
                ref={roleRef}
                placeholder="Driver"
                required
                />
        </label>
        <label>
            <span>Email:</span>
            <input 
                type="email"
                ref={emailRef}
                required
                />
        </label>
        <label>
            <span>Password:</span>
            <input 
                type="password" 
                ref={passwordRef}
                required
                />
        </label>
        <label>
            <span>Display name:</span>
            <input 
                type="text" 
                ref={displayNameRef}
                required
                />
        </label>
        <button disabled={isPending} >Sign Up</button>
        {error && <p className='error' >{error} </p>}
        {isPending && <p className='pending' >Loading </p>}
        
    </form>
  )
}

export default Signup