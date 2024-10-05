import React from "react";
import "./index.css";
import { useState,useEffect } from "react";
import OrderContext from "../../context/OrderContext";
export default function MenuItem(props) {
  const [quantity, setQuantity] = useState(1);
  // const [specificFood,setSpecific]=useState([])
  // useEffect(() => {
  //   const fetchMenu = async () => {
    
  //       const response = await fetch('https://api.jsonbin.io/v3/b/66faa41facd3cb34a88ed968');
  //       const data = await response.json();
  //       setSpecific(data.record);
  //     };
  //     fetchMenu();
  //   }, []);
  const foodList = {
    record: [
      {
        id: "1",
        name: "Black Coffee",
        category: "Beverages",
        sub_category: "Coffee",
        available_quantity: 10,
        price: 199.18,
        image_url:
          "https://www.livofy.com/health/wp-content/uploads/2020/05/black-coffee.jpg",
        type: "veg",
        quantity: 0,
      },
      {
        id: "2",
        name: "Espresso",
        category: "Beverages",
        sub_category: "Coffee",
        available_quantity: 8,
        price: 245.18,
        image_url:
          "https://coffeehero.com.au/cdn/shop/articles/758214849ae27a07c55af11f0f0f633b_2048x2048.jpg?v=1623281348",
        type: "veg",
        quantity: 0,
      },
      {
        id: "3",
        name: "Double Espresso",
        category: "Beverages",
        sub_category: "Coffee",
        available_quantity: 6,
        price: 327.18,
        image_url:
          "https://cdn.o2vend.com/840e087a-a6ca-44e0-b5ca-ff41d3115911/9faf8b13-7e93-46ef-9826-26ae19345226.jpg",
        type: "veg",
        quantity: 0,
      },
      {
        id: "4",
        name: "Latte",
        category: "Beverages",
        sub_category: "Coffee",
        available_quantity: 4,
        price: 327.18,
        image_url:
          "https://coffeebros.com/cdn/shop/articles/unnamed_be2775a1-186d-40c1-b094-488fa5fa4050.png?v=1675965693",
        type: "veg",
        quantity: 0,
      },
      {
        id: "5",
        name: "Paneer Pizza",
        category: "Food",
        sub_category: "Pizza",
        available_quantity: 10,
        price: 737.18,
        image_url:
          "https://foodoncall.co.in/wp-content/uploads/2017/10/chatpata-paneer-pizza.jpg",
        type: "veg",
        quantity: 0,
      },
      {
        id: "6",
        name: "Corn Pizza",
        category: "Food",
        sub_category: "Pizza",
        available_quantity: 8,
        price: 573.18,
        image_url:
          "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/corn.f8baa08ad7f607f1de30f96bb9245b50.1.jpg",
        type: "veg",
        quantity: 0,
      },
      {
        id: "7",
        name: "Vegetable Pizza",
        category: "Food",
        sub_category: "Pizza",
        available_quantity: 6,
        price: 819.18,
        image_url:
          "https://foods.qmanja.com/MenuImages/Menu5114-Mix-veg-pizza.jpg.png",
        type: "veg",
        quantity: 0,
      },
      {
        id: "8",
        name: "Chicken BBQ Pizza",
        category: "Food",
        sub_category: "Pizza",
        available_quantity: 2,
        price: 819.18,
        image_url:
          "https://i0.wp.com/www.slapyodaddybbq.com/wp-content/uploads/BBQChickenPizza-foodgawker.jpg?fit=600%2C600&ssl=1",
        type: "non-veg",
        quantity: 0,
      },
      {
        id: "9",
        name: "Chicken Tandoori Pizza",
        category: "Food",
        sub_category: "Pizza",
        available_quantity: 3,
        price: 901.18,
        image_url:
          "https://tastytango.blog/wp-content/uploads/2023/07/koolgurl._A_close-up_high_quality_photo_of_a_Tandoori_Fusion_De_2028d66f-ef2d-46ba-8ebd-41491e80ba4b.jpg",
        type: "non-veg",
        quantity: 0,
      },
      {
        id: "10",
        name: "Penne Alfredo",
        category: "Food",
        sub_category: "Pasta",
        available_quantity: 8,
        price: 737.18,
        image_url:
          "https://www.spoonfulofflavor.com/wp-content/uploads/2023/12/alfredo-penne-pasta-500x375.jpg",
        type: "veg",
        quantity: 0,
      },
      {
        id: "11",
        name: "Pasta alla Norma",
        category: "Food",
        sub_category: "Pasta",
        available_quantity: 6,
        price: 819.18,
        image_url:
          "https://www.themediterraneandish.com/wp-content/uploads/2020/12/pasta-alla-norma-recipe-6.jpg",
        type: "veg",
        quantity: 0,
      },
      {
        id: "12",
        name: "Pasta e fagioli",
        category: "Food",
        sub_category: "Pasta",
        available_quantity: 1,
        price: 573.18,
        image_url:
          "https://www.saveur.com/uploads/2019/04/22/G3TIHE7ANJTO5EQGLDVLN4WIQA-768x1024.jpg?auto=webp&optimize=high&quality=70&width=1440",
        type: "veg",
        quantity: 0,
      },
      {
        id: "13",
        name: "Chicken Alfredo",
        category: "Food",
        sub_category: "Pasta",
        available_quantity: 9,
        price: 901.18,
        image_url:
          "https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/16:9/w_1280,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg",
        type: "non-veg",
        quantity: 0,
      },
      {
        id: "14",
        name: "Chicken Pesto Pasta",
        category: "Food",
        sub_category: "Pasta",
        available_quantity: 10,
        price: 819.18,
        image_url:
          "https://therecipecritic.com/wp-content/uploads/2023/02/chickenpestopasta-1.jpg",
        type: "non-veg",
        quantity: 0,
      },
      {
        id: "15",
        name: "Chocolate Lava Cake",
        category: "Food",
        sub_category: "Dessert",
        available_quantity: 10,
        price: 573.18,
        image_url:
          "https://floursandfrostings.com/wp-content/uploads/2017/01/IMG_20170104_003650_972-1.jpg",
        type: "veg",
        quantity: 0,
      },
      {
        id: "16",
        name: "Tiramisu",
        category: "Food",
        sub_category: "Dessert",
        available_quantity: 8,
        price: 819.18,
        image_url:
          "https://www.cookingclassy.com/wp-content/uploads/2022/08/tiramisu-17.jpg",
        type: "veg",
        quantity: 0,
      },
      {
        id: "17",
        name: "Cheesecake",
        category: "Food",
        sub_category: "Dessert",
        available_quantity: 3,
        price: 901.18,
        image_url:
          "https://www.jocooks.com/wp-content/uploads/2018/11/cheesecake-1-22.jpg",
        type: "veg",
        quantity: 0,
      },
      {
        id: "18",
        name: "Apple Pie",
        category: "Food",
        sub_category: "Dessert",
        available_quantity: 8,
        price: 819.18,
        image_url:
          "https://schoolnightvegan.com/wp-content/uploads/2022/11/vegan-apple-pie-25.jpg",
        type: "veg",
        quantity: 0,
      },
      {
        id: "19",
        name: "Chocolate Mousse",
        category: "Food",
        sub_category: "Dessert",
        available_quantity: 4,
        price: 901.18,
        image_url:
          "https://bakerbynature.com/wp-content/uploads/2023/08/Easy-Chocolate-Mousse-Baker-by-Nature-12617-1-500x500.jpg",
        type: "veg",
        quantity: 0,
      },
      {
        id: "20",
        name: "Chocolate Milkshake",
        category: "Food",
        sub_category: "Milkshake",
        available_quantity: 2,
        price: 573.18,
        image_url:
          "https://www.orchidsandsweettea.com/wp-content/uploads/2020/01/Peanut-Butter-Milkshake-4-of-4.jpg",
        type: "veg",
        quantity: 0,
      },
      {
        id: "21",
        name: "Vanilla Milkshake",
        category: "Food",
        sub_category: "Milkshake",
        available_quantity: 3,
        price: 501.18,
        image_url:
          "https://pintsizedbaker.com/wp-content/uploads/2015/12/Vanilla-Shake-4.jpg.webp",
        type: "veg",
        quantity: 0,
      },
      {
        id: "22",
        name: "Strawberry Milkshake",
        category: "Food",
        sub_category: "Milkshake",
        available_quantity: 8,
        price: 573.18,
        image_url:
          "https://www.justsotasty.com/wp-content/uploads/2018/05/Strawberry-Milkshake.jpg",
        type: "veg",
        quantity: 0,
      },
      {
        id: "23",
        name: "Oreo Milkshake",
        category: "Food",
        sub_category: "Milkshake",
        available_quantity: 6,
        price: 901.18,
        image_url:
          "https://www.whiskaffair.com/wp-content/uploads/2020/07/Oreo-Milkshake-2-3.jpg",
        type: "veg",
        quantity: 0,
      },
    ],
    metadata: {
      id: "66faa41facd3cb34a88ed968",
      private: false,
      createdAt: "2024-09-30T13:14:07.482Z",
      name: "menu",
    },
  };
  const { foodItem } = props;
  const {
    id,
    category,
    available_quantity,
    image_url,
    name,
    price,
    sub_category,
    type,
  } = foodItem;

  function decrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  function increase() {
    if (available_quantity >= 0 && quantity<available_quantity) {
      setQuantity(quantity + 1);
    }
  }
  return (
    <OrderContext.Consumer>
      {(value) => {
        const { addOrderItem } = value;
    const addItem=()=>{
        const filters = foodList.record.filter((each)=>each.id===id)
        if(filters.length>0){
        addOrderItem({...filters,quantity}) 
        }
    }
        return (
          <li className="foodItem">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img className="foodImgs" src={image_url} />
            <h1 className="h11">{name}</h1>
            <p>{category}</p>
            <p>₹{price}</p>
            <p>{sub_category}</p>
            <p>Quantity:{available_quantity}</p>
            <div>
              <button onClick={decrease}>-</button>
              <p>{quantity}</p>
              <button onClick={increase}>+</button>
            </div>
            <button onClick={addItem}>Order</button>
          </li>
        );
      }}
    </OrderContext.Consumer>
  );
}
