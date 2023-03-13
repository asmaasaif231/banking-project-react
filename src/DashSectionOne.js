import React from 'react';
import dash2Image from './images/certficate1.jpg';
class DashSectionOne extends React.Component{

    constructor(){
        super();
        this.state={
            CourseName:"",
            placeIssue:"",
            DateR:"",
            certScore:"",
            Message:"",
            Message1:"",
            Message2:"",
            Message3:"",
            Message4:"",
            Message5:""
        }
    }

    textFunction = (e) => {
        let CourseName = document.forms["inputForm"]["CourseName"].value;
        let placeIssue = document.forms["inputForm"]["placeIssue"].value;
        let DateR = document.forms["inputForm"]["DateR"].value;
        let certScore = document.forms["inputForm"]["certScore"].value;

          this.setState({
            Message:"Certification", 
            Message1:"of completion",
            Message2:CourseName, 
            Message3:"issued from " + placeIssue ,
            Message4:"on " + DateR ,
            Message5:"with score of " + certScore

          });}
     
      render(){
        return(
        <>

         {/* <!-- --------------------right menu ----------------------------------------------------------------- --> */}
                
                    {/* <!-- --------------------right content first row --------------------------------------------- --> */}
                    <div class="wow fadeInUp col-md-4 col-sm-8" data-wow-delay="0.4s">
                        {/* <!-- --------------------right content first row first box  --------------------------------------------- --> */}
                        <div class="blog-thumb">
                            {/* <!-- ----------------------------------start of  box1 content --------------------------------------------------- --> */}


                            <div class="about-overlay">
                                <br />
                                <br />
                                <form class="well form-horizontal" name="inputForm">


                                    <fieldset>

                                        {/* <!-- Form Name --> */}
                                        <legend><center><h3><b>Add New Certificate</b></h3></center></legend><br />



                                        {/* <!-- Text input--> */}

                                        <div class="form-group">

                                            <div class="col-md-12 inputGroupContainer">
                                                <div class="input-group">
                                                    <input name="CourseName" placeholder="Course Name" class="form-control" type="text" required onChange={this.textFunction} maxLength="16" />
                                                    <input name="placeIssue" placeholder="Place of Issue" class="form-control" type="text" required onChange={this.textFunction} maxLength="30" />
                                                    <input name="DateR" placeholder="Date Recieved" class="form-control" type="date" requiredonChange={this.textFunction} />
                                                    <input type="number" name="certScore" placeholder="certification Score" class="form-control" minLength="0" maxLength="2" min="60" max="99" required onChange={this.textFunction} />


                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="col-md-4 control-label"></label>
                                            <div class="col-md-4">
                                                <br />
                                                <button type="submit" class="btn btn-warning"> Add <span class="glyphicon glyphicon-send"></span></button>
                                            </div>
                                        </div>

                                    </fieldset>
                                </form>
                            </div>




                            {/* <!-- -----------------------------------end of  box1 content-------------------------------------------------- --> */}

                        </div>


                    </div>

                    {/* <!-- --------------------right content second row --------------------------------------------- --> */}
                    <div class="wow fadeInUp col-md-4 col-sm-8" data-wow-delay="0.4s">
                        <div class="blog-thumb">
                            {/* <!-- ----------------------------------start of  box3 content --------------------------------------------------- --> */}
                            <div class="about-overlay">
                                <br />
                                <br />


                                <form class="well2 form-horizontal">

                                    <fieldset>
                                        <div class="certimageBack">
                                            <br />
 				 <p>  {this.state.Message}</p>
                                    <p>  {this.state.Message1}</p>
                                    <h3>  {this.state.Message2}</h3><br/>
                                    <p>  {this.state.Message3}</p>
                                    <p>  {this.state.Message4}</p>
                                    <p>  {this.state.Message5}</p>
                                        </div>

                                        <br />

                                    </fieldset>

                                </form>

                            </div>



                            {/* <!-- -----------------------------------end of  box3 content-------------------------------------------------- --> */}


                        </div>


                  
                    </div>
                    {/* <!-- --------------------end of right menu ----------------------------------------------------------------- --> */}
                
                   
                   
          </>

            );
            }
        }
 
export default DashSectionOne;
    
