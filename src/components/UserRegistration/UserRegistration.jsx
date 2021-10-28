import React,{useState} from 'react'

const UserRegistration = () => {
    const [user,setUser] = useState('');

    
  const handlechange = (event) =>{
    setUser(event.target.value);
    console.log(user);
  }

  const handlesubmit = () =>{
      console.log(user);
  }
    return (
        <div>
    <h1>CometCall</h1>
     <input 
     type='text'
     value={user} 
     onChange={handlechange}/>
     
     <button
     style={{width:'100px', height:'40px'}} 
     onClick={handlesubmit} >
      Button
    </button>
        </div>
    )
}

export default UserRegistration
