import React from "react";

import "../components/cardOfTheDay.css";
import default2 from "../randomImages/default2.jpg";
// import poster from "../img/poster.png"

class CardoftheDay extends React.Component {

  

  render() {

    

    return (
      <div>
        <h1 class="banner">Choose A Card For Your Inner Being's Day!</h1>
        <div id="container">
          <div id="inner_container">
            <img
              id="image_shower"
              src={default2}
              alt="cards"
            />
          </div>
          <div>
            <button id="btn" onClick="get_selected_image()">
              Your Card Of The Day
            </button>
          </div>
          <div class="statement">
            <h1>Only The First Card Counts.</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default CardoftheDay;
