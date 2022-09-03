import React from 'react';
import './App.css';
import LandingPage from './Components/Task1/LandingPage';
import { Routes, Route, Link } from 'react-router-dom';
import ApiPosts from './Components/Task2/ApiPosts';
import Start from './Start';
import Post from './Components/Task2/Post';

function App() {
	return (
		<>
			<nav className="routerNav">
				<ul>
					<li>
						<Link to="/TrustLine-Tasks">
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
				<Route path="/TrustLine-Tasks" element={<Start />} exact />
				<Route path="/landingpage" element={<LandingPage />} />
				<Route path="/task2" element={<ApiPosts />} />
				<Route path="/task2/:id" element={<Post />} />
			</Routes>
		</>
	);
}

export default App;
