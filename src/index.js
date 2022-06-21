import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
   
function greeting(name){
  const date = new Date()
  const hours= date.getHours()
  let timeOfDay
  if(hours >=4 && hours <12){
    timeOfDay = "Morning"}
    if(hours >=12 && hours < 17){
      timeOfDay ="Afternoon"
    
    }
  if (hours >=17 && hours <20){
    timeOfDay ="evening"
  }
  else{
    timeOfDay ="night"
  }
  return  `Good ${timeOfDay}, ${name}!` 
}
console.log(greeting("Zahra"))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
