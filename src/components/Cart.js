import React,{Component} from 'react'
import axios from 'axios'
class Cart extends Component {
    serviceUrl="http://localhost:5000/cart/"
    constructor(){
        super();
        this.state={
            dishes:[]
        }

    }
    deleteFromCart(dish){
        axios.delete(this.serviceUrl+dish._id).then((res)=>{

       
        let newDishes=[...this.state.dishes];
        let indexPosition=newDishes.indexOf(dish);
        newDishes.splice(indexPosition,1);
        this.setState({
            dishes:newDishes
        })
    })
    }
    componentDidMount(){
        axios.get(this.serviceUrl).then((res)=>{
            console.log(res.data);
            this.setState({
                dishes:res.data
            })
        })
    }
render(){
    return(
        <div className="container-fluid d-flex justify-content">
        <div className="row">{this.state.dishes.map((dish,i)=>
            <div className="col-md-4">

           
<div className="card">
   

       
         <div className="card-body text-dark">
         <div className="overflow">
         <img src={dish.image} width="150"height="150"className="card-img-top" />
         </div>
     
         <h4 className="card-title" >{dish.name}</h4>
         <p >{dish.category}</p>
         <p>{dish.price}</p>
        
         
       <button onClick={()=> this.deleteFromCart(dish)} class="btn btn-outline-danger btn-right">Delete</button>
       </div>
                
       </div>

      
        </div> 
        
      )}
       </div>
     
        </div>
       
    )
}
}

export default Cart