import React from 'react'
import "./UserCard.css"

function UserCard({name, avatar}) {
  return (
  

      <div className='usercard'>   

      <img classname='user-image'src={avatar}/>
      
      <p className='username'>{name}</p>

      </div>    
  )
}
export default UserCard
