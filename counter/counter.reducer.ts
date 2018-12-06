import { Action } from '../ngrx-fake/ngrx';

// Reducer
export function counterReducer(state = 10, action: Action) {
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