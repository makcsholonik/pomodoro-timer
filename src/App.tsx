import React, { FC, useState } from 'react';
import './App.css';
import { Timer } from './components/Timer/Timer';
import { Settings } from './components/Settings/Settings';

export const App : FC = () => {

	const [showSettings, setShowSettings] = useState<boolean> ( true );

	return (
		<main>
			{ showSettings ? <Settings/> : <Timer /> }
		</main>
	);
};
