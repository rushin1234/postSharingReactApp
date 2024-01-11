import React from 'react'

//react button
import Button from 'react-bootstrap/Button'

//css
import '../App.css'

export default function Signin() {
  return (
    <div className="signinCon">

      <Button
        variant='outline-info'
        size='lg'
      >
        continue with google
      </Button>

    </div>
  )
}
