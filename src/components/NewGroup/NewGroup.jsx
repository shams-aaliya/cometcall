import React,{useState} from 'react'
import './NewGroup.scss'
import {CometChat} from '@cometchat-pro/chat'

const NewGroup = () => {
    // Initializing State
        const [guid,setGUID] = useState("");
        const [groupname,setgroupName] = useState("");
        const [error,setError] = useState('');

    // Setting State 
        const handleguid = (event) =>{
            setGUID(event.target.value)

        }
        
        const handlegroup = (event) =>{
            setgroupName(event.target.value)
        }
        
    // Creating New Group 
        const submit = () =>{
        
        var GUID = guid;
        var groupName = groupname;
        var groupType = CometChat.GROUP_TYPE.PUBLIC;
        var password = "";
        console.log({guid,groupname,password});
        
        var group = new CometChat.Group(GUID, groupName, groupType, password);
        
        CometChat.createGroup(group).then(
            group => {
                console.log("Group created successfully:", group);
            }, error => {
                setError(error.message);
                // console.log("Group creation failed with exception:", error);
            }
            );
        }


    return (
        <div className='background'>
            <div className='groupmodal'>
                <h1>NewGroup</h1>
                <input 
                type='text'
                value={guid}
                onChange={handleguid}
                />
                <input 
                type='text'
                value={groupname}
                onChange={handlegroup}
                />
                <button onClick={submit}>Submit</button>
                {
                    error ? <p>{error}</p> : null
                }
            </div>
        </div>
    )
}

export default NewGroup