import React,{useState} from 'react';
import { CometChat } from '@cometchat-pro/chat';
import { useHistory } from 'react-router';

const UserLogin = () => {
const [uid,setUID] = useState('');
const history = useHistory();


const handleuid = (event) =>{
    setUID(event.target.value);
    console.log(uid);
  }
const login = (uid) =>{
var authKey = process.env.REACT_APP_COMETCHAT_AUTH_KEY;
var UID = uid;
CometChat.login(UID,authKey)
.then(
 (user) =>
  {
  console.log('Login Successful:', { user })
  history.push('/cometcallui');
  }
  )
  .catch((error)=>console.log(error))
}

const handleclick = (e) =>{
    e.preventDefault();
    console.log(uid);
    login(uid);
}
    return (
        <div>
            <p>Welcome to the login page!</p>
            <input 
            type="text"
            value={uid}
            onChange={handleuid}
             />
            <button onClick={handleclick}>Log In</button>
        </div>
    )
}

export default UserLogin
