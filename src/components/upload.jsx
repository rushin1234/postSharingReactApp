import React, { useState } from 'react'

//special input tag from mui
import TextField from '@mui/material/TextField';

//import button from bootstrap
import Button from 'react-bootstrap/Button'

//css
import '../App.css'

export default function Upload() {

    const [profilepic, setProfilepic] = useState()

    return (
        <div className="uploadCon">
            <TextField id="outlined-search" label="Start writing.." type="search" className='input-field' />
            <div className="uploadImgCon">
                <Button variant='outline-info'>
                    <label htmlFor="input-file">
                        Attach Image
                    </label>
                </Button>
                <input type="file" accept='image/*' id='input-file' onChange={(e)=>{
                    setProfilepic(URL.createObjectURL(e.target.files[0]))
                }}/>
                <img src={profilepic} alt="* image" id='upload-pic' />
                <Button variant='info' className='upload-btn'>Upload Post</Button>
            </div>
        </div>
    )
}
