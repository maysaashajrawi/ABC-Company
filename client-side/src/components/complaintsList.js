import React from 'react';
import axios from 'axios';
// create complaint component
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
            
            {/* buttons for update the complaint status */}
            <button type="button" className="btn btn-success"  onClick={() =>{props.updateComplaint("Resolved",props.complaint.complaintId)  }}>Resolved</button>
            <button type="button" className="btn btn-danger" onClick={() =>{props.updateComplaint("Dismissed",props.complaint.complaintId)  }}>Dismissed</button>
            
        </div>
        <div className="card-footer text-muted text-center">
            {props.complaint.date}
        </div>
</div>
); 

class ComplaintsList extends React.Component{
    constructor(props){
        super(props)
        this.state = {complaints:[]}
        this.updateComplaint = this.updateComplaint.bind(this);
        
    }
    componentDidMount(){
        axios.get(`http://localhost:5000/complaint/getAllComplaints`)
        .then((res)=>{
            this.setState({complaints:res.data})
        })
        .catch((err)=> console.log(err))
    }
    updateComplaint(status,complaintId){
        status = status.replace(/['"]+/g, '');
        console.log(status)
        axios.post(`http://localhost:5000/complaint/updateComplaint/${status}/${complaintId}`)
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)})
    }

    myComplaintsList(){
        return this.state.complaints.map(currentComplaint=>{
            return <Complaint complaint ={currentComplaint} updateComplaint={this.updateComplaint}key={currentComplaint.complaintId}/>
        })
    }
    render(){
        return(
            <div className = "row">
                <div className="col-md-12">

                <h3 className="text-center">Complaints List</h3>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12">
                    { this.myComplaintsList() }
                </div>
                
            </div>
        )
    }
}
export default ComplaintsList;