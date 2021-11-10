let call = (call,CometChat) => {
var sessionId = call.sessionId;
console.log(call.sessionId);
var callType = call.type;
var callSettings = new CometChat.CallSettingsBuilder()
									.setSessionID(sessionId)
									.enableDefaultLayout(true)
									.setIsAudioOnlyCall(callType === 'audio' ? true : false)
									.build();
console.log(callSettings);
CometChat.startCall(
  callSettings,
  
  document.getElementById("callScreen"),
  new CometChat.OngoingCallListener({
    onUserJoined: user => {
      console.log("User joined call:", user);
    },
    onUserLeft: user => {
      console.log("User left call:", user);
    },
    onUserListUpdated: userList => {
			console.log("user list:", userList);
    },
    onCallEnded: call => {
      console.log("Call ended:", call);
    },
    onError: error => {
      console.log("Error :", error);
    },
    onMediaDeviceListUpdated: deviceList => {
      console.log("Device List:", deviceList);
    },
    onUserMuted: (userMuted, userMutedBy) => {
      // This event will work in JS SDK v3.0.2-beta1 & later.
      console.log("Listener => onUserMuted:", userMuted, userMutedBy);
    },
    onScreenShareStarted: () => {
      // This event will work in JS SDK v3.0.3 & later.
      console.log("Screen sharing started.");
    },
    onScreenShareStopped: () => {
      // This event will work in JS SDK v3.0.3 & later.
      console.log("Screen sharing stopped.");
    }
  })
);}

export default call;