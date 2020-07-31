import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import getQuestions from './api';

const initialState = {
    questions: [],
    searchParams: {
        size: 20,
        tags: [],
        filters: {
            fromDate: '',
            toDate: '',
            order: 'desc',
            sort: 'activity',
        },
    },
    isLoading: true,
    isError: false,
};

const START_LOADING = 'START_LOADING';
const LOAD_SUCCESS = 'LOAD_SUCCESS';
const LOAD_ERROR = 'LOAD_ERROR';
const CHANGE_SIZE = 'CHANGE_SIZE';
const CHANGE_TAGS = 'CHANGE_TAGS';
const CHANGE_FILTERS = 'CHANGE_FILTERS';

const startLoading = () => ({ type: START_LOADING });
const loadError = () => ({ type: LOAD_ERROR });
const changeSize = () => ({ type: CHANGE_SIZE });

const loadSuccess = (questions) => ({
    type: LOAD_SUCCESS,
    value: questions,
});

const changeTags = (tags) => ({
    type: CHANGE_TAGS,
    value: tags,
});

const changeFilters = (filters) => ({
    type: CHANGE_FILTERS,
    value: filters,
});

const loadQuestions = (searchParams) => {
    return (dispatch) => {
        dispatch(startLoading());

        return getQuestions(searchParams)
            .then(questions => dispatch(loadSuccess(questions)))
            .catch(() => dispatch(loadError()));
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };

        case LOAD_SUCCESS:
            return {
                ...state,
                questions: action.value,
                isLoading: false,
            };

        case LOAD_ERROR:
            return {
                ...state,
                isError: true,
                isLoading: false,
            };

        case CHANGE_SIZE:
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    size: state.searchParams.size + 20,
                },
            };

        case CHANGE_TAGS:
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    size: 20,
                    tags: action.value,
                },
            };

        case CHANGE_FILTERS:
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    size: 20,
                    filters: action.value,
                },
            };

        default:
            return state;
    }
};

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
);

export {
    store,
    changeSize,
    changeTags,
    changeFilters,
    loadQuestions,
};