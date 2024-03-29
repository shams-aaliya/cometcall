import React,{useState} from 'react'
import './CometCallUI.scss'
import {CometChat} from '@cometchat-pro/chat'
import NewGroup from '../NewGroup/NewGroup'
import {Link} from 'react-router-dom'

const CometCallUI = () => {
    const [group,setGrouplist] = useState([]);
    const [userList,setUserList] = useState([]);
    const [show,setShow] = useState(false);

    const newgroup = () =>{
        setShow(true);
    }
    
    const grouplist = () =>{
        let limit = 30;
        let groupsRequest = new CometChat.GroupsRequestBuilder()
                    	.setLimit(limit)
                    	.build();

        groupsRequest.fetchNext().then(
        groupList => {
            setGrouplist(groupList);
            console.log("Groups list fetched successfully", groupList);
        }, error => {
            console.log("Groups list fetching failed with error", error);
        }
        );
    }
    const userlist = () =>{
        let limit = 30;
        let usersRequest = new CometChat.UsersRequestBuilder()
                    .setLimit(limit)
                    .build();

        usersRequest.fetchNext().then(
        userlist => {
            setUserList(userlist);
        }, error => {
            console.log("Groups list fetching failed with error", error);
        }
        );
    }
    const startcall = () =>{
        console.log('Call Started');
    }
    const endcall = () =>{
        console.log('Call Ended');
    }

    return (
        <div className="CometCall">
            <div className="sidebar">
            <button onClick={newgroup}>New Group</button>
            <button onClick={grouplist}>Group List</button>
            <button onClick={userlist}>User List</button>
            <div className="displayarea">
                <ul>
                {   
                   userList.map((object,index)=>{
                       return (
                        
                       <li key={index}><Link to='cometcallui/call' >{object.name}</Link></li>)
                  
                   })
                }
                </ul>
            </div>
            </div>
            <div className="messagebox">
                <div className="messagearea" id="MessageArea">

                </div>
                <div className="buttons">
                <button onClick={startcall}>Start Call</button>
                <button onClick={endcall}>End Call</button>
                </div>
            </div>
            {
                show ? <NewGroup /> : null
            }
        </div>
    )
}

export default CometCallUI