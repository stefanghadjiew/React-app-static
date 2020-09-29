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
        this.checkForUser=this.checkForUser.bind(this)
       
      }
    
    checkForUser = async () => {
      try {
        const url =`https://fierce-spire-28320.herokuapp.com/api/auth/signin`
        const email = localStorage.getItem("email");
        const password = localStorage.getItem("password");
        const res = await fetch (url,{
          method:"POST",
          headers : {
            "Content-type" : "application/json"
          },
          body:JSON.stringify(email,password)
        })
        const user = await res.json()
        this.setState({isLoggedIn:true,user,error:{has:false,message:""}})
      } catch(err) {
        this.setState({isLoggedIn:false,user:{},error:{has:true,message:err.message}})
        console.log(err)
      }
     
    }


    componentDidMount() {
      if(localStorage.getItem("token") !== null && localStorage.getItem("userId") !== null) {
         this.checkForUser()
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
