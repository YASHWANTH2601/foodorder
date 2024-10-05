// import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
// import { AiFillCloseCircle } from "react-icons/ai";

import OrderContext from "../../context/OrderContext";

// import "./index.css";

const OrderItem = (props) => (
  <OrderContext.Consumer>
    {(value) => {
      const { incrementQuantity, decrementQuantity } = value;
      const { orderItemDetails } = props;

      const {
        id,
        category,
        availableQuantity,
        image_url,
        name,
        price,
        subCategory,
        type,
        quantity,
      } = orderItemDetails;
    {/* console.log(orderItemDetails) */}

      const decreaseButton = () => {
        decrementQuantity(id);
      };
      const increasebutton = () => {
        incrementQuantity(id);
      };

      return (
        <li className="cart-item">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img src={image_url} />
          <p>{name}</p>
          <p>{price}</p>
          <p>{type}</p>
          <p>{subCategory}</p>
          <p>{category}</p>
          <p>{availableQuantity}</p>

          <div className="cart-quantity-container">
            <button
              testid="minus"
              onClick={decreaseButton}
              type="button"
              className="quantity-controller-button"
            >
              -
            </button>
            {quantity}
            <button
              testid="plus"
              onClick={increasebutton}
              type="button"
              className="quantity-controller-button"
            >
              +
            </button>
          </div>
          {/* <div className="total-price-remove-container"> */}

          {/* <button
              testid="remove"
              className="remove-button"
              type="button"
              onClick={onRemoveCartItem}
            >
              Remove
            </button>
          </div> */}

          {/* <button
            testid="remove"
            className="delete-button"
            type="button"
            onClick={onRemoveCartItem}
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button> */}
        </li>
      );
    }}
  </OrderContext.Consumer>
);

export default OrderItem;
