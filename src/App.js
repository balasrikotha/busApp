import React, { Component } from 'react';
import './App.css';
import Login from "./Login";
import SignUp from "./SignUp";
import RoutesList from './RoutesList';
import { BrowserRouter , Route} from 'react-router-dom';


class App extends Component {

  constructor(){
    super();

    var config = {
      apiKey: process.env.REACT_APP_apiKey,
      authDomain: process.env.REACT_APP_authDomain,
      databaseURL: process.env.REACT_APP_databaseURL,
      projectId: process.env.REACT_APP_projectId,
      storageBucket: process.env.REACT_APP_storageBucket,
      messagingSenderId: process.env.REACT_APP_messagingSenderId
    };
    firebase.initializeApp(config);
}

state = {
  isLoggedin : 0
}


// componentWillMount() {
//   firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//     } else { 

//      ReactDOM.render(<Login /> , document.getElementById('root'))
//     }
//   });

// }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App"> 
                <Route path='/routes' component={RoutesList} />    
                <Route path='/signup' component={SignUp} />
                <Route exact path = '/' component = {Login}/>  
          </div>
        
        </BrowserRouter>
       
      </div>
    )
  }
}

export default App;
