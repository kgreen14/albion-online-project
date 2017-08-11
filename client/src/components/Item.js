import React from 'react';
import Ability from './Ability.js';


const Item = (props) => {
  return (
    <div>
      <img src={props.item.image} height="60px" width="60px"/>
      <a href={props.item}>{props.item.name}</a>
      {props.item.abilities.map((ability, i) => {
        return <Ability key={i} ability={ability} />
      })}
    </div>
  );
};

export default Item;