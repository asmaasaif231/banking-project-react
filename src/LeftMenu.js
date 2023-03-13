import LeftMenuComp from "./LeftMenuComp";
function  LeftMenu(){
    return (
        <>
                {/* <!-- --------------------left menu ----------------------------------------------------------------- --> */}

        <div id="leftMenu">
                     <div class="wow fadeInUp col-md-3 col-sm-12" data-wow-delay="0.4s">

            <LeftMenuComp menuName="Add Certificates"/>
            <LeftMenuComp menuName="My Scores"/>
            <LeftMenuComp menuName="LogOut"/>
  
</div>
                 </div>

        </>

);
}
    
export default LeftMenu;
    