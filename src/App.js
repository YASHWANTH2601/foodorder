import { Component } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import OrderContext from "./context/OrderContext";
import Order from "./components/Order";
class App extends Component {
  state = { orderList: [] };
addOrderItem=(foodItemObj)=>{
    const {orderList}=this.state
    const productObject = orderList.find(
      eachCartItem => eachCartItem.id === foodItemObj.id,
    )
    if (productObject) {
      this.setState(prevstate => ({
        cartList: prevstate.cartList.map(eachItem => {
          if (productObject.id === eachItem.id) {
            const updatedQuantity = eachItem.quantity + foodItemObj.quantity
            return {...eachItem, quantity: updatedQuantity}
          }
          return eachItem
        }),
      }))
    } else {
      const updatedCartList = [...orderList, foodItemObj]
      this.setState({orderList: updatedCartList})
    }
}
incrementQuantity=(id)=>{
  this.setState(prevState => ({
    orderList: prevState.orderList.map(eachCartItem => {
      if(eachCartItem.quantity<eachCartItem.availableQuantity){
      if (id === eachCartItem.id) {
        const updatedQuantity = eachCartItem.quantity + 1
        return {...eachCartItem, quantity: updatedQuantity}
      }
    }
      return eachCartItem
    }),
  }))
}
decrementQuantity=(id)=>{
  const {orderList} = this.state
    const productObject = orderList.find(eachCartItem => eachCartItem.id === id)
    if (productObject.quantity > 1) {
      this.setState(prevState => ({
        orderList: prevState.cartList.map(eachCartItem => {
          if (id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity - 1
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        }),
      }))
    }
}
  render() {
    const { orderList } = this.state;
    return (
      <OrderContext.Provider
        value={{
          orderList,
          addOrderItem: this.addOrderItem,
          incrementQuantity: this.incrementQuantity,
          decrementQuantity: this.decrementQuantity,
        }}
      >
        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route excat path="/order" element={<Order />} />
        </Routes>
      </OrderContext.Provider>
    );
          
  }
}

export default App;
