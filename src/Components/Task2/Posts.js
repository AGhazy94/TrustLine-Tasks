import React from 'react';
import classes from './Task2.module.css';
import { useNavigate } from 'react-router-dom';

const Posts = (props) => {
	const navigate = useNavigate();

	const onDeleteHandler = () => {
		props.onDelete(props.id);
	};

	const onViewPostHandler = () => {
		navigate(`/task2/${props.id}`, {
			state: {
				title: props.title,
				id: props.id,
				body: props.body,
			},
		});
	};

	return (
		<>
			<div className={classes['post']}>
				<h3>
					<strong>ID:</strong> {props.id}
				</h3>
				<p>
					<strong>Post title:</strong> {props.title}
				</p>
				<p>
					<strong>Post body:</strong> {props.body}
				</p>
				<button onClick={onViewPostHandler}>View Post</button>
				<button onClick={onDeleteHandler}>Delete</button>
			</div>
			<hr />
		</>
	);
};

export default Posts;
