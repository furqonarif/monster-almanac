import React from 'react';
import Card from './Card';

const CardList = ({ monsters }) => {
  if (!Array.isArray(monsters)) {
    return <h2>No data available</h2>;
  }

  return (
    <div>
      {monsters.map(user => (
        <Card 
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
        />
      ))}
    </div>
  );
};

export default CardList;