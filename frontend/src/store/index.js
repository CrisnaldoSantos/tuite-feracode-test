import { configureStore } from '@reduxjs/toolkit';
import authReducer from './ducks/auth';
import tweetReducer from './ducks/tweet';
import loadReducer from './ducks/load';

/**
 * * Utilizando o configureStore já está implementado o middleware redux thunk
**/
export default configureStore({
    reducer:{
        auth: authReducer,
        tweet: tweetReducer,
        load: loadReducer
    }
});