import React, { Component } from 'react';
import {connect} from 'react-redux';
import Message from '../components/Message';
import PropsType from 'prop-types'
;

class MessageContainer extends Component {
    render() {
        var {message} = this.props;
        return (
           <Message message = {message}/>
        );
    }
}


MessageContainer.propType = {
    message : PropsType.string.isRequired
}


const mapStateToProps = (state) =>{
    return {
        message : state.message
    }
}
export default connect(mapStateToProps,null)(MessageContainer);