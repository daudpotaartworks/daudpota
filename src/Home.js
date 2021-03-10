import React from 'react';
import web from '../src/images/rkt.png';
import {NavLink} from 'react-router-dom';
import Common from './Common';

const Home = () => {
  return (
    <>
    <section className="mt-5 mb-5" id="Home">
    	<Common 
        header1="Already own a business, or new to market?"
    	name="Grow your business with"
    	imgsrc={web} 
    	visit="/services" 
    	btnname="Get Started"/>
    </section>
    </>
    );
}

export default Home;
