import React,{useEffect,useState} from 'react'
import { CometChat } from '@cometchat-pro/chat';
import Call from './calling'

const Calling = () => {
    const [call,setCall] = useState({})
    const initiatecalling = () => {
        var receiverID = "superhero2";
        var callType = CometChat.CALL_TYPE.AUDIO;
        var receiverType = CometChat.RECEIVER_TYPE.USER;

        var call = new CometChat.Call(receiverID, callType, receiverType);

        CometChat.initiateCall(call).then(
        outGoingCall => {
            console.log("Call initiated successfully:", outGoingCall);
        }, error => {
            console.log("Call initialization failed with exception:", error);
        }
        );
    }
    useEffect(()=>{
    var listnerID = "1234";
    CometChat.addCallListener(
    listnerID,
    new CometChat.CallListener({
        onIncomingCallReceived: (call) => {
            setCall(call);
        console.log("Incoming call:", call);
        },
        onOutgoingCallAccepted: (call) => {

            setCall(call);
            Call(call,CometChat);

        console.log("Outgoing call accepted:", call);
        },
        onOutgoingCallRejected: (call) => {
            setCall(call);
            
        },
        onIncomingCallCancelled: (call) => {
            setCall(call);

        console.log("Incoming call cancelled:", call);
        }
    })
    );
    },[])

    const acceptCall = (call) =>{
        var sessionID = call.sessionId;
        console.log(call,call.sessionId);

        CometChat.acceptCall(sessionID).then(
        call => {
            console.log(call);
            console.log("Call accepted successfully:", call);
            Call(call,CometChat);
        }, error => {
            console.log("Call acceptance failed with error", error);
        }
        );
    }

    const startcall = () =>{
       initiatecalling();
    }

    return (
        <div>
            <button onClick={startcall}>Start Call</button>
            {
                CometChat.call ? <button onClick={()=>{acceptCall(call)}}>Accept Call</button> : null
            }
            <div id="callScreen">

            </div>
        </div>
    )
}

export default Calling;