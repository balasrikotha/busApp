import React, {Component} from 'react';
import Button from "./Button";
import {NavLink} from 'react-router-dom'

class NavBar extends Component{

    constructor(){
        super();
        //this.routes = this.props.routes;
        //console.log("busses",this.props.routes);
    }

    render(){
        return(

                <div>

                        <ul className = "nav justify-content-end bg-primary">
                            <li className = "nav-item nav-link mr-3">{
                            this.props.login ? (
                                <NavLink to ="/routes"><Button name = "Routes List" ClassName = "pull-right btn btn-block btn-warning"/></NavLink>
                                 ) : (
                                 <NavLink to ="/signup"><Button name = "Sign Up" ClassName = "pull-right btn btn-block btn-success"/></NavLink>
                             )
                            }
                            </li>
                            
                        </ul>             
                
                    
                </div> 
        )
    }
}

export default NavBar;


