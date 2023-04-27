import React from 'react';
import { toast } from 'react-toastify';

const SingleColor = ({ index, color }) => {
   const { hex, weight } = color;
   const saveToClipboard = async () => {
      if (navigator.clipboard) {
         try {
            await navigator.clipboard.writeText(`#${hex}`);
            toast.success('color copied!');
         } catch (error) {
            toast.error('color unable to copy!');
         }
      } else {
         toast.error('Clipboard acess denied');
      }
   };

   return (
      <article
         className={index > 10 ? 'color color-light' : 'color'}
         style={{ background: `#${hex}` }}
         onClick={saveToClipboard}
      >
         <p className="percent-value">{weight}%</p>
         <p className="color-value">#{hex}</p>
      </article>
   );
};

export default SingleColor;
