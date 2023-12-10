import React, { useState } from 'react'
import './ChatInput.css'
import { Button } from '@mui/material'
import db from '../firebase'
import firebase from 'firebase/compat/app'
import { useSelector } from 'react-redux'

function ChatInput({ channelName ,channelId}) {
    const [input ,setInput]=useState("");
    const user = useSelector((state)=>state.user_info.user);
    console.log(user)
    const sendMessage=(e)=>{
        console.log('Message envoyé !');
        e.preventDefault();
        if(channelId){
            db.collection('rooms').doc(channelId).collection('messages').add({
                message:input,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                user:user?.displayName,
                userImage:user?.photoURL,

            })
        }
    };
  return (
    <div className='ChatInput'>
        <form>
            <input
            value={input}
            onChange={e=> setInput(e.target.value)} 
            placeholder={`Message #${channelName}`}
            />
            <Button type='submit' onClick={sendMessage}>
                SEND
            </Button>
        </form>

    </div>
  )
}

export default ChatInput