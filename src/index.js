import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AccountSettings from "./components/UserDetail/AccountSettings"
import UploadProduct from "./components/Train/UploadProduct"
import ImageEditor from "./components/Canvas/ImageEditor"
import CreateModel from "./components/createModel/CreateModel"


import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <AccountSettings/> 
  // <ImageEditor/>
  // <UploadProduct/> 

  
  <BrowserRouter>
  <CreateModel/>
  
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

