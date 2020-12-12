import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/App";
import { createStore } from "redux";
import { Provider } from "react-redux";

const InitialState = {
    productName : "",
    brandName:"",
    how_old_product:"",
    productDescription:"",
    image:"",
    productPrice:""
,
};

const reducer = (state=InitialState,action) => {
  console.log(state);
  switch (action.type){
    case "UPDATE_PRODUCT_NAME":
      // this.state.productName:action.payload.value
      break;

  }

  // reducer functions ... pure functions
};

// define store
const store = createStore(reducer);

const Apps = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Apps />, document.getElementById("root"));
