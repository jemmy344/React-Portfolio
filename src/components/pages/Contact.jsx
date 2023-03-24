import React from 'react';

function Contact() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          <fieldset>
            <legend>Drop Me a Message</legend>
            <p>Feel free to get in touch with me if you have any questions or comments.</p>
            <p>You can reach out to me via email or by filling out the form on the right.</p>
          </fieldset>
        </div>
        <div className='col-lg-6'>
          <form>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input type='text' className='form-control' id='name' name='name' required />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input type='email' className='form-control' id='email' name='email' required />
            </div>

            <div className='form-group'>
              <label htmlFor='message'>Message:</label>
              <textarea className='form-control' id='message' name='message' required></textarea>
            </div>

            <button type='submit' className='btn btn-primary'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
