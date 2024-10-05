import Header from '../Header'


import OrderContext from '../../context/OrderContext'
import OrderListView from "../OrderListView"
// import './index.css'

const Order = () => (
  <OrderContext.Consumer>
    {value => {
      const {orderList} = value
      const showEmptyView = orderList.length === 0
      // TODO: Update the functionality to remove all the items in the cart
      
      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <h1>Empty </h1>
            ) : (
              <OrderListView />
            )}
          </div>
        </>
      )
    }}
  </OrderContext.Consumer>
)
export default Order
