import React from 'react';
import Button from './Button';

const ButtonList = () => {
  const btnList = ["All", "Live", "Music", "Gaming", "Movies", "Trailer", "Cricket", "Cooking", "News", "Sports", "Technology", "Fashion", "Travel"];

  return (
    <div className='flex'>
      {
        btnList.map((btn, index) => <Button key={index} name={btn} />)
      }
    </div>
  );
};

export default ButtonList;
