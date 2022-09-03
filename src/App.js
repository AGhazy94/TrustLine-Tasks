import React from 'react';
import './App.css';
import LandingPage from './Components/Task1/LandingPage';
import { Routes, Route, Link } from 'react-router-dom';
import JSON from './Components/Task2/JSON';
import Start from './Start';

function App() {
	return (
		<>
			<nav className='routerNav'>
				<ul>
					<li>
						<Link to="/">
							<strong>START PAGE</strong>
						</Link>
					</li>
					<li>
						<Link to="/landingpage">
							<strong>Task 1 {'(Landing Page)'}</strong>
						</Link>
					</li>
					<li>
						<Link to="/task2">
							<strong>Task 2 {'JSON API'}</strong>
						</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Start />} />
				<Route path="/landingpage" element={<LandingPage />} />
				<Route path="/task2" element={<JSON />} />
			</Routes>
		</>
	);
}

export default App;
