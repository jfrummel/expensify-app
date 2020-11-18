import { createStore } from 'redux';

// Action generators

const incrementCount = ({ incrementBy = 1 } = {}) =>
    ({
        type: "INCREMENT",
        incrementBy
    });

const decremetCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const setCount = ({ count }) => ({
    type: "SET",
    count
});

const resetCount = () => ({
    type: "RESET"
});

// Reducer

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + action.incrementBy };
        case "DECREMENT":
            return { count: state.count - action.decrementBy };
        case "SET":
            return { count: action.count };
        case "RESET":
            return { count: 0 };
        default:
            return state;
    }

};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});



// store.dispatch({
//     type: "INCREMENT",
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount({ incrementBy: 2 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decremetCount({ decrementBy: 2 }));

store.dispatch(decremetCount());

store.dispatch(setCount({ count: 5 }));
