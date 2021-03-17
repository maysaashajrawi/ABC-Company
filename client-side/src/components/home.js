import React from 'react';
class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-2"></div>
                <div id="HomePage" className="text-center col-md-8 col-xs-12">
                <h1>Welcome to our website</h1>
                <p>Feel free to express your feeling give us some feedback
                    or if you have any problem just tell us to help you, 
                    solve your problem thank you for your trust </p>
                </div>
                
            </div>
        )
    }
}
export default HomePage;