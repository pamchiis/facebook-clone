import { Avatar } from '@mui/material';
import React from 'react';
import "./Post.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function Post({ profileImg, image, username, timestamp, message }) {
  return <div className="post">
    <div className="post__top">
        <div className="post__header">
            <Avatar />
            <div className="header__block">
                <h4>pamchDev</h4>
                <div className="header__timeblock">
                    <h5>11:40PM</h5>
                    <CalendarMonthIcon />
                </div>
            </div>
            
        </div>
        
        <p>Hello World! ^_^</p>
        <img src="https://64.media.tumblr.com/5c7e929e12d0a87c065473a031770e4f/d0d392315e6e5fe8-93/s400x600/09113c326cc63411e974caa0048d00f4239a7ddc.jpg" />
        
    </div>
  </div>;
}

export default Post