import LeftMenuComp from "./LeftMenuComp";
import { Link } from "react-router-dom";

function  LeftMenu(){
    return (
        <>
                {/* <!-- --------------------left menu ----------------------------------------------------------------- --> */}

        <div id="leftMenu">
                     <div class="wow fadeInUp col-md-3 col-sm-12" data-wow-delay="0.4s">

            <LeftMenuComp menuName="Add Certificates"/>
            <LeftMenuComp menuName="My Scores"/>
            <a> <Link to='/'><LeftMenuComp menuName="LogOut"/></Link></a>
  
</div>
                 </div>

        </>

);
}
    
export default LeftMenu;
    