import React from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Signup from './Signup';
import axios from 'axios';
import { Navigate } from "react-router-dom";

class LoginForm extends React.Component{

    constructor(){
        super();
        this.state={
            user_name:"",
            user_password:"",
            errorMessage:"",
            users:[]
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(
                res=>{
                    let tempData = res.data;
                    this.setState({
                        users:tempData 
                    });

                }
        );
    }
    validatePassword = (e) => {
        this.setState({user_password:e.target.value});
        let lowerCaseCheck =/^(\S)(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{6,16}$/;
        // let lowerCaseCheck =/^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{6,16}$/;
      
        if(e.target.value.match(lowerCaseCheck)){
          this.setState({
          errorMessage:""
          });}
         else {
          this.setState({
          errorMessage:"password must contain lowercase,uppercase & symbols"
          });}
      }

      authenticateUser = (e)=>{
        e.preventDefault();
        
        let flag=0;
        this.state.users.forEach(user => {
            if(user.email==this.state.user_name && user.email==this.state.user_password){
                flag=1;
            }
        });
        if(flag==1){
            this.setState({errorMessage:""});
            window.location.href = '/Dashboard';
            }
        else{
            this.setState({errorMessage:"Invalid details"});
            }   
    }

    render(){
        return(
        <>
            <Header/>
                
                    <section id="skills">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12 col-sm-12">
                                <div className="section-title"></div>
                                {/* registeration form */}
                                <div className="container">
                                <form className="well form-horizontal" action="" method="" name="SignupForm" onSubmit={this.authenticateUser} >
                                {/* begining of fields  */}
                                <fieldset>

                                        {/* <!-- Form Name --> */}
                                        <legend><center><h3><b>Sign in</b></h3></center></legend><br/>
                                        
                                        {/* <!-- Text input--> */}

                                        <div className="form-group">
                                        <label className="col-md-4 control-label">Username</label>  
                                        <div className="col-md-4 inputGroupContainer">
                                        <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                        <input  name="user_name" placeholder="Username" onChange={(e)=>{
                                            this.setState({user_name:e.target.value})
                                        }} className="form-control"  type="text" required minLength="8" maxLength="20"/>
                                            </div>
                                        </div>
                                        </div>

                                        {/* <!-- Text input--> */}

                                        <div className="form-group">
                                        <label className="col-md-4 control-label" >Password</label> 
                                            <div className="col-md-4 inputGroupContainer">
                                            <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                        <input name="user_password" placeholder="Password" className="form-control"  type="password" required onChange={this.validatePassword} minLength="8" maxLength="20"/>
                                            </div>
                                        </div>
                                        {/* <!-- error message --> */}
                                        <br/><br/>
                                        <div className="error" id="passwordErr" name="passwordErr">
                                        {this.state.errorMessage}
                                        </div>
                                        {/* <!-- error message --> */}
                                        </div>

                                        <Link to='/Signup'> Doesn't have an account? sign up Now</Link>

                                        {/* <!-- Button --> */}
                                        <div className="form-group">
                                        <label className="col-md-4 control-label"></label>
                                        <div className="col-md-4"><br/>
                                        <button type="submit" className="btn btn-warning" > SUBMIT <span className="glyphicon glyphicon-send"></span></button>
                                        </div>
                                        </div>

                                        </fieldset>

                                {/*end of fields  */}
                                </form>
                                </div>
                                {/*end of registeration form */}
                            
                            </div>
                        </div>
                    </div>
                    </section>
                
            <Footer/>
        </>
        );
    }
}

export default LoginForm;