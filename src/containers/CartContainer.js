import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import PropTypes from 'prop-types';
import * as Message from './../constants/Message';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import {actDeleteProductInCart,actChangeMessage,actUpdateProductInCart} from './../actions/index';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartInfo(cart)}
            </Cart>
        );
    }

    showCartInfo = (cart) => {
    var {onDeleteProductInCart,onChangeMessage,onUpdateProductInCart} = this.props;
    let result = <tr><td>{ Message.MSG_CART_EMPTY}</td></tr>;
        if(cart.length > 0){
            result = cart.map( (cart , index)=> {
               return  <CartItem
                    key = {index}
                    index = {index}
                    cart = {cart}
                    onDeleteProductInCart={onDeleteProductInCart}
                    onChangeMessage = {onChangeMessage}
                    onUpdateProductInCart = {onUpdateProductInCart}
               />
           }) 
           result.push(
            <CartResult  key= {1000/0.5} cart={cart}/>
           )
        }
        return result;
    }
}


CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rate: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
    onDeleteProductInCart : PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired,
    onUpdateProductInCart : PropTypes.func.isRequired
};
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch , props) => {
    return {
        onDeleteProductInCart : (product) => {
            dispatch(actDeleteProductInCart(product))
        }, 
        onChangeMessage : (messaga) => {
            dispatch(actChangeMessage(messaga))
        },
        onUpdateProductInCart : (product, quantity) => {
            dispatch(actUpdateProductInCart(product,quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);