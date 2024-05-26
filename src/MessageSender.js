import { Avatar } from '@mui/material';
import React from 'react';
import "./MessageSender.css";
import VideocamIcon from '@mui/icons-material/Videocam';
import CollectionsIcon from '@mui/icons-material/Collections';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function MessageSender() {
  return <div className="messageSender">

    <div className="sender__top">
      <Avatar />
      <div className="sender__input">
        <input type="text" placeholder="What's on your mind, pamchDev" />
      </div>
    </div>

    <div className="sender__bottom">
        <div className="inputButton">
            <VideocamIcon />
            <h4>Live Video</h4>
        </div>
        
        <div className="inputButton">
            <CollectionsIcon />
            <h4>Photo/Video</h4>
        </div>
        
        <div className="inputButton">
            <EmojiEmotionsIcon />
            <h4>Feeling/Activity</h4>
        </div>
        
    </div>
        
        
   </div>;
}

export default MessageSender