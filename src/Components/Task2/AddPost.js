import React from 'react';
import classes from './Task2.module.css';

const AddPost = (props) => {
	const submitHandler = (e) => {
		e.preventDefault();
		props.onAdd(e.target.title.value, e.target.body.value);
		e.target.title.value = '';
		e.target.body.value = '';
	};

	return (
		<>
			<form onSubmit={submitHandler} className={classes['post']}>
				<h3>Add Post</h3>
				<input type="text" placeholder="Title" name="title" />
				<input type="text" placeholder="Body" name="body" />
				<button>Add</button>
			</form>
			<hr />
		</>
	);
};

export default AddPost;
