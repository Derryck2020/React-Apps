import React from 'react';
import { Link } from 'react-router-dom';

const Pet = ({ image, name, id, location, likes }) => {
   return (
      <article className="pet">
         <div className="pet-img-container">
            <img src={image} alt={name} />
         </div>
         <div className="pet-footer">
            <h3>{name}</h3>
            <h4>likes: {likes}</h4>
            <h4>
               location: <span>{location ? location : 'Seattle'}</span>
            </h4>
            <Link to={`/pet/${id}`} className="btn btn-primary btn-details">
               details
            </Link>
         </div>
      </article>
   );
};

export default Pet;
