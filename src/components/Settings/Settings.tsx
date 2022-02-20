import React, { FC } from 'react';
import ReactSlider from 'react-slider';
import { BackButton } from '../BackButton/BackButton';

interface SettingsProps {
	workMin : number;
	breakMin : number;
	changeWorkMinutes : ( newValue : number ) => void;
	changeBreakMinutes : ( newValue : number ) => void;
	timerMode: () => void
}

export const Settings : FC<SettingsProps> = ( props ) => {

	const {
		workMin,
		breakMin,
		changeWorkMinutes,
		changeBreakMinutes,
		timerMode
	} = props;

	const changeWM = ( e : number ) => {changeWorkMinutes ( e ); };
	const changeBM = ( e : number ) => {changeBreakMinutes ( e ); };

	return (
		<div style={ { textAlign : 'left' } }>
			<label>work minutes: { workMin }:00</label>
			<ReactSlider
				className={ 'slider' }
				thumbClassName={ 'thumb' }
				trackClassName={ 'track' }
				value={ workMin }
				onChange={ changeWM }
				min={ 1 }
				max={ 60 }
			/>
			<label>break minutes: { breakMin }:00</label>
			<ReactSlider
				className={ 'slider green' }
				thumbClassName={ 'thumb' }
				trackClassName={ 'track' }
				value={ breakMin }
				onChange={ changeBM }
				min={ 1 }
				max={ 25 }
			/>
			<div style={ { textAlign : 'center', marginTop : '20px' } }>
				<BackButton timerMode={timerMode}/>
			</div>
		</div>
	);
};