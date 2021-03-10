import React from 'react';
import aws from '../src/images/aws.png';
import sega from '../src/images/sega.png';
import cisco from '../src/images/cisco.png';

const Partners = () => {
	return (
		<>
			<section className="mt-5 d-flex justify-content-center">
			<div className="row">
				<div className="col-lg-4 order-1 order-lg-2 header-img">
								<img src={aws} className="img-fluid img-partners pt-3" />
				</div>
				<div className="col-lg-4 order-1 order-lg-2 header-img">
								<img src={sega} className="img-fluid img-partners" />
				</div>
				<div className="col-lg-4 order-1 order-lg-2 header-img pt-5">
								<img src={cisco} className="img-fluid img-partners" />
				</div>
			</div>
			</section>
		</>
		)
}

export default Partners;