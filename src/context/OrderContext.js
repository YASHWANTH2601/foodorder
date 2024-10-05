import React from "react";

const OrderContext = React.createContext({
  orderList: [],
  addOrderItem: () => {},
  incrementQuantity: () => {},
  decrementQuantity: () => {},
});

export default OrderContext;
