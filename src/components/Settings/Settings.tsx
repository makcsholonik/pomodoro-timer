import React, { FC } from 'react';
import ReactSlider from 'react-slider';
import { useTypeSelector } from '../../hooks/useTypeSelector';

export const Settings : FC = () => {

	const workMinutes = useTypeSelector ( state => state.settings.workMinutes );
	const breakMinutes = useTypeSelector ( state => state.settings.breakMinutes );

	return (
		<div style={ { textAlign : 'left' } }>
			<label>work minutes: { workMinutes }:00</label>
			<ReactSlider
				className={ 'slider' }
				thumbClassName={ 'thumb' }
				trackClassName={ 'track' }
				value={ workMinutes }
				min={ 1 }
				max={ 60 }
			/>
			<label>break minutes: { breakMinutes }:00</label>
			<ReactSlider
				className={ 'slider green' }
				thumbClassName={ 'thumb' }
				trackClassName={ 'track' }
				value={ breakMinutes }
				min={ 1 }
				max={ 25 }
			/>
		</div>
	);
};