import React from "react";
import "./index.css";
import { useState,useEffect } from "react";
import OrderContext from "../../context/OrderContext";
export default function MenuItem(props) {
  const [quantity, setQuantity] = useState(1);
  const [specificFood,setSpecific]=useState([])
  useEffect(() => {
    const fetchMenu = async () => {
    
        const response = await fetch('https://api.jsonbin.io/v3/b/66faa41facd3cb34a88ed968');
        const data = await response.json();
        setSpecific(data.record);
      };
      fetchMenu();
    }, []);
      
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

  function decrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  function increase() {
    if (availableQuantity >= 0 && quantity<availableQuantity) {
      setQuantity(quantity + 1);
    }
  }
  return (
    <OrderContext.Consumer>
      {(value) => {
        const { addOrderItem } = value;
    const addItem=()=>{
        const filters = specificFood.filter((each)=>each.id===id)
        if(filters.length>0){
        addOrderItem({...filters,quantity}) 
        }
    }
        return (
          <li className="foodItem">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img className="foodImgs" src={imageUrl} />
            <h1 className="h11">{name}</h1>
            <p>{category}</p>
            <p>₹{price}</p>
            <p>{subCategory}</p>
            <p>Quantity:{availableQuantity}</p>
            <div>
              <button onClick={decrease}>-</button>
              <p>{quantity}</p>
              <buton onClick={increase}>+</buton>
            </div>
            <button onClick={addItem}>Order</button>
          </li>
        );
      }}
    </OrderContext.Consumer>
  );
}
