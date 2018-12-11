import { Store, createStore } from 'redux';
import { counterReducer } from './counter/counter.reducer';
import { increaseAction } from './counter/counter.action';

const store: Store = createStore(counterReducer);

store.subscribe(() => {
    console.log('State: ', store.getState());
});

store.dispatch(increaseAction);
store.dispatch(increaseAction);
store.dispatch(increaseAction);
store.dispatch(increaseAction);
store.dispatch(increaseAction);
store.dispatch(increaseAction);
store.dispatch(increaseAction);
store.dispatch(increaseAction);
store.dispatch(increaseAction);
store.dispatch(increaseAction);