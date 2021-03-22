import React from 'react';
import axios from 'axios';
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
    userName: yup.string().min(4).max(15).required("User Name should be required please"),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    phone: yup.number().required(),
});

function CreateAdmin(){
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });
    
    var token = localStorage.getItem("token")
    var role = localStorage.getItem("role")
    const options = {
        headers: {'token': token ,
                'role' :role  }
    };
    const submitForm =(data)=>{
        axios.post('http://localhost:5000/users/createAdmin',data,options)
            .then((res)=>{
                window.location = '/createAdmin';
            })
            .catch((err)=>{console.log(err)});
    }
    
    
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                    <div className = "signUp-form">
                    <h3 className="text-center">Create Admin</h3>
                    
                    <form onSubmit={handleSubmit(submitForm)}>
                        <div className="form-group">
                            <label>
                                User Name:
                                <input type="text" name="userName" className="form-control" ref={register} required />
                            </label>
                            <p> {errors.userName?.message} </p>
                        </div>
                        <div className="form-group">
                            <label>
                                Email:
                                <input type="email" min="3" name="email" className="form-control" ref={register} required/>
                            </label>
                            <p> {errors.email?.message} </p>
                        </div>
                        <div className="form-group">
                            <label>
                                Password:
                                <input type="password" name="password" className="form-control" ref={register} required/>
                            </label>
                            <p> {errors.password?.message} </p>
                        </div>
                        <div className="form-group">
                            <label>
                                Phone:
                                <input type="number" name="phone" className="form-control"  ref={register} required/>
                            </label>
                            <p> {errors.phone?.message} </p>
                            {/* <p> {errors.phone &&"phone should be at least 10 numbers"} </p> */}
                        </div>


                    
                            <input type="submit" className=" btn btn-dark" value="SignUp" />
                        
                    
                    </form>

                </div>

                    </div>
                </div>
                

            </div>
        )
    
}
export default CreateAdmin;