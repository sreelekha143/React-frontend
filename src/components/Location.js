import React, { Component } from 'react'
import './Location.css';
import { Link } from 'react-router-dom';

class Location extends Component{
    render(){
       return (
           
           <div>
               <div className="blue">
                   <div className="row">
           <h3>Great restaurants in Hyderabad, delivering to you</h3>
      <div className="search-box">
          <input class="search-text" type="text" name="" placeholder="Type to search"></input>
          <a class="search" href="#">
<i class="fa fa-search" aria-hidden="true"></i>
          </a>
      </div>

       




                   </div>
               </div>
               <div className="row">
                   <h6>About the Food culture in Hyderabad </h6>
                   <p>Traditional Hyderabadi Dum Biryani is the most celebrated dish from Hyderabad and is served at restaurants in the entire country. It is made primarily of goat meat and rice and carries a distinct aroma. Nicely garnished with pudina, 
                       fried onion and boiled eggs, it is served with Dahi-ki-chutney and Mirchi-ka-salan.</p>
               </div>
               <div className="row">
                   <h5>Our Pics for you</h5>
         <div className="row">
         <div className="col-4">
         <img src="https://i.ndtvimg.com/i/2015-02/pizza_625x350_71424682210.jpg" alt="Snow" ></img>
         </div>
         <div className="col-4">
         <img src="https://www.awesomecuisine.com/wp-content/uploads/2007/10/Chicken-Biryani_resized.jpg" alt="Snow" ></img>
         </div>
         <div className="col-4">
         <img src="https://i.ytimg.com/vi/aHofQQkHr60/maxresdefault.jpg" alt="Snow" ></img>
         </div>
         <div className="col-4">
         <img src="https://zaykarecipes.com/wp-content/uploads/2016/11/Crispy-Restaurant-Style-Gobi-Manchuria.jpg" alt="Snow" ></img>
         </div>
         <div className="col-4">
         <img src="https://www.crunchykitchen.com/wp-content/uploads/2019/06/Rohu-Fish-Deep-Oil-Fry-111.jpg" alt="Snow" ></img>
         </div>
         <div className="col-4">
         <img src="https://i.ytimg.com/vi/HI2-u2zu8Ss/maxresdefault.jpg" alt="Snow" ></img>
        
         </div>
         </div>          
</div>

          <div className="row">
        <h6>Where we might find you</h6>
              </div>         
              
              <div className="row">
              <div className="col-3">
    <ul >
  <li><Link className="region" to="/location/hyd/Kompally">Kompally</Link></li>
  <li><Link className="region" href="#">Secundrabad</Link></li>

  <li><Link className="region" href="#">Kothapeta</Link></li>
  <li><Link className="region" href="#">Miyapur</Link></li>

  <li><Link className="region" href="#">Begumpet</Link></li>
  <li><Link className="region" href="#">Kachiguda</Link></li>
  <li><Link  className="region" href="#">Ameerpet</Link></li>
</ul>
    </div>   
        
    <div className="col-3">
    <ul >
  <li><Link className="region" href="#">Himathnagar</Link></li>
  <li><Link className="region" href="#">Dilshuknagar</Link></li>

  <li><Link className="region" href="#">Chikadpally</Link></li>
  <li><Link className="region" href="#">Srikakulum</Link></li>

  <li><Link className="region" href="#">Nizambad</Link></li>
  <li><Link className="region" href="#">Warangal</Link></li>
  <li><Link  className="region" href="#">Hanmakonda</Link></li>
</ul>
    </div>   

    <div className="col-3">
    <ul >
  <li><Link className="region" href="#">RangaReddy</Link></li>
  <li><Link className="region" href="#">Bangloore</Link></li>

  <li><Link className="region" href="#">Chennai</Link></li>
  <li><Link className="region" href="#">Orissa</Link></li>

  <li><Link className="region" href="#">Koti</Link></li>
  <li><Link className="region" href="#">Ligampally</Link></li>
  <li><Link className="region" href="#">Kukatpally</Link></li>
</ul>
    </div>   
        
      
    </div>
               </div>
       )
    }
}
export default Location