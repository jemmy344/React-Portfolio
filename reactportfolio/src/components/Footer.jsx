import React from 'react';
import instagram from "./Images/instagram.png";
import facebook from "./Images/facebook.png";
import linkedin from "./Images/linkedin.png";



function Footer() {
    return (
      <footer>
        <hr/>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <p>Created by JemJacs</p>
            </div>
            <div className="col-12 col-lg-6">
              <a href="https://instagram.com">
                <img src={instagram} alt="instagram logo" className="img-fluid" />
              </a>
              <a href="https://instagram.com">
                <img src={facebook} alt="instagram logo" className="img-fluid" />
              </a>
              <a href="https://instagram.com">
                <img src={linkedin} alt="linkedin logo" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      
    );
  }
  
  export default Footer;