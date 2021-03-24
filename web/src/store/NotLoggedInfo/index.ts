import { Reducer } from 'redux';
import { NotLoggedInfoActions, NotLoggedInfoData } from './types';

const INITIAL_STATE: NotLoggedInfoData = {
    possibleEmail: ''
}

const reducer: Reducer<NotLoggedInfoData> = (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case NotLoggedInfoActions.SET_EMAIL:
            const emailToBeInserted = actions.payload;

            return { ...state, possibleEmail: emailToBeInserted }
        
        default:
            return state;
    }
}

export default reducer;