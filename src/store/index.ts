import { combineReducers, createStore } from 'redux';
import { settingsReducer } from './reducers/settingsReducer';

const rootReducer = combineReducers ( {
	settings : settingsReducer
} );

export const store = createStore ( rootReducer );

// types
export type RootStateType = ReturnType<typeof rootReducer>