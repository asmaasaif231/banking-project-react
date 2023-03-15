import React from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import SignupForm from './SignupForm';
import axios from 'axios';


function  Signup(){

        return(
        <>
            <Header/>
         <body>
                  <SignupForm/>
                  </body>
            <Footer/>
            </>
        
        );
    }

export default Signup;