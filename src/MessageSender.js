import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import "./MessageSender.css";
import VideocamIcon from '@mui/icons-material/Videocam';
import CollectionsIcon from '@mui/icons-material/Collections';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';

function MessageSender() {

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("");
  };
  
  return <div className="messageSender">

    <div className="sender__top">
      <Avatar />
      <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="What's on your mind, pamchDev" />
      <button onClick={handleSubmit} type="submit">
            <SendIcon />
      </button>
    </div>

    <div className="sender__bottom">
        <div className="sender__option">
            <VideocamIcon />
            <h4>Live Video</h4>
        </div>
        
        <div className="sender__option">
            <CollectionsIcon />
            <h4>Photo/Video</h4>
        </div>
        
        <div className="sender__option">
            <EmojiEmotionsIcon />
            <h4>Feeling/Activity</h4>
        </div>
        
    </div>
        
        
   </div>;
}

export default MessageSender