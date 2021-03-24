import { createStore, Store } from 'redux';
import rootReducer from './rootReducer';

import { NotLoggedInfoData } from './NotLoggedInfo/types';

export interface ApplicationStore {
    NotLoggedInfo: NotLoggedInfoData
}

export const store: Store<ApplicationStore> = createStore( rootReducer );