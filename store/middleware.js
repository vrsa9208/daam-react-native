import { host } from '../helpers';

const fetchFilmsMiddleware = ({dispatch, getState}) => next => action => {
    if(action.type === 'FETCH_FILMS') {
        fetch(`${host}/api/films`)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonResponse) {
            jsonResponse.forEach(element => {
                dispatch({type: 'ADD_FILM', film: element});
            });
        });
    }

    next(action);
};

const fetchShowingsMiddleware = ({dispatch, getState}) => next => action => {
    if(action.type === 'FETCH_SHOWINGS') {
        dispatch({type: 'CLEAR_SELECTED_FILM_SHOWINGS'});
        var selected_date = `${action.selected_date.getFullYear()}-${action.selected_date.getMonth() + 1}-${action.selected_date.getDate()}`; 
        console.log(`Fetching showings for ${action.film_id} on ${selected_date}`);
        console.log(`${host}/api/showings/${action.film_id}/${selected_date}`);
         
        fetch(`${host}/api/showings/${action.film_id}/${selected_date}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonResponse) {
            jsonResponse.forEach(element => {
                dispatch({type: 'ADD_SELECTED_FILM_SHOWING', showing: element});
            });
        });
    }

    next(action);
};

export default [fetchFilmsMiddleware, fetchShowingsMiddleware];