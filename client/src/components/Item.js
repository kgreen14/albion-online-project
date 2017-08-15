import React from 'react';
import Ability from './Ability.js';
import { ItemStyle } from '../styles/ItemStyle';
import { Link } from 'react-router-dom';



const Item = (props) => {
  return (
    <ItemStyle>
      <img src={props.item.image} height="70px" width="70px"/>
      
      <Link to={`/item/${props.item._id}`}>{props.item.name}</Link>
      
      {props.item.abilities.map((ability, i) => {
        return <Ability key={i} ability={ability}></Ability>
      })}
    </ItemStyle>
  );
};

export default Item;