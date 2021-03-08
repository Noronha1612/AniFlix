import { createStore, Store } from 'redux';
import rootReducer from './rootReducer';

export interface ApplicationStore {
    
}

export const store: Store<ApplicationStore> = createStore( rootReducer );