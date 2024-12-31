import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UploadImage from "./components/upload_image/UploadImage"
import AccountSettings from "./components/accountSettings/AccountSettings"
import UploadProduct from "./components/Train/UploadProduct"
import ImageEditor from "./components/Canvas/ImageEditor"
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <UploadImage/>
  // <AccountSettings/> 
  // <ImageEditor/>
  <BrowserRouter>
  <UploadProduct/> 
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

