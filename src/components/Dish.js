import React, { Component } from 'react'
  import Card from 'react-bootstrap/Card'
 import Button from 'react-bootstrap/Button'
import './Dish.css';
import axios from 'axios'



class Dish extends Component{
   
    constructor(){
       
        super();

        this.state={
              dishes:[]
        }
        this.addTocart = this.addTocart.bind(this);
        this.childCart=this.childCart.bind(this);
    }
    childCart=(n,c,p,i)=>{
        console.log("child Clicked",n,c,p,i);
        let newObj={
            name:n,
            category:c,
            price:p,
            image:i
        }
        axios.post("http://localhost:5000/cart",newObj).then(res=>{
            console.log("cart response",res);
            alert('item successfully added to cart')
        })
    }
     addTocart=()=>{
console.log('addto cart button clicked')
        //  let newdishesIncart={
        //     name:name,
        //     category:category,
        //     price:price,
        //     image:image
        // }
        // axios.post("http://localhost:5000/cart",newdishesIncart).then((res)=>{
        // console.log('add to cart response',res)   
       // })
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
       return (
   <>
            


               <Card style={{ width: '18rem' }}>
  <Card.Img className="cardImage"variant="top" src={this.props.dish.image}  />
  <Card.Body>
    <Card.Title>{this.props.dish.name}</Card.Title>
    <Card.Text>
    <p>Category: {this.props.dish.category}</p>
               <p>Rating: {this.props.dish.rating}</p>
               <p>Price: Rs. {this.props.dish.price}</p>
    </Card.Text>
 
     {/* <button onClick={this.onSubmit}>Login</button>     */}
     <button type="button" onClick={()=>this.childCart(this.props.dish.name,this.props.dish.category,this.props.dish.price,this.props.dish.image)} class="btn btn-primary">Addtocart</button>
     {/* <i class="fa fa-trash" aria-hidden="true"></i> */}
  </Card.Body>
</Card> 
       
       {/* <div className="container-fluid d-flex justify-content-center">
           <div className="row">{this.state.dish.map((dish,i)=>
               <div className="col-md-4">

              
  <div className="card">
      <div className="overflow">
 
          <div>
            <div className="card-body text-dark">
            <p><img src={dish.image} width="150"height="150"className="card-img-top" /></p>
           
            <p >{dish.name}</p>
            <p >{dish.category}</p>
            <p>{dish.price}</p>
          
            
          {/* <button onClick={()=> this.addToCart(dish.name,dish.category,dish.price)} class="btn btn-primary btn-right">Add to Cart</button> */}
       
        


        </>
       )
    }
}
 export default Dish