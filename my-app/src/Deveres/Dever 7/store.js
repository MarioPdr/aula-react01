import {createStore} from 'redux';

const initialStata = { count: 0 };

const counterReducer = (state = initialStata, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }

}

const store = createStore(counterReducer);
export default store;
