import React from 'react';
import Ability from './Ability.js';
import { ItemStyle } from '../styles/ItemStyle';


const Item = (props) => {
  return (
    <ItemStyle>
      <img src={props.item.image} height="70px" width="70px"/>
      {/*Trying to link to the item under at props.item._id  */}
      <a href={props.item._id}>{props.item.name}</a>
      {props.item.abilities.map((ability, i) => {
        return <Ability key={i} ability={ability}></Ability>
      })}
    </ItemStyle>
  );
};

export default Item;