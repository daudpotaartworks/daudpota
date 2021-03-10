import React from 'react';
import anything from '../src/images/anything.gif';

const CompanyInfo = () => {
	return (
		<>
		<div className="container mt-5">
			<div className="media-object">
				<div class="icon-left">
					<img src={anything} className="info-img"/>
				</div>
				<div className="blurb-wrapper-right">
					<h2 className="blurb-header">One of The Bests in Market</h2>
					<div className="blurb-info mt-5">
						<p>DaudpotaArtworks helps you to build a website that meets your unique needs. Start a blog, business site, portfolio, online store, or anything else you can imagine. 
							Create a simple website for your family or sell products around the world—it’s up to you</p>
					</div>
				</div>
			</div>
		</div>
		</>
		)
}

export default CompanyInfo;