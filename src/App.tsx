import React, { FC, useState } from 'react';
import './App.css';
import { Timer } from './components/Timer/Timer';
import { Settings } from './components/Settings/Settings';

export const App : FC = () => {

	const [showSettings, setShowSettings] = useState<boolean> ( false );
	const [workMin, setWorkMin] = useState ( 25 );
	const [breakMin, setBreakMin] = useState ( 5 );

	const changeWorkMinutes = ( newValue : number ) => {
		setWorkMin ( newValue );
	};

	const changeBreakMinutes = ( newValue : number ) => {
		setBreakMin ( newValue );
	};


	return (
		<main>
			{ showSettings
				? <Settings
					workMin={ workMin }
					breakMin={ breakMin }
					changeWorkMinutes={ changeWorkMinutes }
					changeBreakMinutes={ changeBreakMinutes }
				/>
				: <Timer
					setShowSettings={setShowSettings}
				/> }
		</main>
	);
};
