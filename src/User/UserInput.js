import React from 'react'

const UserInput = (props) => {
   const style = {
      background: '#ccc',
      width: '30%',
      padding: '12px',
      margin: 'auto',
      border: '1px solid blue'
   }
   return (
      <div style={style}>
         <input 
         value={props.username} 
         onChange={props.onChange}></input>
      </div>
   )
}

export default UserInput
