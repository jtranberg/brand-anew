import React from "react";

import Poster from "../img/poster.png";
class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1 className="banner">Contact to aid your Inner Being</h1>
        <div class="contact">
      <h1 className="title">We Love Hearing from You.</h1>
    </div>
    <img class="pic1" src={Poster}  alt="pic"/>

    <div>
      <a  href="mailto: loladusk@hotmail.com" id="contactlink"
        >loladusk@hotmail.com</a></div>
      </div>
    )
  }
}
  export default Contact;