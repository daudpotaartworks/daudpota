import React from 'react';
import web from '../src/images/rkt.png';

const Card = (props) => {
  return (
    <>
		<div className="col-md-4 col-10 mx-auto mt-4 text-center">
			<div className="card">
  				<img className="card-img-top card-size" src={props.imgsrc} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
				</div>
			</div>
		</div>
    </>
    );
}

export default Card;
