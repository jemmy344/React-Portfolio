import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <fieldset>
              <legend>Drop Me a Message</legend>
              <p>nnnn</p>
            </fieldset>
          </div>
          <div className='col-12 col-lg-6'>
            <div>
              <form>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' required />

                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' required />

                <label htmlFor='message'>Message:</label>
                <textarea id='message' name='message' required></textarea>

                <button type='submit' aria-label='Submit form'>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
