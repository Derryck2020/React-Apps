import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import Pet from '../components/Pet';
import Footer from '../components/Footer';

const url =
   'https://api.unsplash.com/search/photos?client_id=TV8N-jvbvd9LHjYR6EOq34H-N5mg36wpGQTcj3rwsgs&query=horses';
const url1 =
   'https://images.unsplash.com/photo-1551098891-7a1c852f6c6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SG9yc2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';
const url2 =
   'https://images.unsplash.com/photo-1636014470337-fd160bee5530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEhvcnNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';
const url3 =
   'https://media.istockphoto.com/id/1430743384/photo/horse-in-new-year-decor.webp?b=1&s=170667a&w=0&k=20&c=W4s-3zi38xLDVnHaFuE1K_NbMCFqzBpr3jZ8AL-VEGU=';

const Horse = () => {
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
               Horses available for adoption near you
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
                  <img src={url1} alt="Horse image 1" />
                  <img src={url2} alt="Horse image 2" />
                  <img src={url3} alt="Horse image 3" />
               </div>
               <div className="hero-title">
                  <h2>Horses</h2>
               </div>
            </div>
         </section>
         <PetList />
         <Footer />
      </main>
   );
};

export default Horse;
