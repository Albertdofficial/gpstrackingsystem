import { onAuthStateChanged } from 'firebase/auth'
import React, {createContext, useReducer, useEffect} from 'react'
import {auth} from '../firebase/config'

export const AuthContext = createContext()

export const authReducer = (state, action)=>{
    switch(action.type){
        case 'LOGIN':
            return {...state, user:action.payload}
        case 'LOGOUT':
            return {...state, user:null}
        case 'AUTH_IS_READY':
            return {user: action.payload, authIsReady:true}
        default:
            return state
    }
}

// whenever state changes including the user property 
// changes it re-runs this function 
export const AuthContextProvider = ({children}) =>{
    const[state, dispatch] = useReducer(authReducer, {
        user: null,
        authIsReady: false
    })

// tell firebase to figure out whether a user is logged or not initially
    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user)=>{
            dispatch({type: 'AUTH_IS_READY', payload: user})
            unsub(); // prevents the function from firing when there is an authstate change
        })

    }, [])

    console.log('AuthContext state:', state);

    return (
        <AuthContext.Provider value={{...state, dispatch}} >
            {children}
        </AuthContext.Provider>
    )
}