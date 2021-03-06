import React, { Component } from 'react';
import './App.css';
import Navbar from "./Components/Navbar" 
import { BrowserRouter as Router } from 'react-router-dom';
import Main from "./Components/Main"

class App extends Component {
    constructor(props) {
      super (props)
      this.state = {
        isLoggedIn: false,
        user : {},
        error: {
          has : false,
          message : ""
        }
        }
        
        this.addUserToState=this.addUserToState.bind(this)
        this.logOutUser=this.logOutUser.bind(this)
      }
    
    componentDidMount() {
      if(localStorage.getItem("token") !== null && localStorage.getItem("email") !== null && localStorage.getItem("userId") && localStorage.getItem("username")) {
        this.setState({isLoggedIn:true,user:{email:localStorage.getItem("email"),id:localStorage.getItem("userId"),token:localStorage.getItem("token"),username:localStorage.getItem("username")},error: {has:false,message:""}})
      } else {
        return
      }
    }
    
    addUserToState (bool,dataFromAuth,errFromAuth) {
      this.setState({
        isLoggedIn:bool,
        user : dataFromAuth,
        error:errFromAuth,
      })
      console.log(this.state.error.message)
    }  

    logOutUser() {
      this.setState({
          isLoggedIn: false,
          user : {},
          error: {
            has : false,
            message : ""
          }
      })
    }
   
    

    render () {
      return (
          <Router>
            <div className="App">
              <Navbar 
              isLoggedIn={this.state.isLoggedIn}
              addUserToState={this.addUserToState}/>
              <Main addUserToState={this.addUserToState}
              error={this.state.error.message}
              username={this.state.user.username} 
              isLoggedIn={this.state.isLoggedIn}
              userId ={this.state.user.id}
              token ={this.state.user.token}/>
            </div>
          </Router>
        );
    }
}

export default App;
