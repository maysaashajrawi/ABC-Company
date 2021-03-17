import React from 'react';
import axios from 'axios';
class Singup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName : '',
            email    : '',
            role     : '',
            password : '',
            phone    :''

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
            email    : this.state.email,
            role     : this.state.role,
            password : this.state.password,
            phone    : this.state.phone 
        }
        axios.post('http://localhost:5000/users/createUser',user)
        .then((res)=>{
            window.location = '/logIn';
        })
        .catch((err)=>{console.log(err)});


    }
    render(){
        return(
            <div className="container">
                <div className = "signUp-form">
                    <h3>Create User</h3>
                    
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>
                                User Name:
                                <input type="text" min="3" name="userName" className="form-control" value={this.state.userName} onChange={this.handleChange} required />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Email:
                                <input type="email" min="3" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} required/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Role:
                                <select value={this.state.role} name="role" className="form-control" onChange={this.handleChange} required>
                                <option value=" "> </option>
                                    <option value="Admin">Admin</option>
                                    <option value="customer">customer</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Password:
                                <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} required/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Phone:
                                <input type="number" name="phone" className="form-control"  value={this.state.phone} onChange={this.handleChange} required/>
                            </label>
                        </div>


                        <div className="form-group">
                            <input type="submit" className="form-control" value="Submit" />
                        </div>
                    
                    </form>

                    <div>
                            <button>LogIn</button>
                    </div>
                </div>


            </div>
        )
    }
}
export default Singup;