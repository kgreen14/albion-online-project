import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Ability = (props) => {
  return (
    <div>
      <img src={props.ability.image} height="50px" width="50px"/>
      
      <Link to={`/ability/${props.ability._id}`}>{props.ability.name}</Link>
      
    </div>
  );
};

export default Ability;