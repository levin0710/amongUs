import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  const [count, setCount] = useState(0)
  const updateCount = () => {
    setCount((count) => count + 1);
  }

  return (
      <div className="Card">
          <Link style={{ textDecoration: 'none' }} to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} />
          <h2 className="name">{props.name}</h2>
          <h3 className="type">{"by " + props.type}</h3>
          <h3 className="level">{props.level}</h3>
          </Link>
          <button className="betButton" onClick={updateCount} >👍 Bet Count: {count}</button>
      </div>
  );
};

export default Card;