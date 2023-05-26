import React from 'react';
import Loading from '../components/Loading';
import Pet from '../components/Pet';
import { useGlobalContext } from '../context';

const PetList = () => {
   const { petList, loading } = useGlobalContext();
   // console.log(petList);
   if (loading) {
      return <Loading />;
   }
   if (petList.length < 1) {
      return <h2 className="section-title">no pet available </h2>;
   }
   return (
      <section className="section">
         <h2 className="section-title">Pets available for adoption</h2>
         <div className="petlist-center">
            {petList.map((item) => {
               return <Pet key={item.id} {...item} />;
            })}
         </div>
      </section>
   );
};

export default PetList;
