

// Actions
interface Action {
    type: string;
    payload?: any;
}

const increaseAction: Action = {
    type: 'INCREASE'
}

const decreaseAction: Action = {
    type: 'DECREASE'
}

const multiplyAction: Action = {
    type: 'MULTIPLY',
    payload: 2
}

const divideAction: Action = {
    type: 'DIVIDE',
    payload: 2
}


// Reducer
function reducer(state = 10, action: Action) {
    switch(action.type) {
        case 'INCREASE':
            return state + 1;
        break;

        case 'DECREASE':
            return state - 1;
        break;

        case 'MULTIPLY':
            return state * action.payload;
        break;

        case 'DIVIDE':
            return state / action.payload;
        break;

        default:
            return state;
        break;
    }
}

console.log(reducer(15, increaseAction));
console.log(reducer(15, decreaseAction));
console.log(reducer(15, multiplyAction));
console.log(reducer(15, divideAction));