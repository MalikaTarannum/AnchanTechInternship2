import { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [ message, setMessage ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" className="left-img" />
      </div>
      <div className="right">
        <h2 className="right-text">contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email"/>
          <textarea placeholder="Message"></textarea>
          <button type='submit'>send</button>
          {message && <span>Thanks, i,ll reply later</span>}
        </form>
      </div>
    </div>
  )
}

export default Contact;
