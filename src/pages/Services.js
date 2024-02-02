import React from "react";

import "../components/services.css"
import foreground from "../img/opening2.jpg"
import background from "../img/openingPage1.jpg"
import poster from "../img/poster.png"
 
class Services extends React.Component {
  render() {
    return (
        <div>
          <h1 className="banner">Services For Your Inner Being</h1>
      <div class="wrapper">
        <header>
          <img
            class="background"
            id="pic"
            src={background}
            alt="pic"
          />

          <img class="forground" id="pic" src={foreground} alt="pic" />
          <h1 class="title">Services</h1>
        </header>

        <img class="pic1" src={poster} alt="pic" />
        <li class="nav__item  booking">
          <a class="nav__link" href="./appointments.html">
            Book Appointment
          </a>
        </li>
        <section class="section1">
          <h3>One on One Tarot Card Reading.</h3>
          Ask your question and I will Interpret the meaning of the cards. Let
          them guide you to the knowledge you seek.
        </section>
        <img class="pic1" src="./img/poster.png" alt="pic" />
        <li class="nav__item  booking">
          <a class="nav__link" href="./appointments.html">
            Book Appointment
          </a>
        </li>
        <section class="section1">
          <h4>Spiritual Counselling.</h4>
          One on One for an hour to investigate what is happening to your Inner
          Being.
        </section>
      </div></div>
    );
  }
}
export default Services;
