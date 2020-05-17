import {createAction, createReducer} from '@reduxjs/toolkit';

const INITIAL_STATE = {
    user:{},
    token:""
}

export const login = createAction('LOGIN');
export const logout = createAction('LOGOUT');

export default createReducer(INITIAL_STATE,{
    [login.type]:(state, action) => (action.payload),
    [logout.type]:(state, action) => ({user:{}, token:""})
})