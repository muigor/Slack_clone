import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "./Chat.css"
import db from '../firebase';
import Message from './Message';
import ChatInput from './ChatInput';

function Chat() {
const {roomId}=useParams();
const [roomDetails, setRoomDetails]=useState(null);
const [roomMessage, setRoomMessages]=useState([]);
useEffect(()=>{
    db.collection('rooms').doc(roomId)
    .onSnapshot(snapshot =>{setRoomDetails(snapshot.data())})
    db.collection("rooms").doc(roomId)
    .collection('messages')
    .orderBy('timestamp','asc')
    .onSnapshot(snapshot =>{
        setRoomMessages(snapshot.docs.map(doc => doc.data()))
    })
},[roomId]);
console.log(roomDetails);
console.log(roomMessage);
  return (
    <div className='chat'>
        <div className='chat__header'>
            <div className='chat__headerLeft'>
                <h4 className="chat__channelName">
                    <strong>#{roomDetails?.name}</strong>
                    <StarBorderOutlinedIcon/>
                </h4>
            </div>
            <div className='chat__headerRight'>
                <p>
                  <InfoOutlinedIcon/>Details  
                </p>
                
            </div>

        </div>
        <div className="chat__messages">
            {roomMessage.map(({message,timestamp,user,userImage}) =>{
                return(
                <Message 
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage}
                     />)
            })}
            <ChatInput channelName={roomDetails?.name} channelId={roomId}/>
        </div>
    </div>
  )
}

export default Chat