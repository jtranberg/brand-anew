import React from "react";
import "../components/socials.css"
import  "../components/products.css"


class Socials extends React.Component {
  render() {
    return (
        <div>

        <h1 class="banner">Recommended Products For Your Inner Being</h1>

    <div class="thumbnails">
            <div class="card">Somavedic:Frequency generator
            <a  href="/somavedic">
                <img class="thumb1" id="pic" src="https://somavedic.ca/cdn/shop/products/Sky_540x_5ed71b18-9d1b-49f3-80ef-5516ab2f72e9_400x.jpg?v=1624104654"  alt="Somavedic" /></a>
           </div> 
           <div class="card" >Crystals CLeansing and Regenerating
            <a  href="/crystals">
                <img   class="thumb1" id="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-ZS35-j1ASubzUFCsCuFKZBjBaQ6ZhLlB8XIXR3iNf8UTfkZ1nsKKzfexWg7wFbZFxg&usqp=CAU" alt="Crystals" /></a>
           </div>
           <div class="card">Candles:Magical or Scented
            <a  href="/candles">
                <img   class="thumb1" id="pic" src="https://m.media-amazon.com/images/I/71+6fqol6OL._AC_UL320_.jpg" alt="Candles" /></a>
           </div>
           <div class="card">Suppliments:For A Better Inner Being
            <a  href="/supplements"
            ><img   class="thumb1" id="pic" src="https://m.media-amazon.com/images/I/51YSRYZ66sL._AC_UL320_.jpg" alt="Supplements" /></a>
           </div>
           <div class="card">EMF:
           For A Better Inner Being
            <a  href="/emf">
                <img   class="thumb1" id="pic" src="https://m.media-amazon.com/images/I/617uNoQtDwL._AC_UY218_.jpg" alt="EMF" /></a>
           </div>
    </div>
<section class="paragraph">
    
        "These products are wht we recomend"
    </section>
        </div>
    )
  }
}
  export default Socials;