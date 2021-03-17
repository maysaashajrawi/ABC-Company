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
            // status:'',
            user_ID:''
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
            // status:this.state.status,
            // user_ID:this.state.user_ID 
        }
        let id = localStorage.getItem('userId');
        axios.post(`http://localhost:5000/complaint/createComplaint/${id}`,complaint)
        .then((res)=>{console.log(res.data)})
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
                                    <input type="text" className="form-control"  name="type"  value={this.state.type} onChange={this.handleChange} required/>
                                </label>
                            </div>
                            {/* <div className="form-group">
                                <label>
                                    Status:
                                    <input type="text" className="form-control" name="status"  value={this.state.status} onChange={this.handleChange} required/>
                                </label>
                            </div> */}


                            <div className="form-group">
                                <input type="submit" className="form-control" value="Submit" />
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