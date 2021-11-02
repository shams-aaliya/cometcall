import React,{useState} from 'react';
import './userRegistration.scss';
import { CometChat } from '@cometchat-pro/chat';
import { useHistory } from 'react-router';

const UserRegistration = () => {
  const [uid,setUID] = useState('');
  const [name,setName] = useState('');
  const [error,setError] = useState('');
  let history = useHistory();
  let authKey = process.env.REACT_APP_COMETCHAT_AUTH_KEY;
  var user = new CometChat.User(uid);
  user.setName(name);
    
  const handleuid = (event) =>{
    setUID(event.target.value);
  }

  const handlename = (event) =>{
    setName(event.target.value);
  }
  const handlesubmit = () =>{
    CometChat.createUser(user, authKey).then(
      user => {
          console.log("user created", user);
          history.push('/login')
      }, error => {
          setError(error.message)
          console.log("error", error.message);
      }
  )
  }
 
  
  return (
    <div>
      <h1>Welcome to the registration page</h1>
      
      <label>Username:</label>
      <input 
      type='text'
      value={uid} 
      onChange={handleuid}
      />
      <label >Name:</label>
      <input
      type='text'
      value={name}
      onChange={handlename}
      />
      <button
      className='button' 
      onClick={handlesubmit} >
        Button
      </button>
      {
        error ? <p>{error}</p> : null
      }
    </div>
  )
}

export default UserRegistration;