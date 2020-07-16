import React, { Component } from 'react';

class Product extends Component {
    render() {
        var { product } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image}   className="img-fluid" alt="" />
                        <a href="/" >
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="/" >{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">

                            {this.showRating(product.rate)}
                            
                        </ul>
                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <label
                                className="btn-floating blue-gradient" 
                                data-toggle="tooltip" data-placement="top" 
                                title="" 
                                data-original-title="Add to Cart"
                                onClick= {() => {
                                    this.props.onAddtoCart(product)
                                    this.props.onChangeMessage()
                                }}
                                >
                                    <i className="fa fa-shopping-cart"></i>
                                </label>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
    
    showRating = (rate) => {
        var result = [];
        var x = 0 ;
        for (let index = 1; index <= rate; index++) {
            result.push(<i key={x++} className="fa fa-star"></i>);
        }
        for (let index = 1; index <= (5-rate); index++) {
            result.push(<i key={x++} className="fa fa-star-o"></i>);
        }
        return result;
    }
 }

export default Product;