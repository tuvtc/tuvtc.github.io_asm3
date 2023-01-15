import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white p-5">
      <div className="d-flex justify-content-evenly container">
        <div>
          <h4 className="pb-3 fst-italic">CUSTOMER SERVICES</h4>
          <div className='d-flex flex-column'>
            <a href="#" className="text-white text-decoration-none">
              Hela & Contact Us
            </a>
            <a href="#" className="text-white text-decoration-none">
              Return & Refunds
            </a>
            <a href="#" className="text-white text-decoration-none">
              {" "}
              Online Stores
            </a>
            <a href="#" className="text-white text-decoration-none">
              Terms & Conditions
            </a>
          </div>
        </div>
        <div>
          <h4 className="pb-3 fst-italic">COMPANY</h4>
          <div className='d-flex flex-column'>
            <a href="#" className="text-white text-decoration-none">
              What We Do
            </a>
            <a href="#" className="text-white text-decoration-none">
              Available Service
            </a>
            <a href="#" className="text-white text-decoration-none">
              Latest Posts
            </a>
            <a href="#" className="text-white text-decoration-none">
              FAQs
            </a>
          </div>
        </div>
        <div>
          <h4 className="pb-3 fst-italic">SOCIAL MEDIA</h4>
          <div className='d-flex flex-column'>
            <a href="#" className="text-white text-decoration-none">
              Twitter
            </a>
            <a href="#" className="text-white text-decoration-none">
              Instagrams
            </a>
            <a href="#" className="text-white text-decoration-none">
              Facebook
            </a>
            <a href="#" className="text-white text-decoration-none">
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
