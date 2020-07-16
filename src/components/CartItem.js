import React, { Component } from 'react';
import * as Message from './../constants/Message';

class CartItem extends Component {
    render() {
        var {cart} = this.props;
        return (
            <tr>
            <th scope="row">
                <img src={cart.product.image}
                    alt="" className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{cart.product.name}</strong>
                </h5>
            </td>
            <td>{cart.product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty">{cart.quantity} </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                        onClick={ () => { 
                            this.props.onUpdateProductInCart(cart.product, cart.quantity -1)
                            this.props.onChangeMessage(Message.MSG_UPDATE_PRODUCT_IN_CART)
                            }}>
                        <span >—</span>
                    </label>
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                        onClick={ () => { 
                            this.props.onUpdateProductInCart(cart.product, cart.quantity +1)
                            this.props.onChangeMessage(Message.MSG_UPDATE_PRODUCT_IN_CART)
                        }} 
                        >
                        <span>+</span>
                    </label>
                </div>
            </td>
        <td>{this.ShowSubTotal(cart.product.price,cart.quantity)}</td>
            <td>
                <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title="" data-original-title="Remove item" onClick= { () => {
                        this.props.onDeleteProductInCart(cart.product)
                        this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART)
                    }}>
                    X
                </button>
            </td>
        </tr>
        
        );
    }
    ShowSubTotal = (price,quantity) => {
        return price * quantity;
    }
}

export default CartItem;