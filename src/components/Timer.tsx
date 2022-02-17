import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const red = '#f54e4e';
const green = '#008000';
const percentage = 66;

export const Timer : React.FC = () => {
	return (
		<div>
			<CircularProgressbar
				value={ percentage }
				text={ `${ percentage }%` }
				styles={ buildStyles ( {
					textColor : '#fff',
					pathColor : red,
					trailColor : 'rgba(255,255,255,.2)'
				} ) }
			/>
		</div>
	);
};


