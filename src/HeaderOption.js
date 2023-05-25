import { Avatar } from '@mui/material'
import React from 'react'

function HeaderOption({Icon,title,avatar,onClick}) {
  return (
    <div onClick={onClick}className='headerOption'>
       {Icon && <Icon className='headerOption_icon'/>}
       {avatar && <Avatar className='headerOption_icon' src={avatar}/>}
       <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption