import React from 'react';
import Item from './Item';
// import { GameBoardStyles } from '../styles/Game'

const BuildBoard = (props) => {
  return (
    <div>
      {props.items.map((item, i) => {
        return <Item key={i} item={item} /> 
      })}
    </div>
  );
};

export default BuildBoard;