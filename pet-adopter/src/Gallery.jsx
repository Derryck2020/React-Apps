import { useQuery } from '@tanstack/react-query';
import React, { useCallback } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';

const url =
   'https://booking-com.p.rapidapi.com/v1/hotels/photos?rapidapi-key=4c87173f27msh8894aff432569bfp1b328cjsn830e1752bdf9&hotel_id=1377073&locale=en-gb';

const Gallery = () => {
   const response = useQuery({
      queryKey: ['images'],
      queryFn: async () => {
         const getResult = await axios.get(url);
         return getResult.data;
      },
   });
   console.log(response);

   if (response.isLoading) {
      return (
         <section className="image-container">
            <h4>Loading...</h4>
         </section>
      );
   }
   if (response.isError) {
      return (
         <section className="image-container">
            <h4>There was an error...</h4>
         </section>
      );
   }

   const results = response.data;
   if (results.length < 1) {
      return (
         <section className="image-container">
            <h4>There was an error...</h4>
         </section>
      );
   }

   return (
      <section>
         <section className="image-container">
            {results.map((item) => {
               const url = item?.url_1440;
               const title = item?.tags?.[0]?.tag;
               return (
                  <img
                     key={item.photo_id}
                     src={url}
                     alt={title}
                     className="img"
                  ></img>
               );
            })}
         </section>
      </section>
   );
};

export default Gallery;
