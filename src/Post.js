import React, { useState } from 'react';
import "./Post.css";
import { Avatar, Modal } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';

function Post({ profileImg, image, username, timestamp, message }) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  if (timestamp == null) return;
  console.log({timestamp});
  return <div className="post">
    <div className="post__top">
        <Avatar src={profileImg} className="post__avatar"/>
        <div className="post__header">
            <h4>{username}</h4>
            <div className="header__timeblock">
                <h5>{new Date(timestamp.toDate()).toUTCString()}</h5>
                <CalendarMonthIcon />
            </div>
        </div>
    </div>
    <div className="post__body">
        <p>{message}</p>
        <img onClick={handleOpen} alt="" src={image} />
    </div>
    
    <div className="post__bottom">
        <div className="post__option">
            <ThumbUpIcon />
            <h4>Like</h4>
        </div>
        <div className="post__option">
            <ChatBubbleIcon />
            <h4>Comment</h4>
        </div>
        <div className="post__option">
            <ShareIcon />
            <h4>Share</h4>
        </div>
    </div>

    <div className="modal__container">
        <Modal open={open} onClose={handleClose} style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                <img className="modalPreview" alt="" src={image} />
        </Modal>
    </div>
    
  </div>;
}

export default Post