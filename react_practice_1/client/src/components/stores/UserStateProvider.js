import React, { useState } from 'react';

export const UserStateContext = React.CreateContext();

const UserStateProvider = () => {
  const [ username, setUsername ] = useState('');


  return (
    <UserStateContext.Provider
      value={{
        username
      }}
    >
      
    </UserStateContext.Provider>
  );
};

export default UserStateProvider;
