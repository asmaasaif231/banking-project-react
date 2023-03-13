import React from 'react';
import dash2Image from './images/certficate1.jpg';
class Dash2 extends React.Component{

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
            Mwssage4:"on " + DateR ,
            Message5:"with score of " + certScore

          });}
     
      render(){
        return(
        <>

         {/* <!-- --------------------right menu ----------------------------------------------------------------- --> */}
                <div id="rightContent">
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
                                                    <select name="department" class="form-control selectpicker" required>
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

                                        <h1> 91 </h1>
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
                 </div>
                   
                   
          </>

            );
            }
        }
 
export default Dash2;
    
