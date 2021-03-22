import React from 'react';
import axios from 'axios';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
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
            email : this.state.email,
            password : this.state.password,
        }
        axios.post('http://localhost:5000/users/logIn',user)
        .then((res)=>{

            localStorage.setItem('userId' , res.data.userId)
            localStorage.setItem('role' , res.data.role)
            localStorage.setItem('token' , res.data.token)
            if(localStorage.getItem('token') && localStorage.getItem('role') === 'customer'){
                window.location= `/createComplaint`;
            }else if(localStorage.getItem('token') && localStorage.getItem('role') === 'Admin'){
                window.location.href = `/complaints`;
            }else if(localStorage.getItem('token') && localStorage.getItem('role') === 'superAdmin'){
                window.location.href = `/createAdmin`;
            }else{
                window.location.href = `/logIn`;
            }
            
        })
        .catch((err)=>{
            console.log(err, "your password not valid");
            document.getElementById("danger").style.display = "block";
            // document.getElementById("danger").innerHTML="username or password is incorrect"
        });


    }
    render(){
        return(
            <div className="row">
                <div className = "col-md-2"></div>
                <div className ="col-md-8">
                <div className = "LogIn-form">
                    <h3 className="text-center">Login</h3>
                    
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>
                                Email:
                                <input type="email"  name="email" className="form-control" value={this.state.email} onChange={this.handleChange} required />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Password:
                                <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} required/>
                            </label>
                        </div>

                        {/* <div className="form-group"> */}
                            <input type="submit" className="btn btn-dark" value="LogIn" />
                        {/* </div> */}

                    
                    </form>
                    
                    <div className="alert alert-danger" role="alert" id="danger">
                        username or password is incorrect
                    </div>
                </div>


                </div>
                

            </div>
        )
    }
}
export default Login;