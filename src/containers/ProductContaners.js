import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import {actAddtoCart,actChangeMessage} from './../actions/index';
import * as Message from './../constants/Message';

class ProductContainers extends Component {
    render() {
        var { products } = this.props;

        return (
            <Products products={products}>
                {this.ShowProducts(products)}
            </Products>
        );
    }
    ShowProducts(products) {
        var {onAddtoCart , onChangeMessage} = this.props;
        var result = products.map((product, index) => {
            return <Product
                onAddtoCart = {onAddtoCart}
                key={index}
                product={product} 
                onChangeMessage = {onChangeMessage}
                />
        })
        return result;
    }
}

ProductContainers.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rate: PropTypes.number.isRequired
        })
    ).isRequired,
    onAddtoCart : PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddtoCart: (product) => {
            dispatch(actAddtoCart(product,1));
        },
        onChangeMessage : () => {
            dispatch(actChangeMessage(Message.MSG_ADD_TO_CARD))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainers);