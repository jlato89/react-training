import React from 'react';
import './User.css';

const UserOutput = (props) => {
   return (
      <div className='userOutput'>
         <p>
            Output multiple UserOutput components in the App component (any
            paragraph texts of your choice)
         </p>
         <p>
            Pass a username ({props.username}) to UserOutput via props and display
            it there
         </p>
      </div>
   );
}

export default UserOutput
