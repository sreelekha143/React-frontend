import React, { Component } from 'react'
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                    <img className="img1" src="https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png" />
                    <h2 className="swiggy">SWIGGY APP</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <div className="col-6">
                        <h1>Restaurants in Your Pocket</h1>
                        <p className="paragraph">Order from your favourite Restaurant & track on the go, with the all-new swiggy app
               </p>
               <img className="img2" src="https://png4u.com/wp-content/uploads/2020/01/Google-Play-Badge-1024x660.png" />
                        </div>
                        <div className="col-6">

                        <img className="img" src="https://www.uberdoo.com/img/header_mobile_img.png" />
                       
                        </div>
                        </div>
                    </div>


                </div>

                <div className="black">           
<div className="row">
    
        <div  id="comp"className="col-3">COMPANY
        
        <ul id="company">
  <li><a href="#">About us</a></li>
  <li><a href="#">Team</a></li>

  <li><a href="#">Careers</a></li>
  <li><a href="#">Swiggy blog</a></li>

  <li><a href="#">Bug Bounty</a></li>
  <li><a href="#">Swiggy pop</a></li>
  <li><a href="#">Swiggy suoer</a></li>
</ul>
        </div>
        
        <div id="cont"className="col-3">CONTACT
        <ul id="contact">
  <li><a href="#">Help&Support</a></li>
  <li><a href="#">partner us</a></li>

  <li><a href="#">Ride with us</a></li>
  
</ul>
        </div>

        <div id="leg"className="col-3">LEGAL
        <ul id="legal">
  <li><a href="#">Terms&conditions</a></li>
  <li><a href="#">privacy policy</a></li>
  <li><a href="#">offerterms</a></li>
  <li><a href="#">cookie policy</a></li>
  
</ul>
        </div>
        
      
    </div>
    <hr/>


    <div class="row">
    <div  id="wed"className="col-3">WE DELIVER
        
        <ul id="deliver">
  <li><Link to="/location/hyd">Hyderabad</Link></li>
  <li><a href="#">Mumbai</a></li>

  <li><a href="#">Chennai</a></li>
  <li><a href="#">Bangloore</a></li>

  <li><a href="#">Orissa</a></li>
  
</ul>
        </div>
      
    </div>

 
</div>

            </>

        )
    }
}
export default Home