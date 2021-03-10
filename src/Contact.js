import React, {useState} from 'react';

const Contact = () => {

  function messageSent() {
    alert("ThankYou ! Your Message Has Been Recieved !");
  }

  return (
    <>
    <section className="mt-5" id="Home">
    	<div className="my-5">
    		<h2 className="text-center">Drop Us A Message</h2>
    	</div>
    	<div className="container contact-div">
    		<div className="row">
          <div className="col-md-6 mx-auto example2">
            <form>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mb-3">
               <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
               <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="col-auto">
               <button className="btn btn-outline-primary mb-3" onClick={messageSent}>Send Message</button>
              </div>
            </form>
          </div>
        </div>
    	</div>
    </section>
    </>
    );
}

export default Contact;
