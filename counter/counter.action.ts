import { Action } from '../ngrx-fake/ngrx';

export const increaseAction: Action = {
    type: 'INCREASE'
}

export const decreaseAction: Action = {
    type: 'DECREASE'
}

export const multiplyAction: Action = {
    type: 'MULTIPLY',
    payload: 2
}

export const divideAction: Action = {
    type: 'DIVIDE',
    payload: 2
}

export const resetAction: Action = {
    type: 'RESET'
}