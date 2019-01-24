import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';
import middlewares from './middleware';

const initialState = {
    films: [],
    selected_date: new Date(),
    selected_film: {},
    selected_film_showings: [],
    show_film_details: false
};

export const store = createStore(reducer, initialState, applyMiddleware(...middlewares));