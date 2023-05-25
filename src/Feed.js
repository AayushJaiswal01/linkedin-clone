import React, { useEffect, useState } from 'react'
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import Post from './Post';
import {db} from "./firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";




const Feed = () => {
  const { user } = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className='feed'>
    <div className="feed_inputContainer">
        <div className="feed_input">
        <CreateIcon/>
        <form>
        <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost}type='submit'>send</button>
        </form>
        </div>
        <div className="feed_inputOptions">
        <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
          <InputOption title="Video" Icon={YouTubeIcon} color="#E7A33E" />
          <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
          <InputOption
            title="Write article"
            Icon={CalendarViewWeekIcon}
            color="#7FC15E"
          />
        </div>
    </div>
    {/* {Post} */}
    {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}

    </div>
  )
}

export default Feed