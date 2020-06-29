import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import  Header from './components/Header'

import  Login from './components/Login'
import  Register from './components/Register'
import  Profile from './components/Profile'
import Footer from './components/Footer'
import Home from './components/Home'
import AboutUs from './components/Aboutus'
import Location from './components/Location'
import Dishes from './components/Dishes'
import Cart from './components/Cart'
import history from './components/history'

function App() {
  return (
    <Router history={history}>
     <div className="App">
       <Header/>
       {/* <Route exact path="/" component={Landing}/> */}
       <div  className="container">
       <Route exact path="/" component={Register}/>
       <Route exact path="/login" component={Login}/>
       <Route exact path="/profile" component={Profile}/>

       <Route exact path="/home" component={Home}/>
       <Route exact path="/aboutus" component={AboutUs}/>
       <Route exact path="/location/:id" component={Location}/>
       <Route exact path="/location/:id/:region" component={Dishes}/>
       <Route exact path="/cart" component={Cart}/>
       </div>
     </div> 
     <Footer />

   </Router>
  

  );
}

export default App;
