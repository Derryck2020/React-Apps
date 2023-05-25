import React from 'react';
import Hero from '../components/Hero';
import PetList from '../components/PetList';
import Footer from '../components/Footer';

const Home = () => {
   return (
      <main>
         <Hero />
         <PetList />
         <Footer />
      </main>
   );
};

export default Home;
