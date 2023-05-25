import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"
function Sidebar() {
const recentItem=(topic)=>(
     <div className="sidebar_recentItem">
        <span className="sidebar_hash">
        #
        </span>
        <p>
           {topic} 
        </p>
     </div>

)

  return (
    <div className='sidebar'>
    <div className="sidebar_top">
    <img src={require("./images/alexander-bKTXUWKJsmw-unsplash.jpg")} alt=""  />
    <Avatar className='sidebar_avatar'/>
    <h3>Aayush Jaiswal</h3>
    <h4>ayushj22@iitk.ac.in</h4>
    </div>
    <div className="sidebar_stats">
        <div className="sidebar_stat">
            <p>Who viewed your profile</p>
            <p className='sidebar_statNumber'>66</p>
        </div>
        <div className="sidebar_stat">
            <p>Views on post</p>
            <p className='sidebar_statNumber'>24</p>
        </div>
    </div>
    <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem('reactJs')}
        {recentItem('Programming')}
        {recentItem('software')}
        {recentItem('design')}
    </div>
  
   </div>
  )
}

export default Sidebar