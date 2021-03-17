import Axios from "axios";
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route} from   "react-router-dom";
import Signup from './components/signup';
import Login from './components/login';
import HomePage from './components/home';
import Navbar from './components/navbar';
import CreateComplaint from './components/createComplaint';
import UserComplaints from './components/userComplant';
import ComplaintsList from './components/complaintsList';
import ProtectedRoute from './components/protectedRoute';
import Singup from './components/signup';
import './App.css';
function App() {
  
  Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });


  return (
    <Router>
      <Navbar/>
      <div className="page-container container main">
        <Route path="/" exact component={HomePage}></Route>

        <Route path="/createUser" exact component={Signup}></Route>
        <Route path="/logIn" exact component={Login}></Route>
        <ProtectedRoute path="/createComplaint" exact component={CreateComplaint}></ProtectedRoute>
        <ProtectedRoute path="/userComplaints" exact component={UserComplaints}></ProtectedRoute>
        <ProtectedRoute path="/complaints" exact component={ComplaintsList}></ProtectedRoute>
        
      
      </div>
    </Router>
    
  );
}

export default App;
