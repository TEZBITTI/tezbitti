import React from 'react'
import './contact.css'
import { PhoneOutlined} from '@ant-design/icons';
const Contact = () => {
  const phoneNumber = '905442710603'; // kendi numaranı buraya yaz
  const telLink = 'tel:05442710603'
  return (
    <div className="contact">
    <div className="contact-button">
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className='wp'>Whatsapp</button>
      </a>
      <div className="contact-phone">
      <a
        href={telLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className='ph'><PhoneOutlined /></button>
      </a>
      
      </div>
    </div>
    </div>
  );
}

export default Contact;
