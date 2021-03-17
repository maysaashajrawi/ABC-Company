import React from 'react';
import axios from 'axios';
require('dotenv').config();
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName : '',
            password : ''
        }
        //to bind this to the functions
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        
    }
    handleSubmit(e){
        e.preventDefault();
        const user={
            userName : this.state.userName,
            password : this.state.password,
        }
        axios.post('http://localhost:5000/users/logIn',user)
        .then((res)=>{
            localStorage.setItem('userId' , res.data.userId)
            localStorage.setItem('role' , res.data.role)
            localStorage.setItem('token' , res.data.token)
            console.log("role",localStorage.getItem('role'))
            if(localStorage.getItem('token') && localStorage.getItem('role') === 'customer'){
                
                console.log(res.data.token)
                window.location= `/createComplaint`;
            }else if(localStorage.getItem('token') && localStorage.getItem('role') === 'Admin'){
               
                window.location.href = `/complaintList`;
            }else{
                window.location.href = `/logIn`;
            }
            
        })
        .catch((err)=>{
            console.log(err);
            // document.getElementById("danger").innerHTML="username or password is incorrect"
        });


    }
    render(){
        return(
            <div className="container">
                <div className = "LogIn-form">
                    <h3>Login</h3>
                    
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>
                                User Name:
                                <input type="text" min="3" name="userName" className="form-control" value={this.state.userName} onChange={this.handleChange} required />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Password:
                                <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} required/>
                            </label>
                        </div>

                        <div className="form-group">
                            <input type="submit" className="form-control" value="Submit" />
                        </div>
                    
                    </form>
                </div>


            </div>
        )
    }
}
export default Login;