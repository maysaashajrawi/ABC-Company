import React from 'react';
import axios from 'axios';

const Complaint = (props)=>(
    <div className="card complaintCard">
        <div className="card-header text-center">
        {props.complaint.title}
        </div>
        <div className="card-body">
            <h4 className="card-title">Complaint Details</h4>
            <h6>Complaint Type: </h6>
            <p className="card-text" >{props.complaint.type}</p>
            <h6>Complaint description: </h6>
            <p className="card-text">{props.complaint.description}</p>
            <h6>Complaint Status: </h6>
            <p className="card-text">{props.complaint.status}</p>
            
        </div>
        <div className="card-footer text-muted text-center">
            {props.complaint.date}
        </div>
</div>
); 

class UserComplaints extends React.Component{
    constructor(props){
        super(props);
        this.state = {complaints:[]}

    }
    componentDidMount(){
        let id = localStorage.getItem('userId');
        var token = localStorage.getItem("token")
        var role = localStorage.getItem("role")
        const options = {
            headers: {'token': token ,
                    'role' :role  }
        };
        axios.get(`http://localhost:5000/complaint/getUserComplaints/${id}`,options)
        .then((res)=> this.setState({complaints:res.data}))
        .catch((err)=> console.log(err))
    }
    myComplaintsList(){
        return this.state.complaints.map(currentComplaint=>{
            return <Complaint complaint ={currentComplaint} key={currentComplaint.complaintId}/>
        })
    }

    render(){
        return(
            <div>
                <h3>User complaints</h3>
                
                {this.myComplaintsList()}
            </div>
        )
    }
}
export default UserComplaints;