import React from 'react';
import Item from './Item';
import { BuildBoardStyle } from '../styles/BuildBoardStyle';

const BuildBoard = (props) => {
  return (
    <BuildBoardStyle>
      {props.items.map((item, i) => {
        return <Item key={i} item={item} /> 
      })}
    </BuildBoardStyle>
  );
};

export default BuildBoard;