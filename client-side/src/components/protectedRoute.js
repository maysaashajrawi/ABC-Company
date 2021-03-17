import React from 'react';
import {Route,Redirect} from 'react-router-dom';

const ProtectedRoute = ({component:Component , ...rest})=>{
    return(
        <Route {...rest} render ={
            (props)=>{
                // check if the user did login
                if(typeof(localStorage.getItem('token')) === 'string'){
                    return <Component {...props}/>;
                }else{
                    return (<Redirect to={
                        {
                            pathname:'/logIn',
                            state:{
                                from:props.location
                            }
                        }
                    }/>)
                }
            }
        }/>
    )
}
export default ProtectedRoute; 