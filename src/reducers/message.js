import * as Message from './../constants/Message';
import * as Types from './../constants/ActionTypes';        

var initState = Message.MSG_WELCOME;

const myReducer = (state = initState, action) => {
    switch (action.type) {
        case Types.CHANGE_MESSAGE:
            state = action.message;
            return state;
        default: return state;
    }
}

export default myReducer;