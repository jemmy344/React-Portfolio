import React from "react";
import { useNavigate } from "react-router-dom";
import pp from "../Images/pexels-ron-lach-9603489.jpg";

function About() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4">
          <div className="position-relative rounded overflow-hidden pt-5">
            <img src={pp} alt="Hanging" className="w-100 h-100 object-cover" />
          </div>
        </div>
        <div className="col-12 col-lg-8">
          <h4 className="py-3 text-white">ABOUT ME</h4>
          <p className="text-white">
            Hello, my name is Jemimah and I am a junior software developer. 
            
            I recently graduated from University of Hertfordshire with a Master's
            degree in Computer Science and completed a bootcamp in front-end
            development, where I gained practical experience in HTML, CSS, and
            JavaScript. As a junior developer, I am excited to continue learning
            and growing my skills. I am passionate about creating software that
            solves real-world problems and improves people's lives. I am
            committed to writing clean, efficient code that is easy to maintain
            and scale, and I have a keen eye for detail when it comes to
            designing user interfaces. In addition to my technical skills, I am
            a strong communicator and collaborator. I believe that effective
            communication and teamwork are essential to the success of any
            software development project. I am eager to work with other
            developers and clients to bring their ideas to life and create
            software that meets their needs and exceeds their expectations.
            Overall, I am a dedicated and enthusiastic junior software developer
            who is excited to contribute my skills and ideas to the industry. I
            am eager to take on new challenges and continue learning and growing
            as a developer.
          </p>
          <div className="d-flex justify-content-center mt-3">
             
              <button
                type="button"
                onClick={() => navigate('/resume')}
                className="btn shadow-lg bg-primary font-weight-bold rounded-button text-white"
              >
                RESUME
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
