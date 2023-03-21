import React from "react";

function Home() {
    const handleClick = () => {
        console.log("Button clicked!");
        // Add your functionality here
      };


      return (
        <div style={{ textAlign: 'center', fontSize: '2em' }}>
          <p>I'm a Software Developer.</p>
          <button type="button" className="btn btn-primary" onClick={handleClick}>Previous Projects</button>
        </div>
      );
      
}

export default Home;