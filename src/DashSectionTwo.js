import React from 'react';

class DashSectionTwo extends React.Component{

    constructor(){
        super();
        this.state={
            certificationList:"",
            Message:""
        
        }
    }

    dropDownFunction = (e) => {
        let certificationList = document.forms["inputForm"]["certificationList"].value;
        if (certificationList =="Certificate1")
        {
            this.setState({
                Message:"90"
        }) } 
        else 
        if (certificationList =="Certificate2")
        {
            this.setState({
                Message:"88"
        })
    }
        else 
        if (certificationList =="Certificate3")
        {
            this.setState({
                Message:"85"
            })
        }
          ;}
     
      render(){
        return(
        <>

         {/* <!-- --------------------right menu ----------------------------------------------------------------- --> */}
         <div class="wow fadeInUp col-md-3 col-sm-8" data-wow-delay="0.4s">
                        </div>
                    {/* <!-- --------------------right content first row --------------------------------------------- --> */}
                    <div class="wow fadeInUp col-md-4 col-sm-8" data-wow-delay="0.4s">


                        <div class="blog-thumb">
                            {/* <!-- ----------------------------------start of  box2 content --------------------------------------------------- --> */}

                            <div class="about-overlay">
                                <br />
                                <br />
                                <form class="well form-horizontal" name="inputForm">


                                    <fieldset>

                                        {/* <!-- Form Name --> */}
                                        <legend><center><h3><b>View Score</b></h3></center></legend><br />



                                        {/* <!-- Text input--> */}

                                        <div class="form-group">

                                            <div class="col-md-12 inputGroupContainer">
                                                <div class="input-group">
                                                    <p> Please Select certification to show score</p>
                                                    <br />
                                                    <select name="certificationList" class="form-control selectpicker" required onClick={this.dropDownFunction}>
                                                        <option value=""> ----------Select your Certificate ---------- </option>
                                                        <option>Certificate1</option>
                                                        <option>Certificate2</option>
                                                        <option>Certificate3</option>

                                                    </select>

                                                    <br />
                                                    <br />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="col-md-4 control-label"></label>
                                            <div class="col-md-4">
                                                <br />
                                                <button type="submit" class="btn btn-warning"> View <span class="glyphicon glyphicon-send"></span></button>
                                            </div>
                                        </div>

                                    </fieldset>
                                </form>
                            </div>

                            {/* <!-- -----------------------------------end of  box2 content-------------------------------------------------- --> */}

                        </div>

                    </div>

                    {/* <!-- --------------------right content second row --------------------------------------------- --> */}
                    <div class="wow fadeInUp col-md-4 col-sm-8" data-wow-delay="0.4s">
                       
                        <div class="blog-thumb">
                            {/* <!-- ----------------------------------start of  box4 content --------------------------------------------------- --> */}
                            <div class="about-overlay">
                                <br />
                                <br />
                                <form class="well form-horizontal" name="inputForm">


                                    <fieldset>

                                        {/* <!-- Form Name --> */}
                                        <br />
                                        <br />
                                        <legend><center><h3><b>Your Score is</b></h3></center></legend><br />
                                        <br />

                                        <h1>  {this.state.Message} </h1>
                                        <br />
                                        <br />
                                        <br />
                                        <br />


                                    </fieldset>
                                </form>
                            </div>

                            {/* <!-- -----------------------------------end of  box4 content-------------------------------------------------- --> */}


                        </div>
                    </div>
                    {/* <!-- --------------------end of right menu ----------------------------------------------------------------- --> */}
              
                   
                   
          </>

            );
            }
        }
 
export default DashSectionTwo;
    
