export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_FILM':
            return {...state, films: [...state.films, action.film]};
        case 'SET_SELECTED_DATE':
            return {...state, selected_date: action.date};
        case 'SET_SELECTED_FILM':
            return {...state, selected_film: action.film};
        case 'HIDE_FILM_DETAILS':
            return {...state, show_film_details: false};
        case 'SHOW_FILM_DETAILS':
            return {...state, show_film_details: true};
        case 'CLEAR_SELECTED_FILM_SHOWINGS':
            return {...state, selected_film_showings: []};
        case 'ADD_SELECTED_FILM_SHOWING':
            return {...state, selected_film_showings:[...state.selected_film_showings, action.showing]};
        default:
            return state;
    }
};