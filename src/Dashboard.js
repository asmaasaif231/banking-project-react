import React from 'react';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Dash1 from './Dash1';
import Dash2 from './Dash2';
import Dash3 from './Dash3';



function  Dashboard(){
    return (
        <>
        <Header/>
        <body>
        {/* <!-- Section --> */}
                <section id="skills">
                <div class="container">
                <div class="row">
            
                    <Dash1/>
                    <Dash2/>
                    <Dash3/>
                </div>
                </div>
                </section>
        </body>
        <Footer/>
</>

        );
    }
    
export default Dashboard;
    