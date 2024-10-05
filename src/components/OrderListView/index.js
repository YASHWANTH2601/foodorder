
import OrderContext from '../../context/OrderContext'
import OrderItem from '../OrderItem'

// import './index.css'

const CartListView = () => (
  <OrderContext.Consumer>
    {value => {
      const {orderList} = value
   {/* console.log(orderList) */}
      return (
        <ul >{
            orderList.length===1? (
            <OrderItem  orderItemDetails={orderList[0]} />

          )
          :(orderList.map(eachCartItem => (
            <OrderItem key={eachCartItem.id} orderItemDetails={eachCartItem} />
          )))
        }
                {/* orderList.map(eachCartItem => (
            <OrderItem key={1} orderItemDetails={eachCartItem} />
          )) */}
          
        </ul>
      )
    }}
  </OrderContext.Consumer>
)

export default CartListView
