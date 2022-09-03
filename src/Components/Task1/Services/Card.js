import React from 'react';
import classes from './Card.module.css'

const Card = (props) => {
	return (
		<div className={`${classes['card']}`}>
			<div className={`${classes['card__services']}`}>
				<img src={props.cardImg} alt={props.imgText}  className={`${classes['card__img']}`}/>
				<h4 className={`${classes['card__imgText']}`}>{props.imgText}</h4>
			</div>
      <p className={`${classes['card__lead']}`}>{props.cardText}</p>
		</div>
	);
};

export default Card;
