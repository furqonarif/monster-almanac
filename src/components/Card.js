import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <div className='card bg-navy dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?set=set2`} alt="monsters" width="200px" />
      <div>
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
    </div>  
  );
};

export default Card;