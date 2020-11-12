import {
    FETCH_DETAILS,
    START_FETCH,
    ITEM_FETCH_SUCCESS,
    ITEM_FETCH_START,
} from '../actions/types';

const initialState = {
    loading: null,
    error: null,
    data: [],
};

export const projectReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ITEM_FETCH_START:
        case START_FETCH:
            return {
                ...state,
                loading: true,
            };
        case FETCH_DETAILS:
            return {
                ...state,
                loading: false,
                error: false,
                data: payload,
            };
        case ITEM_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: payload,
            };
        default:
            return state;
    }
};
