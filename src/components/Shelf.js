import React from 'react';
import { Link } from 'react-router-dom';

export default function Shelf(props) {
  return (
    <Link to={`/shelf/${props.shelf_name}`}>
      <div className="shelf">Shelf {props.shelf_name}</div>
    </Link>
  )
}