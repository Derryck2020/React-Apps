import React from 'react';
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';

const Footer = () => {
   return (
      <section className="footer">
         <div className="footer-center">
            <div className="footer-icons">
               <BsTwitter className="icon" />
               <BsFacebook className="icon" />
               <BsInstagram className="icon" />
            </div>
            <h3 className="footer-text">
               © 2023 De-PiperX Innovations. All rights reserved.
            </h3>
         </div>
      </section>
   );
};

export default Footer;
