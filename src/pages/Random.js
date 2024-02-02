import React, { useState } from "react";

import "../components/randomcard.css";

export function FetchAPI() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("/randomimages.json")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        let random = Math.floor(Math.random() * json.length);
        setData(json[random]);
      });




  };
  return (
    <div>
      <h1 className="banner">Insight InTo Your Inner Being</h1>

      <div id="container" className="container">
        <div className="inner" key={data.id}>
          <img className="card" id="image_shower" src={data.card} alt="cards" />
          
        </div> 
        <div className="name">{data.name}</div>
          <div className="info">{data.info}</div> 
          <button  className="btn" onClick={apiGet}>
            Card of The Day
          </button>
          <h1 className="statement">Only The First Card Counts.</h1>
        
      </div>
    </div>
  );
}
