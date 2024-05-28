import React, { useEffect, useState } from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import db from "./firebase";
import { getDocs, collection, orderBy, onSnapshot, query} from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect( () => {
    const q = query(collection(db, "posts"), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
     const fetchedPosts = [];
     querySnapshot.forEach((doc) => {
        fetchedPosts.push({ id: doc.id, ...doc.data()});
     });
     setLoading(false);
     setPosts(fetchedPosts);
    });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return <div className="feed">
        <MessageSender />
        {posts.map(post => (
          <Post
            key={post.id}
            profileImg={post.profilePic}
            timestamp={post.timestamp}
            message={post.message}
            username={post.username}
            image={post.image}
          />
        ))}
    </div>;
}

export default Feed