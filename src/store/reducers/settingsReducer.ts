// types
interface SettingsState {
	workMinutes : number;
	breakMinutes : number;
}

// initial state
const initialState : SettingsState = {
	workMinutes : 25,
	breakMinutes : 5
};

// reducer
export const settingsReducer = ( state : SettingsState = initialState, action : any ) : SettingsState => {
	switch ( action.type ) {
		default:
			return state;
	}
};

