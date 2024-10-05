import React from "react";
import "./index.css"
export default function MenuItem(props) {
  const { foodItem } = props;
  const {
    id,
    category,
    availableQuantity,
    imageUrl,
    name,
    price,
    subCategory,
    type,
  } = foodItem;
  
  return (
    <li className="foodItem">
       {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img className="foodImgs" src={imageUrl} />
      <h1 className="h11">{name}</h1>
      <p>{category}</p>
      <p>₹{price}</p>
      <p>{subCategory}</p>
      <>{id}</>
    </li>
  );
}


