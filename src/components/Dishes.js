import React, { Component } from 'react'
 import { dishes } from './UserFunction'

import Dish from './Dish'

class Dishes extends Component{
    constructor(){
        super();
        this.state = {
             dish: []
          }
          this.parentCart=this.parentCart.bind(this)
        }
    parentCart=()=>{
        console.log("parent Clicked");
        }

    componentDidMount(){

    dishes().then(res => {
        console.log(res)
        if (res) {
            const dish = res;
        this.setState({ dish });
      
        }
       console.log(this.state)
    })
}
    render(){
        const { dish} = this.state
       return (
   <>
              <div className="blue">
                   <div className="row">
           <h3>All restuarnts delivering to Kompally, Hyderabad </h3>
 </div>
               </div>






        <div className="row">
        { dish.map(dish => <div className="col-4" key={dish._id}><Dish dish={dish} parentCart={this.parentCart}></Dish></div>)}
      </div>
        </>
       )
    }
}
 export default Dishes