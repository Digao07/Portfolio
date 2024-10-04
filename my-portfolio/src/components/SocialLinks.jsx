import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/rodrigo-barros07/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                    <FaLinkedin className="text-4xl"/>
            </ a>
            <a href="https://github.com/Digao07"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub">
                    <FaGithub className="text-4xl"/>
            </ a>
            <a href="https://www.instagram.com/digaao07/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram">
                    <FaInstagram className="text-4xl"/>
            </ a>
            <a href="https://wa.me/5562998402480"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhattsApp">
                    <FaWhatsapp className="text-4xl"/>
            </ a>
        </div>
    </nav>
  )
}
  
  export default SocialLinks;
  