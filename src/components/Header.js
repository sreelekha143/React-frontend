import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'


class Header extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }
    render() {
const LoginRegLink= (
            <ul className="nav navbar-nav ">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
                
            </ul>
   
)
        const userLink = (
            <ul className="nav navbar-nav ">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">User</Link>
                    </li>

                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">logOut</a>
                </li>
            </ul>
      
        )
        return (

            
            <nav className="navbar navbar-expand-lg navbar rounded" >
                {/* <button className="navbar-toggler" type="button"
                 data-toggle="collapse" data-target="#navbar1"
                    aria-controls="navbar1"
                     aria-expanded="false" arial-label="Toggle-navigation">
                    <span className="navbar-toggle-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse " id="navbar1">
               
                    <ul className="nav navbar-nav navbar-right">
                
                        <li className="nav-item">
                   
                    <Link to="/home"className="nav-link"><i className="fa fa-home fa-home"></i>Home</Link>
                         
                        </li>
                        <li className="nav-item">
                   
                   <Link to="/aboutus"className="nav-link">About Us</Link>
                        
                       </li>
                       <li className="nav-item">
                   
                   <Link to="/cart"className="nav-link">Cart</Link>
                        
                       </li>
                    </ul>
                    {localStorage.usertoken ? userLink : LoginRegLink} 
                </div>
            </nav>
   
        )
    }
}
export default withRouter(Header)

