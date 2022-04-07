import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from './components/Spinner';
import Header from './components/Header';

import './styles/css/main.css';

const Homepage = lazy(() => import('./pages/homepage/Homepage'));
const Destination = lazy(() => import('./pages/destination/Destination'));
const Crew = lazy(() => import('./pages/crew/Crew'));
const Technology = lazy(() => import('./pages/technology/Technology'));

const App = () => {
	return (
		<>
			<Header />
			<Suspense fallback={<Spinner />}>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/destination" element={<Destination />} />
					<Route path="/crew" element={<Crew />} />
					<Route path="/technology" element={<Technology />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default App;
