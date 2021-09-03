import React from 'react';

const User=(props)=>{
  return (
    <div>
Ime:{props.children} | Godine:{props.godine}
    </div>
  )
}
 
export default User;