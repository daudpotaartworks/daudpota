import React from 'react';
import des from '../src/images/des.gif';
import {NavLink} from 'react-router-dom';
import Common from './Common';
import AboutDescription from './AboutDescription';
import CompanyInfo from './CompanyInfo';
// import Partners from './Partners';

const About = () => {
  return (
    <>
    <section className="mt-5 mb-5" id="Home">
    	<Common 
    	name="World Wide Fastest Growing Community"
    	about="We Offer you everything you need to start your website today"
    	imgsrc={des} 
    	visit="/contact"
    	btnname="Contact Now"
        />
        <CompanyInfo />
        <AboutDescription />
    </section>
    </>
    );
}

export default About;
