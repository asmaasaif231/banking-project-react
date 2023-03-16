import React from 'react';
import dash2Image0 from './images/DashTLoadingImage.png';
import dash2Image1 from './images/professionalMarketing.jpg';
import dash2Image2 from './images/FinancialModeling.jpeg';
import dash2Image3 from './images/projectManagment.jpeg';


class DashSectionTwo extends React.Component{

    constructor(){
        super();
        this.state={
            courseImg:dash2Image0,
            msg1:'',
            msg2:'',
            msg3:''
        }
    }

    displayDetails = (e) => {
 
        let select = document.getElementById("department");
        let option = select.options[select.selectedIndex].value;
        let detailsDiv = document.getElementById("details");
        let msg1 = document.getElementById("msg1");
        let msg2 = document.getElementById("msg2");
        let msg3 = document.getElementById("msg3");


        if (option === "option1") {
            document.getElementById("courseImg").src = dash2Image1; 
            msg1.innerHTML = "DUBAI";
            msg2.innerHTML = "23 MARCH 2023";
            msg3.innerHTML = "2 DAYS";
        } else if (option === "option2") {
            document.getElementById("courseImg").src = dash2Image2;
            msg1.innerHTML = "SHARJAH";
            msg2.innerHTML = "02 APRIL 2023";
            msg3.innerHTML = "5 DAYS";
        } else if (option === "option3") {
            document.getElementById("courseImg").src = dash2Image3;
            msg1.innerHTML = "ABU DHABI";
            msg2.innerHTML = "12 APRIL 2023";
            msg3.innerHTML = "3 DAYS";
        } else {
            document.getElementById("courseImg").src = dash2Image0;
            msg1.innerHTML = "";
            msg2.innerHTML = "";
            msg3.innerHTML = "";
        }

         
}
     
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
                                        <legend><center><h3><b>Our Courses</b></h3></center></legend><br />



                                        {/* <!-- Text input--> */}

                                        <div class="form-group">

                                            <div class="col-md-12 inputGroupContainer">
                                                <div class="input-group">
                                                    <p> Please Select Course to show Details</p>
                                                    <br />
                                                    <select name="department" id="department" class="form-control selectpicker" required onChange={this.displayDetails}>
                                                        <option value=""> ---------------Select Course --------------- </option>
                                                        <option value="option1">Professional Marketing</option>
                                                        <option value="option2">Financial Modelling</option>
                                                        <option value="option3">Project Management</option>

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
                                                {/* <button type="submit" class="btn btn-warning"> View Details <span class="glyphicon glyphicon-send"></span></button> */}
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
                                        <div class="courseDetails">
                                            <img id ="courseImg"src={dash2Image0} />
                                            <h3 id="msg1"></h3>
                                            <h3 id="msg2"></h3>
                                            <h3 id="msg3"></h3>

                                              {/* <h1>  {this.state.Message} </h1> */}
                                        </div>
                                      
                                     

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
    
