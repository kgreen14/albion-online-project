import React from 'react';
import Ability from './Ability.js';


const Item = (props) => {
  return (
    <div>
      <span>{props.item.name}</span>
      {props.item.abilities.map((ability, i) => {
        return <Ability key={i} ability={ability} />
      })}
    </div>
  );
};

export default Item;