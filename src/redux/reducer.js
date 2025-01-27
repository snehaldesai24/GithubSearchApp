import { SET_USER, SET_LOADING, SET_ERROR } from './actions';

const initialState = {
    user: null,
    loading: false,
    error: null,
};

export const githubReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload, error: null };
        case SET_LOADING:
            return { ...state, loading: action.payload };
        case SET_ERROR:
            return { ...state, error: action.payload, user: null };
        default:
            return state;
    }
};
