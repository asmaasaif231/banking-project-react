
import Header from './Header';
import Footer from './Footer';
import LeftMenu from './LeftMenu';
import DashSectionOne from './DashSectionOne';
import DashSectionTwo from './DashSectionTwo';
function  Dashboard(){
    return (
        <>
        <Header/>
        <body>
        {/* <!-- Section --> */}
                <section id="skills">
                <div class="container">
                <div class="row">
            
                   	<LeftMenu/>
  			<div id="rightContent">
                    <DashSectionOne/>
                    <DashSectionTwo/>
                  
			

			</div>
             </div>
         </div>
      </section>
        </body>
        <Footer/>
</>

        );
    }
    
export default Dashboard;
    
