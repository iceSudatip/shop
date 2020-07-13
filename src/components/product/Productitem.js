import React, { Component } from "react";
 

/*const Productitem = (props) => {
const {productName , unitPrice} = props;
return (
    <div>
        <p> {productName} </p>
        <p> {unitPrice}   </p>
    </div>
)

}*/

class Productitem extends Component{

    constructor(props){
        super(props);
        console.log('constructor|' + this.props.productName);

    }
    render(){
        return (
            <div>
                hello
                hello
                <p> {this.props.productName} </p>
                <p> {this.props.unitPrice}   </p>
            </div>
        )
    }

}
 export default Productitem;