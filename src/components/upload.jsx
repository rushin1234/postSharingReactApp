import React, { useState } from 'react'

//firebase app
import { app } from '../firebase'
//firebase storage
import { getStorage, ref, uploadBytes } from 'firebase/storage'
const storage = getStorage(app)

//special input tag from mui
import TextField from '@mui/material/TextField';

//import button from bootstrap
import Button from 'react-bootstrap/Button'

//css
import '../App.css'

export default function Upload() {

    const [profilepic, setProfilepic] = useState()
    const [uploadpost, setUploadpost] = useState('')
    const [uploadpic, setUploadpic] = useState()

    const uploadtoFirebase = () => {
        uploadBytes(ref(storage, `postpics/${Date.now()}`), uploadpic)
        .then(()=>{
            alert('uploaded')
            setProfilepic()
        })
        .catch((e)=>alert(e))
    }

    return (
        <div className="uploadCon">
            <TextField
                id="outlined-search"
                label="Start writing.."
                type="search"
                className='input-field'
                onChange={e => setUploadpost(e.target.value)}
            />
            <div className="uploadImgCon">
                <Button variant='outline-info'>
                    <label htmlFor="input-file">
                        Attach Image
                    </label>
                </Button>
                <input type="file" accept='image/*' id='input-file' onChange={(e) => {
                    setProfilepic(URL.createObjectURL(e.target.files[0]))
                    setUploadpic(e.target.files[0])
                }} />
                <img src={profilepic} alt="* image" id='upload-pic' />
                <Button
                    variant='info'
                    className='upload-btn'
                    onClick={uploadtoFirebase}
                >
                    Upload Post
                </Button>
            </div>
        </div>
    )
}
