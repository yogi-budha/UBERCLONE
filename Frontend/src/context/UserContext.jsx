import React, { useState } from 'react'

export const userContext = React.createContext();

function UserContext({children}) {
    const [user,setUser] = useState({
        fullName:{
            firstName:"",
            lastName:""
        },
        email:"",
        password:""
    })
  return (

    <userContext.Provider value={ 
        {user,setUser}
    }>
        {children}
    </userContext.Provider>
  )
}

export default UserContext