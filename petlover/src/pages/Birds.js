import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import Pet from '../components/Pet';
import Footer from '../components/Footer';

const url =
   'https://api.unsplash.com/search/photos?client_id=TV8N-jvbvd9LHjYR6EOq34H-N5mg36wpGQTcj3rwsgs&query=birds';
const url1 =
   'https://media.istockphoto.com/id/1441699462/photo/beautiful-winter-scenery-with-european-finch-birds-perched-on-the-branch-within-a-heavy.webp?b=1&s=170667a&w=0&k=20&c=gUROZrCa7bq55eJXMdAq110zM63u9Ee9w1IAUcqtqs8=';
const url2 =
   'https://media.istockphoto.com/id/1470055677/photo/exotic-nicobar-pigeon.webp?b=1&s=170667a&w=0&k=20&c=dOJwllI79qPiNoK8FATRw4szlJpicVhVrdGRN_rgbpE=';
const url3 =
   'https://media.istockphoto.com/id/1351701060/photo/closeup-of-hummingbird-above-a-flowers.webp?b=1&s=170667a&w=0&k=20&c=zQ2iW9rlu7VXJvqtP4bCMJ_r2valUL1qcZ6o3qMwKHE=';

const Bird = () => {
   const [loading, setLoading] = useState(true);
   const [petList, setPetList] = useState([]);

   const fetchPets = async () => {
      try {
         const response = await fetch(`${url}`);
         const data = await response.json();
         const selectedLength = 10; // Desired length

         // Convert object values to an array and select a given length
         const initDataArray = Object.values(data);
         const targetDataArray = initDataArray[2];
         const dataArray = Object.values(targetDataArray);
         const selectedData = dataArray.slice(5, selectedLength);
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
               Birds available for adoption near you
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
                  <img src={url2} alt="Bird image 2" />
                  <img src={url1} alt="Bird image 1" />
                  <img src={url3} alt="Bird image 3" />
               </div>
               <div className="hero-title">
                  <h2>Birds</h2>
               </div>
            </div>
         </section>
         <PetList />
         <Footer />
      </main>
   );
};

export default Bird;
