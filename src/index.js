import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CometChat } from "@cometchat-pro/chat";
import {BrowserRouter} from 'react-router-dom';

let appID = process.env.REACT_APP_COMETCHAT_APP_ID;
let region = process.env.REACT_APP_COMETCHAT_REGION;
let appSetting = new CometChat.AppSettingsBuilder()
                    .subscribePresenceForAllUsers()
                    .setRegion(region)
                    .build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
    ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'));
  }, error => {
    console.log("Initialization failed with error:", error);
  }
);

reportWebVitals();