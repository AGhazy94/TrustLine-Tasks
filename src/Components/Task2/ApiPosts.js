import React, { useEffect, useState } from 'react';
import AddPost from './AddPost';
import Posts from './Posts';
import classes from './Task2.module.css';

const ApiPosts = (props) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetchPosts();
	}, []);

	const fetchPosts = async () => {
		await fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((data) => setPosts(data));
	};

	const onAdd = async (title, body) => {
		await fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				title,
				body,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((res) => {
				if (res.status !== 201) {
					return;
				} else {
					return res.json();
				}
			})
			.then((data) => {
				setPosts((prevState) => [...prevState, data]);
			});
	};

	const onDelete = async (id) => {
		await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			method: 'DELETE',
		}).then((res) => {
			if (res.status !== 200) {
				return;
			} else {
				setPosts(
					posts.filter((post) => {
						return post.id !== id;
					})
				);
			}
		});
	};

	const renderPosts = posts.map((post) => {
		return (
			<Posts
				key={post.id}
				id={post.id}
				title={post.title}
				body={post.body}
				onDelete={onDelete}
			/>
		);
	});

	return (
		<div className={classes['postsList']}>
			<h1>React Crud Task</h1>
			<AddPost onAdd={onAdd} />
			{renderPosts}
		</div>
	);
};

export default ApiPosts;
