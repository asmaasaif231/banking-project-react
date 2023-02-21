import sectionTwoImage1 from './images/team-img1.jpg';
import sectionTwoImage2 from './images/team-img2.jpg';

function  SectionTwoP2(){
    return (
<div className="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.4s">
    <div className="about-thumb">
        <img src={sectionTwoImage1} className="img-responsive" alt="Team"/>
        <div className="about-overlay">
            <h3>Sandar Lynn</h3>
            <h4>HR manager</h4>
           
        </div>
    </div>
</div>

        );
    }
    
export default SectionTwoP2;
    