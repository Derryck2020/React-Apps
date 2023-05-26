import React from 'react';

import { useGlobalContext } from '../context';
import Loading from './Loading';

const img1 =
   'https://images.unsplash.com/photo-1581171383994-afd540b6a4da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZyUyMGFuZCUyMGNhdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60';
const img2 =
   'https://images.unsplash.com/photo-1553284966-19b8815c7817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvcnNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';
const img3 =
   'https://images.unsplash.com/photo-1549608276-5786777e6587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmlyZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60';

const Hero = () => {
   const { hero, loading } = useGlobalContext();

   // console.log(petList);
   if (loading) {
      return <Loading />;
   }
   return (
      <section className="hero-container">
         <div className="hero-center">
            <div className="img-container">
               <img src={img1} alt="Dog & cat" />
               <img src={img2} alt="Horse" />
               <img src={img3} alt="Bird" />
            </div>
            <div className="hero-title">
               <h2>Pets</h2>
            </div>
         </div>
      </section>
   );
};

export default Hero;
