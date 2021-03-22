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
import CreateAdmin from './components/createAdmin';
import './App.css';
function App() {
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
        <ProtectedRoute path="/createAdmin" exact component={CreateAdmin}></ProtectedRoute>
        
      
      </div>
    </Router>
    
  );
}

export default App;
