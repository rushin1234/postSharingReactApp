import React, { useEffect, useState } from 'react'

//useNavigate hook
import { useNavigate } from 'react-router-dom'

//firebase app
import { app } from '../firebase'

//user information
import { onAuthStateChanged, getAuth } from 'firebase/auth'
const auth = getAuth(app)

//css
import '../App.css'

//bootstrap button
import Button from 'react-bootstrap/Button'

export default function Welcome() {

  const navigate = useNavigate()
  const [useremail, setUseremail] = useState('')
  useEffect(() =>{
    onAuthStateChanged(auth, (user) => {
      if(user) setUseremail(user.email)
      else {
        setUseremail('')
        navigate('/signin')
      }
    })
  }, [])

  if(useremail === '') {
    return(
      <h1>Loading...</h1>
    )
  }
  return (
    <div className="welcomeCon">
        <h5>HI {useremail}</h5>
        <Button variant='primary btn-sm'>Logout</Button>
    </div>
  )
}
