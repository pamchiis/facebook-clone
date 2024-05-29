import { Avatar, Box, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import "./MessageSender.css";
import VideocamIcon from '@mui/icons-material/Videocam';
import CollectionsIcon from '@mui/icons-material/Collections';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';
import { useStateValue } from './StateProvider';
import db from './firebase';
import { updateDoc, serverTimestamp, collection, addDoc } from 'firebase/firestore';

function isBlank(str) {
  return /^\s*$/.test(str);
};

function MessageSender() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imgInput, setImgInput] = useState("");
  const handleCloseClear = () => {
    setOpen(false);
    setImgInput('');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isBlank(input)) {
      setInput('');
      setImgInput('');
      return
    };
    try {
      const timeCurrent = serverTimestamp();
      const docRef = await addDoc(collection(db, "posts"), {
        message: input,
        timestamp: timeCurrent,
        profilePic: user.photoURL,
        username: user.displayName,
        image: imgInput,
      });
      console.log(timeCurrent + " <= this is the current time ");
      setInput("");
      setImgInput("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  
  return <div className="messageSender">

    <div className="sender__top">
      <Avatar src={user.photoURL}/>
      <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder={`What's on your mind, ${user.displayName}?`}/>
      <button onClick={handleSubmit} type="submit">
            <SendIcon />
      </button>
    </div>
    <div className="sender__body">
      <img src={imgInput}/>
    </div>
    <div className="sender__bottom">
        <div className="sender__option">
            <VideocamIcon />
            <h4>Live Video</h4>
        </div>
        
        <div className="sender__option">
            <CollectionsIcon />
            <h4 onClick={handleOpen}>Photo/Video</h4>
        </div>
        
        <div className="sender__option">
            <EmojiEmotionsIcon />
            <h4>Feeling/Activity</h4>
        </div>
        
    </div>
    <div className="modal__container">
        <Modal open={open} onClose={handleClose} style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                <Box className="modal__box">
                  <Typography className="modal__text" id="modal-modal-title" variant="h6" component="h2">
                      Attach Image
                  </Typography>
                  <input value={imgInput} onChange={e => setImgInput(e.target.value)} type="url" placeholder={`Paste your image link here!`}/>
                  <div className="modal__buttons">
                    <button onClick={handleCloseClear}>Clear</button>
                    <button onClick={handleClose}>Submit</button>
                  </div>
                </Box>
        </Modal>
    </div>
        
   </div>;
}

export default MessageSender