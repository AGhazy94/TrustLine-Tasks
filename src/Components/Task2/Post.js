import React from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Task2.module.css';

const Post = () => {
	const { state } = useLocation();

	return (
		<div className={classes['post']}>
			<h3>
				<strong>ID:</strong> {state.id}
			</h3>
			<p>
				<strong>Post title:</strong> {state.title}
			</p>
			<p>
				<strong>Post body:</strong> {state.body}
			</p>
		</div>
	);
};

export default Post;
