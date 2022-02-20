

// // actions
// enum SettingsActionsType {
// 	CHANGE_WORK_MINUTES = 'CHANGE_WORK_MINUTES',
// 	CHANGE_BREAK_MINUTES = 'CHANGE_BREAK_MINUTES'
// }
//
// // types
// interface SettingsState {
// 	workMinutes : number;
// 	breakMinutes : number;
// }
//
// type ChangeWorkMinuteActionType = ReturnType<typeof changeWorkMinutesAC>
// type ChangeBreakMinuteActionType = ReturnType<typeof changeBreakMinutesAC>
// type ActionsType = ChangeWorkMinuteActionType | ChangeBreakMinuteActionType
//
// // initial state
// const initialState : SettingsState = {
// 	workMinutes : 25,
// 	breakMinutes : 5
// };
//
// // reducer
// export const settingsReducer = ( state : SettingsState = initialState, action : ActionsType ) : SettingsState => {
// 	switch ( action.type ) {
// 		case SettingsActionsType.CHANGE_WORK_MINUTES:
// 			return { ...state, workMinutes : action.value };
// 		case SettingsActionsType.CHANGE_BREAK_MINUTES:
// 		default:
// 			return state;
// 	}
// };
//
// // action creators
// export const changeWorkMinutesAC = ( value : number ) => ({ type : SettingsActionsType.CHANGE_WORK_MINUTES, value });
// export const changeBreakMinutesAC = ( value : number ) => ({ type : SettingsActionsType.CHANGE_BREAK_MINUTES, value });
//
//
