function  Dash3(){
    return (
        <>
        {/* <!-- navigation bar --> */}
<div class="wow fadeInUp col-md-3 col-sm-12" data-wow-delay="0.4s"></div>
{/* <!-- second box --> */}
<div class="wow fadeInUp col-md-8 col-sm-12" data-wow-delay="0.4s" id="dashboardOrder2">
{/* <!-- part3 --> */}
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
                        <div class="col-md-12 selectContainer">
                      <div class="input-group">
                        <select name="department" class="form-control selectpicker" required>
                            <option value="">Select your Certificate</option>
                            <option>Certificate1</option>
                            <option>Certificate2</option>
                            <option>Certificate3</option>
                            
                          </select>
                        </div>
                    </div>
                      </div>
                      </div>

                    
                    {/* <!-- Text input--> */}
                    <div class="form-group">
                        <label class="col-md-4 control-label"></label>
                        <div class="col-md-4"><br/>
                         <button type="submit" class="btn btn-warning" > View Score <span class="glyphicon glyphicon-send"></span></button>
                        </div>
                      </div>

                    </fieldset>
        </form>
        </div>
    </div>
</div>
{/* <!-- part4 --> */}
<div class="wow fadeInUp col-md-6 col-sm-12" data-wow-delay="0.4s">
    <div class="about-thumb">
      
        <div class="about-overlay">
        <br/> <br/>
            <form class="well form-horizontal" >
                <fieldset>
                    <legend><center><h3><b>Your score is </b></h3></center></legend><br/>
                    <h1> score </h1>
                   
                </fieldset>
            </form>
       </div>
    </div>
</div>

</div>
    

        
        
        </>

        );
    }
    
export default Dash3;
    