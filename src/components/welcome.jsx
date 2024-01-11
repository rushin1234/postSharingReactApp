import React from 'react'

//auth0
import { useAuth0 } from "@auth0/auth0-react";

//css
import '../App.css'

//bootstrap button
import Button from 'react-bootstrap/Button'

export default function Welcome() {
  const { user } = useAuth0()
  console.log(user)

  if(user === undefined) {
    return(
      <h1>Loading...</h1>
    )
  }
  return (
    <div className="welcomeCon">
        <h5>HI {user.nickname}</h5>
        <Button variant='primary btn-sm'>Logout</Button>
    </div>
  )
}
