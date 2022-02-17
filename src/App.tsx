import React, { FC, useState } from 'react';
import './App.css';
import { Timer } from './components/Timer';
import { Settings } from './components/Settings';

export const App : FC = () => {

	const [showSettings, setShowSettings] = useState<boolean> ( true );

	// const showSettingsHandler = ( value : boolean ) => {
	// 	setShowSettings ( !value );
	// };

	return (
		<main>
			{ showSettings ? <Settings/> : <Timer /> }
		</main>
	);
};
