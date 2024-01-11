import React, { useState } from 'react'

//appwrite
import { client } from '../appwrite/config'
import { Storage, Databases, ID } from 'appwrite'
const storage = new Storage(client)
const db = new Databases(client)

//special input tag from mui
import TextField from '@mui/material/TextField';

//import button from bootstrap
import Button from 'react-bootstrap/Button'

//css
import '../App.css'

export default function Upload() {

    const [profilepic, setProfilepic] = useState()

    const [uploadtext, setUploadtext] = useState('')
    const [uploadpic, setUploadpic] = useState()

    const uploadInAppwrite = async() => {
        // const r = await storage.createFile('65a0042618a05ca25562', ID.unique(), uploadpic)
        // db.createDocument('65a00443561410db61cd', '65a0045839ed13a41dd5', ID.unique(), {
        //     postText: uploadtext,
        //     postpic: uploadpic
        // })
        // console.log(r)
    }

    return (
        <div className="uploadCon">
            <TextField
                id="outlined-search"
                label="Start writing.."
                type="search"
                className='input-field'
                onChange={e=>setUploadtext(e.target.value)}
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
                    onClick={uploadInAppwrite}
                >
                    Upload Post
                </Button>
            </div>
        </div>
    )
}
