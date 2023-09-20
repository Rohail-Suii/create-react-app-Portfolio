import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import favicon from './assets/images/profile_img1.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));
const link = document.querySelector("link[rel~='icon']");
if (!link) {
  const newLink = document.createElement('link');
  newLink.rel = 'icon';
  newLink.href = favicon;
  document.head.appendChild(newLink);
} else {
  link.href = favicon;
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
