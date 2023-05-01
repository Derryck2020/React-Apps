import React, { useCallback } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useGlobalContext } from './context';

const url =
   'https://api.unsplash.com/search/photos?client_id=TV8N-jvbvd9LHjYR6EOq34H-N5mg36wpGQTcj3rwsgs';

const Gallery = () => {
   const { searchTerm } = useGlobalContext();
   const response = useQuery({
      queryKey: ['images', searchTerm],
      queryFn: async () => {
         const result = await axios.get(`${url}&query=${searchTerm}`);

         console.log(result);
         return result.data;
      },
   });
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
            <h4>There was an error....</h4>
         </section>
      );
   }

   const getResults = response.data.results;
   if (getResults.length < 1) {
      return (
         <section className="image-container">
            <h4>Results does not exist 🥴.</h4>
         </section>
      );
   }

   return (
      <section className="image-container">
         {getResults.map((item) => {
            const url = item?.urls?.regular;
            return (
               <img
                  src={url}
                  key={item.id}
                  alt={item.alt_description}
                  className="img"
               />
            );
         })}
      </section>
   );
};

export default Gallery;
