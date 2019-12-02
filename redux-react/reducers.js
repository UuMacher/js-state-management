import { INCREMENT, DECREMENT, RESET } from './actions';

const initialState = {
    counter: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                counter: state.counter + action.number
            };
        }
        case DECREMENT: {
            return {
                ...state,
                counter: state.counter - action.number
            };
        }
        case RESET: {
            return {
                ...state,
                counter: 0
            };
        }
        default:
            return state;
    }
};
