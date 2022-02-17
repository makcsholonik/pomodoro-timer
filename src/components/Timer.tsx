import React, { FC } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PlayButton } from './PlayButton';
import { PauseButton } from './PauseButton';
import { SettingsButton } from './SettingsButton';

const red = '#f54e4e';
const green = '#4aec8c';
const percentage = 66;

// interface TimerProps {
// 	showSettings: boolean
// 	showSettingsHandler : ( value : boolean ) => void;
// }

export const Timer : FC = ( props ) => {

	// const { showSettings, showSettingsHandler } = props;

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


