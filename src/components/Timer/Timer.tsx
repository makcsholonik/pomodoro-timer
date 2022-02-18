import React, { FC } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PlayButton } from '../PlayButton/PlayButton';
import { PauseButton } from '../PauseButton/PauseButton';
import { SettingsButton } from '../SettingsButton/SettingsButton';

const red = '#f54e4e';
const green = '#4aec8c';
const percentage = 66;

export const Timer : FC = ( props ) => {

	return (
		<div>
			<CircularProgressbar
				value={ percentage }
				text={ `${ percentage }%` }
				styles={ buildStyles ( {
					textColor : '#fff',
					pathColor : red,
					trailColor : 'rgba(255,255,255,0.2)'
				} ) }
			/>
			<div style={ { marginTop : '20px' } }>
				<PlayButton/>
				<PauseButton/>
			</div>
			<div>
				<SettingsButton />
			</div>
		</div>
	);
};


