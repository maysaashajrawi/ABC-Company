import React from 'react';
import { Link } from 'react-router-dom';

//creating Navbar component
export default function Navbar(){
    
    if(localStorage.getItem('role') === 'Admin'){
        var isAdmin = true;
    }else if(localStorage.getItem('role') === 'customer'){
        var isCustomer = true;
    }else if(localStorage.getItem('role') === 'superAdmin'){
        var isSuperAdmin = true;
    }else{
        var notAuth = true
    }
        return (    
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg"> 
            <Link to="/" className="navbar-brand">ABC Company</Link> 
                <div className="collpase navbar-collapse"> 
                <ul className="navbar-nav ml-auto">  
                    <li className="navbar-item">          
                        <Link to="/" className="nav-link">Home</Link>      
                    </li>
                        
                    <li className="navbar-item">          
                        { notAuth &&<Link to="/createUser" className="nav-link">Signup</Link>}      
                    </li> 
                    <li className="navbar-item">          
                    { notAuth &&<Link to="/logIn" className="nav-link">logIn</Link>}   
                    </li>
                    <li className="navbar-item">          
                        { isCustomer && <Link to="/createComplaint" className="nav-link">Create Complaints</Link>}      
                    </li>
                    <li className="navbar-item">          
                        { isCustomer && <Link to="/userComplaints" className="nav-link" >myComplaints</Link>}      
                    </li>
                    <li className="navbar-item">          
                        { isCustomer && <Link to="/logout" className="nav-link" onClick={logOut} >Logout</Link>}      
                    </li>

                    <li className="navbar-item">          
                        { isAdmin && <Link to="/complaints" className="nav-link" >Complaints</Link>}      
                    </li>
                    <li className="navbar-item">          
                        { isSuperAdmin && <Link to="/createAdmin" className="nav-link" >Create Admin</Link>}      
                    </li>
                    <li className="navbar-item">          
                        { isSuperAdmin &&<Link to="/home" className="nav-link" onClick={logOut}>Logout</Link>}      
                    </li>
                    <li className="navbar-item">          
                        { isAdmin &&<Link to="/home" className="nav-link" onClick={logOut}>Logout</Link>}      
                    </li>

                    
                    
                    </ul>
                    
                </div> 
            </nav> 
            );  
        
}
function logOut(){
    window.localStorage.clear();
    window.location = "/";
}
