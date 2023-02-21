import sectionOneImage from './images/home-img.png';

function  SectionOne(){
    return (
  <section id="skills">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <div className="wow bounceIn section-title">
                        <h1>welcome to HR Website</h1>
                        <hr/>
                    </div>
                </div>
                <div className="col-md-12 col-sm-12">
                    <div className="section-title">

<div className="wow fadeInUp col-md-6 col-sm-5 col-xs-10 col-xs-offset-1 col-sm-offset-0" data-wow-delay="0.2s">
    <img src={sectionOneImage} className="img-responsive" alt="Home"/>
</div>

<div className="col-md-6 col-sm-7 col-xs-12">
    <div className="home-thumb">
        <h1 className="wow fadeInUp" data-wow-delay="0.6s">Let the beauty of what you love be what you do</h1>

       
        <p className="wow fadeInUp" data-wow-delay="0.8s"> True motivation comes from acheivement, personal development, job satisfaction and recognition</p>
       

                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </section>

        );
    }
    
export default SectionOne;
    