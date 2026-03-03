import { 
  FaInstagram, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaXTwitter, 
  FaWhatsapp 
} from "react-icons/fa6";

import "./Contact.css";

function Contact() {
  return (
    <div className="floating-icons">
      
      <a href="https://www.instagram.com/contadora.elainefae" 
        target="_blank" 
        rel="noopener noreferrer"
        className="icon-btn insta-btn"
        >
        <FaInstagram />
      </a>

      <a 
        href="https://wa.me/5549998249058"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-btn"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}

export default Contact;