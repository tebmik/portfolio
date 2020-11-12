import {
    FETCH_DETAILS,
    START_FETCH,
    ITEM_FETCH_SUCCESS,
    ITEM_FETCH_START,
} from './types';
import projectDetails from './data.json';

export const fetchDetails = () => async dispatch => {
    dispatch({ type: START_FETCH });
    try {
        const response = projectDetails;

        dispatch({ type: FETCH_DETAILS, payload: response });
    } catch (err) {
        console.log('something went wrong');
    }
};
export const fetchDetail = id => dispatch => {
    dispatch({ type: ITEM_FETCH_START });
    try {
        const response = projectDetails[id];

        dispatch({ type: ITEM_FETCH_SUCCESS, payload: response });
    } catch (err) {
        console.log('something went wrong');
    }
};
