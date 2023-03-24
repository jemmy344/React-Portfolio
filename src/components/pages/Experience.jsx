import React from "react";
import css3 from "../Images/css-3.png";
import react from "../Images/science.png";
import html from "../Images/html.png";
import java from "../Images/java.png";
import node from "../Images/nodejs.png";
import js from "../Images/js.png"

function Experience() {
  return (
    <div>
      <h1>Experience</h1>
      <div className="justify-center">
      <div className="container p-5">
          <div className="row">
            <div className="col-12 col-lg-4">
              <a href="https://example.com">
                <img src={css3} alt="css logo" className="img-fluid" />
                <p className="p-3 text-white">CSS3</p>
              </a>
             </div>
            <div className="col-12 col-lg-4">
              <a href="https://example.com">
                <img src={react} alt="react logo" className="img-fluid" />
                <p className="p-2 text-white">React.JS</p>
              </a>
            </div>
            <div className="col-12 col-lg-4">
              <a href="https://example.com">
                <img src={html} alt="html logo" className="img-fluid" />
                <p className="p-2 text-white">HTML</p>
              </a>
            </div>
          </div>
        </div>

        <div className="container p-5">
          <div className="row">
            <div className="col-12 col-lg-4">
              <a href="https://example.com">
                <img src={java} alt="java logo" className="img-fluid" />
                <p className="p-2 text-white">Java</p>
              </a>
             </div>
            <div className="col-12 col-lg-4">
              <a href="https://example.com">
                <img src={node} alt="node logo" className="img-fluid" />
                <p className="p-2 text-white">Node.JS</p>
              </a>
            </div>
            <div className="col-12 col-lg-4">
              <a href="https://example.com">
                <img src={js} alt="javaScript logo" className="img-fluid" />
                <p className="p-2 text-white">Javascript</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default Experience;