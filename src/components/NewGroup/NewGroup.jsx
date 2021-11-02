import React,{useState} from 'react'
import './NewGroup.scss'
import {CometChat} from '@cometchat-pro/chat'

const NewGroup = () => {
        const [guid,setGUID] = useState("");
        const [groupname,setgroupName] = useState("");

        const handleguid = (event) =>{
            setGUID(event.target.value)
            console.log(guid);
        }
        const handlegroup = (event) =>{
            setgroupName(event.target.value)
        }
    const submit = (guid,groupname) =>{

        var GUID = guid;
        var groupName = groupname;
        var groupType = CometChat.GROUP_TYPE.PUBLIC;
        var password = "";
        
        var group = new CometChat.Group(GUID, groupName, groupType, password);
        
        CometChat.createGroup(group).then(
            group => {
                console.log("Group created successfully:", group);
            }, error => {
                console.log("Group creation failed with exception:", error);
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
            </div>
        </div>
    )
}

export default NewGroup
