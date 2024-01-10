import React from 'react'

//useNavigate hook
import { useNavigate } from 'react-router-dom'

//firebase app
import { app } from '../firebase'

//authentication
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

//react button
import Button from 'react-bootstrap/Button'

//css
import '../App.css'

export default function Signin() {

  const navigate = useNavigate()
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(()=>navigate('/dashboard'))
  }

  return (
    <div className="signinCon">

      <Button
        variant='outline-info'
        size='lg'
        onClick={signInWithGoogle}
      >
        continue with google
      </Button>

    </div>
  )
}
