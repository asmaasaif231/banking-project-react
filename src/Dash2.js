import dash2Image from './images/certficate.jpg';
function  Dash2(){
    return (
        <>
            <div class="wow fadeInUp col-md-8 col-sm-12" data-wow-delay="0.4s" id="dashboardOrder1">
            {/* <!-- part1 --> */}
            <div class="wow fadeInUp col-md-6 col-sm-12" data-wow-delay="0.4s">
                <div class="about-thumb">
                
                    <div class="about-overlay">
                    <br/>
                <br/>
                        <form class="well form-horizontal" >


                            <fieldset>

                                {/* <!-- Form Name --> */}
                                <legend><center><h3><b>Add New Certificate</b></h3></center></legend><br/>
                                
                                
                                
                                {/* <!-- Text input--> */}
                                
                                <div class="form-group">
                                
                                <div class="col-md-12 inputGroupContainer">
                                <div class="input-group">
                                <input  name="CourseName" placeholder="Course Name" class="form-control"  type="text" required />
                                <input  name="placeIssue" placeholder="Place of Issue" class="form-control"  type="text" required />
                                <input  name="DateR" placeholder="Date Recieved" class="form-control"  type="date" required />
                                <input  name="certScore" placeholder="certification Score" class="form-control"  type="text" required />


                                    </div>
                                </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-md-4 control-label"></label>
                                    <div class="col-md-4"><br/>
                                    <button type="submit" class="btn btn-warning" > Add <span class="glyphicon glyphicon-send"></span></button>
                                    </div>
                                </div>

                                </fieldset>
                    </form>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
           
            {/* <!-- part2 --> */}
            <div class="wow fadeInUp col-md-6 col-sm-12" data-wow-delay="0.4s">
                <div class="about-thumb">
                
                    <div class="about-overlay">
                    {/* </br> </br> */}
                        <form class="well form-horizontal" >
                            <fieldset>
                                <img src={dash2Image} class="img-responsive" alt="cert"/>
                                <br/>
                            </fieldset>
                        </form>
                </div>
                </div>
            </div>


            </div>
        </>

        );
    }
    
export default Dash2;
    