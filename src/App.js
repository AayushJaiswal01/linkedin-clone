import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector } from 'react-redux';
import {  login,logout, selectUser } from './userSlice';
import { auth } from "./firebase";
import { useDispatch } from'react-redux';

import Login  from './Login';

function App() {
  const dispatch = useDispatch();
  const user=useSelector(selectUser)
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
            }
            else{
          dispatch(logout());

            }

    })
  },[dispatch])
  return (

    <div className="app">
      <Header/>
      {!user ? (<Login/> ) 
      :
      (
        <div className="app_body">
      <Sidebar/>
      <Feed/>
      </div>
      )
      }
     
    </div>

  );
}

export default App;
