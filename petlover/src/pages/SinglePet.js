import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';

const SinglePet = () => {
   const { id } = useParams();
   const [loading, setLoading] = useState(false);
   const [pet, setPet] = useState(null);

   useEffect(() => {
      setLoading(true);
      async function getPet() {
         try {
            const response = await fetch(
               `https://api.unsplash.com/photos/${id}?client_id=TV8N-jvbvd9LHjYR6EOq34H-N5mg36wpGQTcj3rwsgs`
            );
            const data = await response.json();
            console.log(data);

            if (data) {
               const {
                  id: id,
                  color: color,
                  alt_description: info,
                  description: desc,
                  links: download,
                  likes: likes,
                  views: attraction,
               } = data;
               const userName = data.user?.name;
               const location = data.user?.location;
               const image = data.urls?.thumb;
               const newPet = {
                  id,
                  info,
                  desc,
                  image,
                  likes,
                  attraction,
                  userName,
                  location,
               };
               setPet(newPet);
            } else {
               setPet(null);
            }
            setLoading(false);
         } catch (error) {
            console.log(error);
            setLoading(false);
         }
      }
      getPet();
   }, [id]);
   if (loading) {
      return <Loading />;
   }
   if (!pet) {
      return <h2 className="section-title">no pet to display</h2>;
   }
   const { info, desc, image, likes, attraction, userName, location } = pet;
   return (
      <main>
         <section className="section single-pet-section">
            <h2 className="section-title">{userName}</h2>
            <div className="single-pet">
               <img src={image} alt={userName} />
               <div className="single-pet-info">
                  <p>
                     <span className="single-pet-data">name: </span>
                     {userName}
                  </p>
                  <p>
                     <span className="single-pet-data">location: </span>
                     {location}
                  </p>
                  <p>
                     <span className="single-pet-data">
                        social media likes:{' '}
                     </span>
                     {likes}
                  </p>
                  <p>
                     <span className="single-pet-data">desc: </span>
                     {info}
                  </p>
                  <p>
                     <span className="single-pet-data">Interaction: </span>
                     {attraction}
                  </p>
               </div>
            </div>
            <Link to="/" className="btn btn-primary">
               back home
            </Link>
         </section>
         <Footer />
      </main>
   );
};

export default SinglePet;
