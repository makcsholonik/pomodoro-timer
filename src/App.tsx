import React, { FC, useState } from 'react';
import './App.css';
import { Timer } from './components/Timer/Timer';
import { Settings } from './components/Settings/Settings';

export const App : FC = () => {

	const [showSettings, setShowSettings] = useState<boolean> ( true );
	const [workMin, setWorkMin] = useState ( 25 );
	const [breakMin, setBreakMin] = useState ( 5 );



	return (
		<main>
			{ showSettings
				? <Settings workMin={ workMin } breakMin={ breakMin }/>
				: <Timer/> }
		</main>
	);
};
