import React from 'react'

//auth0
import { useAuth0 } from "@auth0/auth0-react";

//react button
import Button from 'react-bootstrap/Button'

//css
import '../App.css'

export default function Signin() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="signinCon">

      <Button
        variant='outline-info'
        size='lg'
        onClick={()=>{loginWithRedirect()}}
      >
        start here
      </Button>

    </div>
  )
}
