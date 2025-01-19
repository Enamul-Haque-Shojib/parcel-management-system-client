import { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { auth } from '@/firebase/firebase.init';
import React from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';
import { setTokenIntoLocalStorage } from '@/utils/utils';


const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log('Role->',role)
    
  
    const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }
  
    const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
  
    const signInWithGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }
  
    const logOut = async () => {
      setLoading(true)
      return signOut(auth)
    }
  
    const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      })
    }
  
    // onAuthStateChange
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async currentUser => {
        console.log('CurrentUser-->', currentUser?.email)
        if (currentUser?.email) {
          setUser(currentUser)

          const token = JSON.parse(localStorage.getItem('ParcelManagementSystemToken'))

          if(token){
            setRole(token.role)
          }else{
        
          const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/auth/jwt`,
            {
              email: currentUser?.email,
          
            },
           
            { withCredentials: true }
          )

          setRole(response.data.data.tokenData.role)
    
          await setTokenIntoLocalStorage(response.data.data.tokenData)
          
          
          }  
        }
         else {
          setUser(currentUser)
          // await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
          //   withCredentials: true,
          // })
          setRole(null);
          localStorage.removeItem('ParcelManagementSystemToken');
        }
        setLoading(false)
      })
      return () => {
        return unsubscribe()
      }
    }, [])
  
    const authInfo = {
      role,
      user,
      setUser,
      loading,
      setLoading,
      createUser,
      signIn,
      signInWithGoogle,
      logOut,
      updateUserProfile,
    }
  
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    )
};

export default AuthProvider;