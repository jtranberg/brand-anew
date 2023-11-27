import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
// button.addEventListener("click", () => {
//   const currentState = button.getAttribute("data-state");

//   if (!currentState || currentState === "closed") {
//     button.setAttribute("data-state", "opened");
//     button.setAttribute("aria-expanded", "true");
//   } else {
//     button.setAttribute("data-state", "closed");
//     button.setAttribute("aria-expanded", "false");
//     }
//   });
// });

// const navToggle = document.querySelector('.nav__toggle');

// navToggle.addEventListener('click', () => {
// document.body.classList.toggle('nav-open');
// });
// image_array = [
//   "1.jpg",
//   "2.jpg",
//   "3.jpg",
//   "4.jpg",
//   "5.jpg",
//   "6.jpg",
//   "7.jpg",
//   "8.jpg",
//   "9.jpg",
//   "10.jpg",
//   "11.jpg",
//   "12.jpg",
//   "13.jpg",
//   "14.jpg",
//   "15.jpg",
//   "16.jpg",
//   "17.jpg",
//   "18.jpg",
//   "19.jpg",
//   "20.jpg",
//   "21.jpg",
//   "22.jpg",
//   "23.jpg",
//   "24.jpg",
//   "25.jpg",
//   "26.jpg",
//   "27.jpg",
//   "28.jpg",
//   "29.jpg",
//   "30.jpg",
//   "31.jpg",
//   "32.jpg",
//   "33.jpg",
//   "34.jpg",
//   "35.jpg",
//   "36.jpg",
//   "37.jpg",
//   "38.jpg",
//   "39.jpg",
//   "40.jpg",
//   "41.jpg",
//   "42.jpg",
//   "43.jpg",
//   "44.jpg",
//   "45.jpg",
//   "46.jpg",
//   "47.jpg",
//   "48.jpg",
//   "49.jpg",
//   "50.jpg",
//   "51.jpg",
//   "52.jpg",
//   "53.jpg",
//   "54.jpg",
//   "55.jpg",
//   "56.jpg",
//   "57.jpg",
//   "58.jpg",
//   "59.jpg",
//   "60.jpg",
//   "61.jpg",
//   "62.jpg",
//   "63.jpg",
//   "64.jpg",
//   "65.jpg",
//   "66.jpg",
//   "67.jpg",
//   "68.jpg",
//   "69.jpg",
//   "70.jpg",
//   "71.jpg",
//   "72.jpg",
//   "73.jpg",
//   "74.jpg",
//   "75.jpg",
//   "76.jpg",
//   "77.jpg",
//   "78.jpg"
//   ]

// function get_random_image() {
//   random_index = Math.floor(Math.random() * image_array.length );
//   selected_image = image_array[random_index]

//   document.getElementById('image_shower').src = `./randomImages/${selected_image}`
 
// }


