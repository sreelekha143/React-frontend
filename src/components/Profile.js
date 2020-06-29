import React,{Component} from 'react'
import jwt_decode  from 'jwt-decode'
import '../App.css'
import Card from 'react-bootstrap/Card'
class Profile  extends  Component{
    constructor(){
        super()
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            password:''
        }
    }
    componentDidMount(){
        const token=localStorage.usertoken
        const decoded=jwt_decode(token)
        console.log(decoded)
        this.setState({
            first_name:decoded.first_name,
            last_name:decoded.last_name,
            email:decoded.email,
            
        })
    }
    render(){
        return(
            <>
     <div class="bgimage">
     <div className="container" >
<Card style={{ width: '25rem', height:"20%",marginLeft:"30%"}}>
  <Card.Img variant="top" src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" />
  <Card.Body>
    <Card.Title>User Profile</Card.Title>
    <table className="table col-md-6 mx-auto">
        <tbody>
            <tr>
                <td>FirstName</td>
                
                <td>{this.state.first_name}</td>
            </tr>
            <tr>
                <td>LastName</td>
                
                <td>{this.state.last_name}</td>
            </tr>
            <tr>
                <td>Email</td>
                
                <td>{this.state.email}</td>
            </tr>
        </tbody>
    </table>
  </Card.Body>
  
 
</Card>
</div>
     </div>
            

</>
        )
        
    }
}


export default Profile


