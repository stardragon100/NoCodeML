import React, { Component } from 'react';
import axios from 'axios'
//import './css/style.css'
// import '../App.css'
import './style2.css' 
import { Link } from "react-router-dom";
class Signup extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            phone: "",
            email: "",
            password: "",
        }
    }

changeName = (e)=> {
    this.setState({
        name: e.target.value
    }); //semicolon reqd
}
changePhone = (e)=> {
    this.setState({
        phone: e.target.value
    });
}
changeEmail = (e)=> {
    this.setState({
        email: e.target.value
    }); 
}
changePassword = (e)=> {
    this.setState({
        password: e.target.value
    });
}
 signUp = ()=> {
    axios.defaults.withCredentials = true //since no ssl..
    axios.post('http://localhost:8080/signup', {
        data : {
            name:this.state.name,
            phone:this.state.phone,
            email:this.state.email,
            password:this.state.password,
        }
     });
     window.open("/login");

 }

render(){
    return(
        <div>
             <Link to="/" className='background-color-red p-1 rounded-lg'>Back</Link> 
            {/* <form className='form'>
               <label className='background-color-blue p-2 text-sm '>Name: </label>
               <input className='input' type="Text" placeholder="Full Name" onChange={this.changeName}></input>
                <br/>
                <label className='background-color-blue p-2 text-sm '>Email: </label>
                <input className='input' type="text" placeholder="Email" onChange={this.changeEmail}></input>
                <br/>
                <label className='background-color-blue p-2 text-sm '>Password: </label>
                <input className='input' type="text" placeholder="Password" onChange={this.changePassword}></input>
                <br/>
                <label className='background-color-blue p-2 text-sm '>Phone number: </label>
                <input className='input'type="number" placeholder="Phone no." onChange={this.changePhone}></input>
                <br/>
                <button className='background-color-blue p-2 rounded-lg text-sm' onClick={this.signUp}>SIGN UP</button> 
            </form> */}
            
             <div class="form">
             <h2>Sign-up</h2>
                 <div class="input">
                     <div class="inputBox">
                     <label>Name</label>
                     <input type="text" placeholder="Name" onChange={this.changeName}/>
                     </div>
                 <div class="inputBox">
                      <label>Email</label>
                      <input type="text" placeholder="email" onChange={this.changeEmail}/>
                 </div>
                 <div class="inputBox">
                      <label>Phone Number</label>
                      <input type="text" placeholder="Phone Number" onChange={this.changePhone}/>
                 </div>
                 <div class="inputBox">
                      <label>Password</label>
                      <input type="password" placeholder="Password" onChange={this.changePassword}/>
                 </div>
                 <div class="inputBox">
                      <input type="submit" value="Sign up" onClick={this.signUp}/>
                 </div>
                
                <p class="forget">Already have an account? </p>
                <Link to="/login" className='background-color-red p-2 rounded-lg text-sm text-center'>Login</Link>
                
            </div>
            </div>
        </div>  
        
    )
}
}
export default Signup;
