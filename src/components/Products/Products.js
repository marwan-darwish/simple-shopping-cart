import React from "react";
import styles from "./Products.module.css";

// Redux
import { connect } from "react-redux";

import Product from "./Product/Product";

const Products = (props) => {
  return (
    <div className={styles.products}>
      {props.data.map((product) => (
        <Product key={product.id} product={product} />
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.shop.products
  };
};

export default connect(mapStateToProps)(Products);