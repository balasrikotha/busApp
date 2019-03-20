import React, {Component} from 'react';
import Button from './Button';
import ReactDOM from 'react-dom';
import LogIn from "./Login";
import * as firebase from 'firebase';





class RouterList extends Component{

    constructor(){
        super();
        

        // var config = {
        //     apiKey: process.env.REACT_APP_apiKey,
        //     authDomain: process.env.REACT_APP_authDomain,
        //     databaseURL: process.env.REACT_APP_databaseURL,
        //     projectId: process.env.REACT_APP_projectId,
        //     storageBucket: process.env.REACT_APP_storageBucket,
        //     messagingSenderId: process.env.REACT_APP_messagingSenderId
        //   };
        //   firebase.initializeApp(config);
      
      

        const  dbref = firebase.database().ref().child('Busses');
        dbref.on('value', snap => {
            let shuttles = snap.val();
            this.setState(shuttles);
            console.log("State",this.state);
          console.log("Busses",snap.val());
        });

        console.log("In constructor ",this.state);

    }




    state = {
        // Bus1 : {
        //     "Bus1Stop1":1,
        //     "Bus1Stop2":1,
        //     "Bus1Stop3":0,
        //     "Bus1Stop4":0,
        // },
        // Bus2 : {
        //     "Bus2Stop1":0,
        //     "Bus2Stop2":0,
        //     "Bus2Stop3":0,
        //     "Bus2Stop4":0,
        // },
        // Bus3 : {
        //     "Bus3Stop1":1,
        //     "Bus3Stop2":0,
        //     "Bus3Stop3":0,
        //     "Bus3Stop4":1,
        // },
        // Bus4 : {
        //     "Bus1Stop1":0,
        //     "Bus1Stop2":0,
        //     "Bus1Stop3":0,
        //     "Bus1Stop4":0,
        // },
        // Bus5 : {
        //     "Bus2Stop1":0,
        //     "Bus2Stop2":0,
        //     "Bus2Stop3":0,
        //     "Bus2Stop4":0,
        // },
        // Bus6 : {
        //     "Bus3Stop1":0,
        //     "Bus3Stop2":0,
        //     "Bus3Stop3":0,
        //     "Bus3Stop4":0,
        // },
        // Bus7 : {
        //     "Bus1Stop1":0,
        //     "Bus1Stop2":0,
        //     "Bus1Stop3":0,
        //     "Bus1Stop4":0,
        // },
        // Bus8 : {
        //     "Bus2Stop1":0,
        //     "Bus2Stop2":0,
        //     "Bus2Stop3":0,
        //     "Bus2Stop4":0,
        // },
        // Bus9 : {
        //     "Bus3Stop1":0,
        //     "Bus3Stop2":0,
        //     "Bus3Stop3":0,
        //     "Bus3Stop4":0,
        // }
    }


    LogOutUser = (e) => {
        firebase.auth().signOut().then(() => {
            this.props.history.push('./')
            ReactDOM.render(<LogIn />, document.getElementById('root'))
            

          }).catch(function(error) {
            // An error happened.
            console.log(error);
            console.log("cant logout");
          });
        e.preventDefault();
     }



    componentDidUpdate = () =>{
        console.log("In function state",this.state);
        this.routesList = Object.keys(this.state).map( route =>{
            console.log(route);
            return(
                <div className = "list-item-route ">


                        <p>

                        <li className="list-group-item d-flex justify-content-between align-items-center route-list-item m-1" key = {Object.toString(Math.random)}>
                    <i className="fa-2x fas fa-bus-alt"></i>
                        <b>{route}</b>
                       
                       
                        
                            <span onClick = {()=>this.showStopsList(route)} className="badge badge-primary badge-pill pl-3 pr-3 pt-2 pb-2"  data-toggle="collapse" data-target={"#"+route} aria-expanded="false" aria-controls="collapseExample">
                            
                            View Full Map
                            
                            </span>
                        
                    </li>

                        </p>
                        <div className="collapse" id={route}>
                        <div className="card card-body">
                        <div id = {"stops-list"+route}>

                        </div>
                        </div>
                        </div>

                    
                    
               
                </div>
            )
        })
        console.log("routes List in function",this.routesList);
        ReactDOM.render(this.routesList,document.getElementById("shuttle-list"));

    }
    



    showStopsList = (route) =>{

        var stopsList = Object.keys(this.state[route]).map( stop =>{

            console.log(stop);
            return(
                <div className = "list-item-route" >
                
                        <li className="list-group-item d-flex justify-content-between align-items-center route-list-item m-1" key = {Object.toString(Math.random)} id = {route+stop}>                      
                        <b>{stop}</b>
                        
                       
                        <div className="form-check">
                            <input onChange = {()=> this.makeCheked(route,stop)} className="form-check-input" type="checkbox" value="" id= {route+stop+"defaultCheck1"} />
                            <label className="form-check-label" htmlFor= {route+stop+"defaultCheck1"} >
                                Reached
                            </label>

                        </div>
                        </li>
               
                </div>
            )
        });


        

        console.log(this.state[route]);
        ReactDOM.render(stopsList, document.getElementById('stops-list'+route));
        Object.keys(this.state[route]).map( stop =>{
            
               if(this.state[route][stop] === 1){
   
                   document.getElementById(route+stop+"defaultCheck1").checked = true;
                   document.getElementById(route+stop).style.backgroundColor = "green";
                   
               }
                          
           })
        

    }



    makeCheked(route, stop) {
        if(document.getElementById(route+stop+"defaultCheck1").checked === true){
            firebase.database().ref('Busses/' + route +'/'+stop).set(1);
            document.getElementById(route+stop).style.backgroundColor = "green";
        }
        else{
            firebase.database().ref('Busses/' + route +'/'+stop).set(0);
            document.getElementById(route+stop).style.backgroundColor = "white";
        }
        
        Object.keys(this.state[route]).map( stop =>{
            
               if(this.state[route][stop] === 1){
   
                   document.getElementById(route+stop+"defaultCheck1").checked = true;
                   document.getElementById(route+stop).style.backgroundColor = "green";
                   
               }
                          
           })
      }



    render(){
        console.log("routes List",this.routeList);
        return(
            <div>
                                <nav className="navbar bg-primary justify-content-between">
                                <img className="navbar-nav" src={require("./logo.png")}/>
                
                                <ul className = "nav justify-content-end bg-primary">
                                            <li className = "nav-item nav-link mr-3">
                                                <Button clickFunction = {this.LogOutUser} name = "Log Out" ClassName = "pull-right btn btn-block btn-danger"/>
                                                 
                                            </li>
                                            
                                        </ul>
                                    </nav>
            <div className = "container-fluid">

              <div className = "routes-list">

                <h1>Routes List</h1>
                    <ul className="list-group" id = "shuttle-list">

                    </ul>
                </div>
                </div>
                </div>
        )
    }
}

export default RouterList;