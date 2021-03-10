import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
import {NavLink} from 'react-router-dom';

const Services = () => {
  return (
    <>
    <section className="mt-5 mb-5" id="Home">
    	<div>
    		<h2 className="text-center mt-5 duad ">Looking for Something <span className="daud"> Cool? </span></h2>
    		<h2 className="text-center mt-3 sensei">We Provide What You Need</h2>
    	</div>
    	<div className=" text-center mt-5">
    		<NavLink to="/contact" className="btn-get-started"> Contact Now </NavLink>
    	</div>
     	<div className = "container-fluid nav_bg mt-5">
			<div className = 'row'>
				<div className = "col-10 mx-auto">
					<div className="row">
						{
							Sdata.map((val, index) => {
								return <Card key={index}
									imgsrc={val.imgsrc}
									title={val.title}
								/>
							})
						}
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
    );
}

export default Services;
