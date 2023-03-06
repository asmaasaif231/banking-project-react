import React from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';


class Signup extends React.Component{

    constructor(){
        super();
        this.state={
            first_name:"",
            last_name:"",
            department:"",
            user_name:"",
            user_password:"",
            confirm_password:"",
            email:"",
            contact_no:"",
            gridRadios1:"",
            gridRadios2:"",
            CB_Confirm:"",
            errorMessage:"",
            errorMessage1:""
        }
    }

    validatePassword = (e) => {
        let lowerCaseCheck =/^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/;
      
        if(e.target.value.match(lowerCaseCheck)){
          this.setState({
          errorMessage:""
          });}
         else {
          this.setState({
          errorMessage:"Password must contain lowercase,uppercase & symbols"
          });}
      }

      ConfirmPassword = (e) => {
        let userPass = document.forms["SignupForm"]["user_password"].value;
     
        if(e.target.value.match(userPass)){
          this.setState({
          errorMessage1:""                                                              
          });}
         else {
          this.setState({
          errorMessage1:"Password did not match! Please try again"
          });}
      }

    render(){
        return(
        <>
            <Header/>
                <body>
                    <section id="skills">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12 col-sm-12">
                                <div className="section-title"></div>
                                {/* registeration form */}
                                <div className="container">
                                <form className="well form-horizontal" action="" method="" name="SignupForm" >
                                {/* begining of fields  */}
                                <fieldset>

                                        {/* <!-- Form Name --> */}
                                        <legend><center><h3><b>Start Your Work Development Journey By Joining Us</b></h3></center></legend><br/>

                                        {/* <!-- Text input--> */}

                                        <div className="form-group">
                                        <label className="col-md-4 control-label">First Name</label>  
                                        <div className="col-md-4 inputGroupContainer">
                                        <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                        <input  name="first_name" placeholder="First Name" className="form-control"  type="text" required minLength="2"/>
                                        
                                        </div>
                                        </div>
                                        </div>

                                        {/* <!-- Text input--> */}

                                        <div className="form-group">
                                        <label className="col-md-4 control-label" >Last Name</label> 
                                            <div className="col-md-4 inputGroupContainer">
                                            <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                        <input name="last_name" placeholder="Last Name" className="form-control"  type="text" required minLength="2"/>
                                        </div>
                                        </div>
                                        </div>

                                        {/* <!-- Text input--> */}
                                        <div className="form-group"> 
                                        <label className="col-md-4 control-label">Department</label>
                                            <div className="col-md-4 selectContainer">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                                            <select name="department" className="form-control selectpicker" required>
                                            <option value="">Select your Department</option>
                                            <option>Asset Management</option>
                                            <option>Marketing</option>
                                            <option >Trade Finance</option>
                                            <option >Risk Management</option>
                                            <option >Information Technology</option>
                                            <option >Human Resource</option>
                                            <option >Weath Management</option>
                                            <option >Compliance</option>
                                            <option >Treasury</option>
                                            <option >Finance</option>
                                            </select>
                                        </div>
                                        </div>
                                        </div>


                                        {/* <!-- Text input--> */}

                                        <div className="form-group">
                                        <label className="col-md-4 control-label">Username</label>  
                                        <div className="col-md-4 inputGroupContainer">
                                        <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                        <input  name="user_name" placeholder="Username" className="form-control"  type="text" required minLength="8" maxLength="20"/>
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

                            {/* <!-- Text input-- confirm password > */}

                                        <div className="form-group">
                                        <label className="col-md-4 control-label" >Confirm Password</label> 
                                        <div className="col-md-4 inputGroupContainer">
                                        <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                        <input name="confirm_password" placeholder="Confirm Password" className="form-control"  type="password" required onChange={this.ConfirmPassword}/>
                                        </div>
                                        </div>
                            
                                         {/* <!-- error message --> */}
                                         <br/><br/>
                                        <div className="error" id="ConfirmPasswordErr" name="ConfirmPasswordErr">
                                        {this.state.errorMessage1}
                                        </div>
                                        {/* <!-- error message --> */}
                                        </div>

                                        {/* <!-- Text input--> */}
                                        <div className="form-group">
                                        <label className="col-md-4 control-label">E-Mail</label>  
                                        <div className="col-md-4 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                    <input name="email" placeholder="E-Mail Address" className="form-control"  type="email" required/>
                                        </div>
                                    </div>
                                    </div>

                                    
                                {/* <!-- Text input--> */}
                                    
                                    <div className="form-group">
                                    <label className="col-md-4 control-label">Mobile No.</label>  
                                    <div className="col-md-4 inputGroupContainer">
                                     <div className="input-group">
                                         <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                                        <input name="contact_no" pattern="[0-9]{3}-[0-9]{2}-[0-9]{7}" placeholder="(971-xx-xxxxxxx)" className="form-control" type="tel" required minLength="14" maxLength="14"/>
                                        
                                        </div>
                                        </div>
                                       </div>

                                        {/* <!-- radio input--> */}

                                                
                                        <div className="form-group">
                                        <label className="col-md-4 control-label">Recieve updates in email?</label>  
                                        <div className="col-md-4 inputGroupContainer">
                                        <div className="input-group">
                                        <input className="form-check-input" type="radio" name="gridRadios1" id="gridRadios1" value="option1" checked/>
                                        <label className="form-check-label" for="gridRadios1">
                                            Yes
                                        </label>
                                        <br/>
                                        <input className="form-check-input" type="radio" name="gridRadios2" id="gridRadios2" value="option2"/>
                                        <label className="form-check-label" for="gridRadios2">
                                        No
                                        </label>
                                        </div>
                                        </div>
                                        </div>

                                        
                                    {/* <!-- checkbox input--> */}
                                        
                                        <div className="form-group">
                                        
                                            <input type ="checkbox" input name="CB_Confirm" required/>
                                            <label className="form-check-label" for="inlineFormCheck">
                                            By submitting this form, I acknowledge that the information I've given in this form is accurate and I agree to the terms and conditions
                                            </label>
                                        
                                            </div>
                                            
                                        




                                        <Link to='/LoginForm'> Already have an account? sign in Now</Link>

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
                </body>
            <Footer/>
        </>
        );
    }
}

export default Signup;