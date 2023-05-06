import React from 'react';
import heroImg from './assets/hero.svg';

const Hero = () => {
   return (
      <section className="hero">
         <div className="hero-center">
            <div className="hero-title">
               <h1>Contentful CMS</h1>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet quaerat doloremque dolore saepe fugiat. Autem quisquam
                  quaerat modi doloribus vel molestiae facere culpa voluptate
                  architecto?
               </p>
            </div>
            <div className="img-container">
               <img src={heroImg} alt="woman and browser" />
            </div>
         </div>
      </section>
   );
};

export default Hero;
