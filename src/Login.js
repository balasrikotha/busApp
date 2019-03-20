import React,{Component} from "react";
import Button from "./Button";
import InputField from "./InputField";
import './Forms.css';
import * as firebase from 'firebase';
import ReactDOM from 'react-dom';
import SignUp from './SignUp'
import {withRouter} from 'react-router-dom';
import  MuiThemeProvider  from "material-ui/styles/MuiThemeProvider";
//import  AppBar  from "material-ui/AppBar";
import  TextField  from "material-ui/TextField";
//import  RaisedButton  from "material-ui/RaisedButton"






class LogIn extends Component {

    constructor(){
        super();
        this.auth = firebase.auth();
        
    }

    signInUser = () => {
        const userName = document.querySelector("#Input-UserName").value;
        const password = document.querySelector("#Input-Password").value;
        const promise = this.auth.signInWithEmailAndPassword(userName,password);
        promise
        .then(user => {
            
            console.log(user);
            this.props.history.push("./routes");
        }
        )
        .catch(err =>{ 
            console.log("Error in Login : ",err);
            const alert = (
                <div className="alert alert-danger" role="alert">
                Invalid User Details
              </div>
            )
            ReactDOM.render(alert,document.getElementById("show-error"))
            setTimeout(()=> {
                var item = document.getElementById("show-error");
                item.parentNode.removeChild(item);
            },1000)
        }) 
    }

    signUpUser = (e) => {
        ReactDOM.render(<SignUp />,document.getElementById('root'))
     }

   

    render(){
         
        return (
            <MuiThemeProvider>
           <React.Fragment>
                <nav className="navbar bg-primary justify-content-between">
                    <img className="navbar-nav" src={require("./logo.png")}/>
                </nav>
               
            <div className = "d-flex justify-content-center align-items-center container" id = "form container">
                
                <div className = "md-6 col-sm-12 text-col-center">
                <form >
                <center>
                    <h1>Login</h1>
                    
                    <div id = "show-error"></div>
                    <div>
                    <i class="fas fa-envelope"></i>
                    <TextField
                    hintText ="Enter Your Email-id"
                    floatingLabelText = "Email-id"
                    id = "Input-UserName"
                    />
                    <br />
                    <TextField type = "password"
                    hintText ="Enter Your Password"
                    floatingLabelText = "Password"
                    id = "Input-Password"
                    />
                    <br/>
                    
                    </div>
                    
                    <Button clickFunction = {this.signInUser} name="LOG IN" ClassName = "btn btn-success m3"/>
                    <Button clickFunction = {this.signUpUser} name="SIGN UP" ClassName = "btn btn-info m3"/>
                </center>
                  </form>
                  </div>
                  
                
            </div>
            </React.Fragment>
            </MuiThemeProvider>
        );

    }

}
export default LogIn;