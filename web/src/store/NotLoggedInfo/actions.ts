import { action } from 'typesafe-actions';

import { NotLoggedInfoActions } from './types';

export const set_email = (email: string) => action(NotLoggedInfoActions.SET_EMAIL, email);