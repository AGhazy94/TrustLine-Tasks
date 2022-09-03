import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
	return (
		<div className={`${classes['card']}`}>
			<img
				src={props.img}
				alt="article thumbnail"
				className={`${classes['card__img']}`}
			/>
			<div className={`${classes['card__article']}`}>
				<h5 className={`${classes['card__article--heading']}`}>
					{props.heading}
				</h5>
				<p className={`${classes['card__article--preview']}`}>
					{props.preview}
				</p>
				<a href="/#" className={`${classes['card__article--goto']}`}>
					اقرأ المقال ←
				</a>
			</div>
		</div>
	);
};

export default Card;
