import React from 'react'

//css
import '../App.css'

//bootstrap button
import Button from 'react-bootstrap/Button'

export default function Welcome() {
  return (
    <div className="welcomeCon">
        <h5>HI email</h5>
        <Button variant='primary btn-sm'>Logout</Button>
    </div>
  )
}
