import React, { Component } from "react";
import Productitem from "./Productitem";


class ProductList extends Component {
    constructor(props){
        super(props);
    }

    showProducts() {

        if (this.props.products) {

            return this.props.products.map(product => (
                <Productitem productName={product.productName} unitPrice={product.unitPrice} />
            ))
        }
    }
    render() {
        console.log('555555555555555555555555555555555', this.props.products);

        return (
            <div className="row">
                {this.showProducts()}


            </div>

        );
    }

}
export default ProductList;