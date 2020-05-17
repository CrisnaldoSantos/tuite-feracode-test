import { createAction, createReducer} from '@reduxjs/toolkit';

const INITIAL_STATE = {
	docs:[],
	limit:1,
	page:1,
	pages:1,
	total:0
};

export const addTweet = createAction('ADD_TWEET');
export const addTweets = createAction('ADD_TWEETS');
export const nextPage = createAction('NEXT_PAGE');
export const backPage = createAction('BACK_PAGE');

export default createReducer(INITIAL_STATE,{
	[addTweet.type]: (state,action) => ({docs:[action.payload, state.docs]}),
	[addTweets.type]: (state,action) => (action.payload),
	[nextPage.type]: (state,action) => ({page:state.page+1}),
	[backPage.type]: (state,action) => ({page:state.page-1})
});