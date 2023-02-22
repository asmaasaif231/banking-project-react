function  SectionThree(props){
    return (
        <div class="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.4s">
            <div class="pricing-plan">
                <div class="pricing-month">
                    <h2>{props.testName}</h2>
                </div>
                <div class="pricing-title">
                    <h3>{props.testLevel}</h3>
                </div>
                <p>{props.forWho}</p>
                <p>{props.info}</p>
                <p>{props.noQ}</p>
                <p>{props.cert}</p>
                
            </div>
        </div>
        );
    }
    
export default SectionThree;
    