import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return updateObject(state, { results: updatedArray });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            // Change data here
            // Where to put he logic, in the action creator or in the reducer?
            // Action creators can run async code, reducers can't
            // Reducers update the state (core redux concept)
            // Action creators should not prepare the state update too much
            // ... is up to you! Be consistent!
            return updateObject(state, 
                { results: state.results.concat({id: new Date(), value: action.result}) }
            );
        case actionTypes.DELETE_RESULT : return deleteResult(state, action);
    }
    return state;
};

export default reducer;