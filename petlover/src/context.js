import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url =
   'https://api.unsplash.com/search/photos?client_id=TV8N-jvbvd9LHjYR6EOq34H-N5mg36wpGQTcj3rwsgs&query=pets';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
   const [loading, setLoading] = useState(true);
   const [hero, setHero] = useState([]);
   const [petList, setPetList] = useState([]);

   const fetchPets = async () => {
      try {
         const response = await fetch(`${url}`);
         const data = await response.json();
         const selectedLength = 5; // Desired length

         // Convert object values to an array and select a given length
         const initDataArray = Object.values(data);
         const targetDataArray = initDataArray[2];
         const dataArray = Object.values(targetDataArray);
         const selectedData = dataArray.slice(0, selectedLength);
         console.log(selectedData);
         const results = selectedData;
         if (results) {
            const newPets = results.map((item) => {
               const {
                  id,
                  color,
                  alt_description,
                  urls,
                  links,
                  likes,
                  user,
                  location,
               } = item;
               return {
                  id: id,
                  color: color,
                  info: alt_description,
                  image: urls?.thumb,
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

   return (
      <AppContext.Provider
         value={{ loading, hero, setHero, setPetList, petList }}
      >
         {children}
      </AppContext.Provider>
   );
};
// make sure use
export const useGlobalContext = () => {
   return useContext(AppContext);
};

export { AppContext, AppProvider };
