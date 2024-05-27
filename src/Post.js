import React, { useState } from 'react';
import "./Post.css";
import { Avatar, Modal, Box, Typography, Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';

function Post({ profileImg, image, username, timestamp, message }) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return <div className="post">
    <div className="post__top">
        <Avatar />
        <div className="post__header">
            <h4>pamchDev</h4>
            <div className="header__timeblock">
                <h5>11:40PM</h5>
                <CalendarMonthIcon />
            </div>
        </div>
    </div>
    <div className="post__body">
        <p>Hello World! ^_^</p>
        <img onClick={handleOpen} alt="" src="https://64.media.tumblr.com/5c7e929e12d0a87c065473a031770e4f/d0d392315e6e5fe8-93/s400x600/09113c326cc63411e974caa0048d00f4239a7ddc.jpg" />
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
                <img className="modalPreview" alt="" src="https://64.media.tumblr.com/5c7e929e12d0a87c065473a031770e4f/d0d392315e6e5fe8-93/s400x600/09113c326cc63411e974caa0048d00f4239a7ddc.jpg" />
        </Modal>
    </div>
    
  </div>;
}

export default Post