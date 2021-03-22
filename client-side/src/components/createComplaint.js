import React from 'react';
import axios from 'axios';
import moment from 'moment';
class CreateComplaint extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            description:'',
            date:'',
            type:'',
            country:''
            
        }

        //to bind this to the functions
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event){
        const target = event.target;
        const value  = target.value;
        const name = target.name;
        this.setState({
            [name] : value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const complaint = {
            title:this.state.title,
            description:this.state.description,
            date:this.state.date,
            type:this.state.type,
            country:this.state.country
        }
        let id = localStorage.getItem('userId');
        var token = localStorage.getItem("token")
        var role = localStorage.getItem("role")
        const options = {
            headers: {'token': token ,
                    'role' :role  }
            };
        axios.post(`http://localhost:5000/complaint/createComplaint/${id}`,complaint,options)
        .then((res)=>{
            window.location = "/userComplaints"})
        .catch((err)=>{console.log(err)})
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className = "col-md-2"></div>
                    <div className = " col-md-8">
                    <div className = "signUp-form">
                    <h3>Create Complante</h3>
                    
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>
                                    Title:
                                    <input type="text" min="3" name="title" className="form-control" value={this.state.title} onChange={this.handleChange} required />
                                </label>
                            </div>
                            <div className="form-group">
                                <label>
                                    Description:
                                    <textarea  name="description" className="form-control" value={this.state.description} onChange={this.handleChange} required></textarea>
                                </label>
                            </div>
                            <div className="form-group">
                                <label>
                                    Date:
                                    <input type="date" className="form-control"  name="date" value={this.state.date} onChange={this.handleChange} min={moment().format("YYYY-MM-DD")} required/>
                                </label>
                            </div>
                            <div className="form-group">
                                <label>
                                    Type:
                                <select  name="type" className="form-control"  value={this.state.type} onChange={this.handleChange} required>
                                    <option value=" "> </option>
                                    <option value="food">food</option>
                                    <option value="clean">clean</option>
                                    <option value="delay">delay</option>
                                    <option value="services">services</option>
                                    <option value="product">product</option>
                                </select>
                                </label>
                            </div>
                            <div className="form-group">
                                <label>
                                Country:
                                <select  name="country" className="form-control"  value={this.state.country} onChange={this.handleChange} required>
                                    <option value=" "> </option>
                                    <option value="Amman">Amman</option>
                                    <option value="Zarqa">Zarqa</option>
                                    <option value="Irbid">Irbid</option>
                                    <option value="Mafraq">Mafraq</option>
                                </select>
                                </label>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-dark" value="Create Complaint" />
                            </div>
                        
                        </form>
                    </div>
                    </div>
                </div>
                


            </div>
        )
    }
    
}

export default CreateComplaint;