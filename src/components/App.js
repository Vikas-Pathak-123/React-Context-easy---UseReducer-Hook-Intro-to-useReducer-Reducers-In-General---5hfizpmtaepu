import React, { createContext } from 'react'
import '../App.css';
import UserProfile from './UserProfile';

const UserContext = createContext()
const obj = {
  name:"Newton",
   age:3
  }
const App = () => {

  

  return (
    <div id="main">
      <UserContext.Provider value={obj}>
        <UserProfile/>
      </UserContext.Provider>
    </div>
  )
}


export default App;
export {UserContext}
