import { useContext } from 'react'
import React from 'react'
import { UserContext } from "./App"

const UserProfile = () =>{

const obj =useContext(UserContext);
return(
    <>
        <h1 id="name">Name:- {obj.name}</h1>
        <h1 id="age">Age:- {obj.age}</h1>
        
    </>
)
}

export  {UserProfile}
