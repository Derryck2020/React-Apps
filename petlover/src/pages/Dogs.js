import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import Pet from '../components/Pet';
import Footer from '../components/Footer';

const url =
   'https://api.unsplash.com/search/photos?client_id=TV8N-jvbvd9LHjYR6EOq34H-N5mg36wpGQTcj3rwsgs&query=dogs';
const url1 =
   'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBldCUyMGRvZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60';
const url2 =
   'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';
const url3 =
   'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';

const Dog = () => {
   const [loading, setLoading] = useState(true);
   const [petList, setPetList] = useState([]);

   const fetchPets = async () => {
      try {
         const response = await fetch(`${url}`);
         const data = await response.json();
         const selectedLength = 7; // Desired length

         // Convert object values to an array and select a given length
         const initDataArray = Object.values(data);
         const targetDataArray = initDataArray[2];
         const dataArray = Object.values(targetDataArray);
         const selectedData = dataArray.slice(0, selectedLength);
         console.log(selectedData);
         const results = selectedData;
         if (results) {
            const newPets = results.map((item) => {
               const { id, color, alt_description, urls, links, likes, user } =
                  item;
               return {
                  id: id,
                  color: color,
                  info: alt_description,
                  image: urls.thumb,
                  download: links.download,
                  likes: likes,
                  name: user?.name,
                  location: user?.location,
               };
            });
            setPetList(newPets);
         } else {
            setPetList([]);
         }
         setLoading(false);
      } catch (error) {
         console.log(error);
         setLoading(false);
      }
   };
   useEffect(() => {
      fetchPets();
   }, []);

   const PetList = () => {
      // console.log(petList);
      if (loading) {
         return <Loading />;
      }
      if (petList.length < 1) {
         return <h2 className="section-title">no pet available </h2>;
      }
      return (
         <section className="section">
            <h2 className="section-title">
               Dogs available for adoption near you
            </h2>
            <div className="petlist-center">
               {petList.map((item) => {
                  return <Pet key={item.id} {...item} />;
               })}
            </div>
         </section>
      );
   };

   return (
      <main>
         <section className="hero-container">
            <div className="hero-center">
               <div className="img-container">
                  <img src={url1} alt="Dog image 1" />
                  <img src={url2} alt="Dog image 2" />
                  <img src={url3} alt="Dog image 3" />
               </div>
               <div className="hero-title">
                  <h2>Dogs</h2>
               </div>
            </div>
         </section>
         <PetList />
         <Footer />
      </main>
   );
};

export default Dog;
