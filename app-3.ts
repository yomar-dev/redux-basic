import { Action, Reducer } from './ngrx-fake/ngrx';
import { counterReducer } from './counter/counter.reducer';
import { increaseAction, multiplyAction } from './counter/counter.action';

class Store<T> {

    constructor(private reducer: Reducer<T>, private state: T) {}

    getState() {
        return this.state;
    }

    dispatch(action: Action) {
        this.state = this.reducer(this.state, action);
    }
}

const store = new Store(counterReducer, 10);

console.log('State: ', store.getState());

store.dispatch(increaseAction);
store.dispatch(increaseAction);

console.log('State: ', store.getState());

store.dispatch(multiplyAction);
console.log('State: ', store.getState());