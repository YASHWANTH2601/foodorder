import  { Component } from "react";
import React from 'react'; 
import { HashLoader } from "react-spinners";
import MenuItem from "../MenuItem";
import Header from "../Header";
import "./index.css";
const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};
class Menu extends Component {
  state = { foodList: [] };
  componentDidMount() {
    this.makeApiCall();
  }

  renderFailureView = () => (
    <div className="product-details-error-view-container">
      <img
        alt="error view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        className="error-view-image"
      />
      <h1 className="product-not-found-heading">Product Not Found</h1>
    </div>
    //   <Link to="/products">
    //     <button type="button" className="button">
    //       Continue Shopping
    //     </button>
    //   </Link>
  );
  renderLoadingView = () => <HashLoader />;
  renderFoodItems = () => {
    const { foodList } = this.state;
    return (
      <ul className="foodListContainer">
        {foodList.map((eachItem) => (
          <MenuItem key={eachItem.id} foodItem={eachItem} />
        ))}
      </ul>
    );
  };
  renderProductDetails = () => {
    const { apiStatus } = this.state;

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderFoodItems();
      case apiStatusConstants.failure:
        return this.renderFailureView();
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  };
  makeApiCall = async () => {
    // event.preventDefault()
    const api = "https://api.jsonbin.io/v3/b/66faa41facd3cb34a88ed968";
    const options = {
      method: "GET",
    };
    const response = await fetch(api, options);
    if (response.ok) {
      const fetchedData = await response.json();
      const updatedData = fetchedData.record.map((each) => ({
        id: each.id,
        availableQuantity: each.available_quantity,
        category: each.category,
        imageUrl: each.image_url,
        name: each.name,
        price: each.price,
        subCategory: each.sub_category,
        type: each.type,
        quantity:1
      }));

      this.setState({
        foodList: updatedData,
        apiStatus: apiStatusConstants.success,
      });
    }
  };
  render() {
    return (
      <>
        <Header />
        {this.renderProductDetails()}
      </>
    );
  }
}
export default Menu;
