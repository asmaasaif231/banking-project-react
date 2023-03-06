

function  SectionTwoP2(props){
    return (
<div className="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.4s">
    <div className="about-thumb">
        <img src={props.imageName} className="img-responsive" alt="Team"/>
        <div className="about-overlay">
            <h3>{props.eName}</h3>
            <h4>{props.ePosition}</h4>
           
        </div>
    </div>
</div>

        );
    }
    
export default SectionTwoP2;
    