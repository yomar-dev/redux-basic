import { Action } from './ngrx-fake/ngrx';
import { 
    increaseAction,
    decreaseAction,
    multiplyAction,
    divideAction,
    resetAction
} from './counter/counter.action';

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

        case 'RESET':
            return state = 0;
        break;

        default:
            return state;
        break;
    }
}

console.log(reducer(20, increaseAction));
console.log(reducer(20, decreaseAction));
console.log(reducer(20, multiplyAction));
console.log(reducer(20, divideAction));
console.log(reducer(20, resetAction));