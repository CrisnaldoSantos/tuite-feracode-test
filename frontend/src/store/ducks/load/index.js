import {createAction, createReducer} from '@reduxjs/toolkit';

const INITIAL_STATE = {
    loading:false
}

export const load = createAction('LOAD');
export const stop = createAction('STOP');

export default createReducer(INITIAL_STATE,{
    [load.type]:(state, action) => ({loading:true}),
    [stop.type]:(state, action) => ({loading:false})
})