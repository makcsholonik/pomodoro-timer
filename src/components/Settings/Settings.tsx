import React, { FC } from 'react';
import ReactSlider from 'react-slider';

interface SettingsProps {
	workMin : number;
	breakMin : number;
}

export const Settings : FC<SettingsProps> = ( props ) => {

	const { workMin, breakMin } = props;


	return (
		<div style={ { textAlign : 'left' } }>
			<label>work minutes: { workMin }:00</label>
			<ReactSlider
				className={ 'slider' }
				thumbClassName={ 'thumb' }
				trackClassName={ 'track' }
				value={ workMin }
				onChange={ ( e ) => {console.log ( e );} }
				min={ 1 }
				max={ 60 }
			/>
			<label>break minutes: { breakMin }:00</label>
			<ReactSlider
				className={ 'slider green' }
				thumbClassName={ 'thumb' }
				trackClassName={ 'track' }
				value={ breakMin }
				onChange={ ( e ) => {console.log ( e );} }
				min={ 1 }
				max={ 25 }
			/>
		</div>
	);
};