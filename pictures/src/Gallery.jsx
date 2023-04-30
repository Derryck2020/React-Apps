import React, { useCallback } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const url =
   'https://api.unsplash.com/search/photos?client_id=TV8N-jvbvd9LHjYR6EOq34H-N5mg36wpGQTcj3rwsgs&query=office';

const Gallery = () => {
   const response = useQuery({
      queryKey: ['images'],
      queryFn: async () => {
         const result = await axios.get(url);
         return result.data;
      },
   });
   console.log(response);
   return <h2>Gallery</h2>;
};

export default Gallery;
