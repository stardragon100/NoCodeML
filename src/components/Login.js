import React, { Component } from 'react';
//import { Alert } from '@mui/material';
import axios from 'axios'
//import Popup from 'reactjs-popup';
import { Link } from "react-router-dom";
import './style2.css' 

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            access: false
        }
    }

changePassword = (e)=> {
    this.setState({
        password: e.target.value
    }); //semicolon reqd
}

changeEmail = (e)=> {
    this.setState({
        email: e.target.value
    }); 
}

 submitForm = (e)=> {
    e.preventDefault();
    console.log("hello")
    axios.defaults.withCredentials = true //since no ssl..
    const response= axios.post('http://localhost:8080/login', {
        data : {
            email:this.state.email,
            //password:this.state.password,
        }})
        .then((response) => {
            console.log(response.data.password);
            if(response.data.password.S===this.state.password)
            {
                console.log("valid credentials")
                this.setState({
                    access: true
                }); 
                window.open("/main_area",'_self');
            
            }
            else
            {
                console.log("invalid credentials")
                this.setState({
                    access: false
                });
                // <div>
                //     <Alert severity="error">This is an error alert — check it out!</Alert>
                // </div>
            }  
          })
        console.log(response);
           
         
          
    
 }
render(){
    return(
            // <div className='form'>
            // <form className='flex flex-col w-80' >
            // <label className='background-color-blue p-2 text-sm '>Email: </label>
            // <input className='' type="text" placeholder="Email" onChange={this.changeEmail}></input>
            
            // <label className='background-color-blue p-2 text-sm'>Password: </label>
            // <input className=''  type="Text" placeholder="Password" onChange={this.changePassword}></input>
            
            // <button className='background-color-blue p-2 rounded-lg text-sm' onClick={(e)=>{this.submitForm(e)}}>Login</button> 
            // <br/>
            // <label className='text-white text-center p-2 text-sm '>Don't have an account? </label>
            // {/* <button className='background-color-blue p-2 text-sm rounded-lg' onClick={this.signUp}>Sign-Up</button>  */}
            // <Link to="/signup" className='background-color-blue p-2 rounded-lg text-sm text-center'>Sign Up</Link>
            // </form>
            // </div>  
            //////
            <div class="form">
             <h2>Login</h2>
                 <div class="input">
                     <div class="inputBox">
                     <label>Email</label>
                     <input type="text" placeholder="Email" onChange={this.changeEmail}/>
                     </div>
                 <div class="inputBox">
                      <label>Password</label>
                      <input type="password" placeholder="· · · · · ·" onChange={this.changePassword}/>
                 </div>
                 <div class="inputBox">
                      <input type="submit" value="Sign in" onClick={(e)=>{this.submitForm(e)}}/>
                 </div>
            </div>
             <p class="forget">Don't have an account? </p>
             <Link to="/signup" className='input'>Sign Up</Link>
            </div>
    );
}
}
export default Login;
