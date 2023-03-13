import React from 'react';
import './index.css';
import './bootstrap.css';
import Header from './Header';
import Footer from './Footer';
import SectionOne from './SectionOne';
import SectionTwoP1 from './SectionTwoP1';
import SectionTwoP2 from './SectoinTwoP2';
import SectionThree from './SectionThree';
import sectionTwoImage1 from './images/image1.jpg';
import sectionTwoImage2 from './images/image2.jpg';


function  Home(){
    return (
        <>
        <Header/>
        <body>
          <SectionOne/>
          {/* section 2 */}
          <section id="skills">
            <div className="container">
                <div className="row">
                  <SectionTwoP1/>
                  <SectionTwoP2 imageName={sectionTwoImage1} eName="Ahmad Ali" ePosition="Head of HR Department"/>
                  <SectionTwoP2 imageName={sectionTwoImage2} eName="Sultan Saif" ePosition="HR manager"/>
                </div>
            </div>
          </section>
          {/* section 3 */}
          <section id="skills">
            <div className="container">
                <div className="row">
    
                    <div className="col-md-12 col-sm-12">
                        <div className="section-title">
                        <h1 className="wow fadeInUp" data-wow-delay="0.6s"> Our Common Courses</h1>
                        <SectionThree testName="Problem-solving test" testLevel="Intermediate" forWho="Managers" info="Presents one or more problems and asks to provide solutions" noQ="20 Questions" cert="1 professional Certificate"/>
                        <SectionThree testName="Performance test" testLevel="Starter" forWho="All employees" info="Evaluates how well you can perform a given task" noQ="20 Questions" cert="1 professional Certificate"/>
                        <SectionThree testName="Communication test" testLevel="Advanced" forWho="All employees" info="To see how well you communicate in work environment" noQ="20 Questions" cert="1 professional Certificate"/>
    
    
                        </div>
                    </div>
              </div>
            </div>
            </section>

        </body>
        <Footer/>
        </>
        
        );
    }
    
export default Home;
    