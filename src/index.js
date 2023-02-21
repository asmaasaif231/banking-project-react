import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import SectionOne from './SectionOne';
import SectionTwoP1 from './SectionTwoP1';
import SectionTwoP2 from './SectoinTwoP2';
import SectionThree from './SectionThree';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Header/>
    <body>
      <SectionOne/>
      {/* section 2 */}
      <section id="skills">
        <div class="container">
            <div class="row">
              <SectionTwoP1/>
              <SectionTwoP2/>
              <SectionTwoP2/>
            </div>
        </div>
      </section>
      {/* section 3 */}
      <section id="skills">
        <div class="container">
            <div class="row">

                <div class="col-md-12 col-sm-12">
                    <div class="section-title">
                    <h1 class="wow fadeInUp" data-wow-delay="0.6s"> Our Common Courses</h1>
                    <SectionThree/>
                    <SectionThree/>
                    <SectionThree/>


                    </div>
                <div/>
            </div>
          </div>
          </div>
          </section>
          




    </body>
    <Footer/>
    </>
    
  </React.StrictMode>
);


