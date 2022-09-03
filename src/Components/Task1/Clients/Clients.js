import React from 'react';
import classes from './Clients.module.css';
import client1 from '../../../Images/Clients/logo-01.png';
import client2 from '../../../Images/Clients/zid-logo.png';
import client3 from '../../../Images/Clients/logo-03.png';
import prevArrow from '../../../Images/Clients/Previous.png';
import nextArrow from '../../../Images/Clients/Next.png';

const Clients = () => {
	return (
		<section className={`${classes['clients']}`}>
			<h3 className={`${classes['clients__heading']} blueLine`}>عمـلاؤنـا</h3>
			<div className={`${classes['clients__galleryWrapper']}`}>
				<a href="/#" className={`${classes['galleryArrow']}`}>
					<img src={nextArrow} alt="Arrow" />
				</a>
				<div className={`${classes['gallery']}`}>
					<img
						src={client1}
						alt="Client"
						className={`${classes['gallery__img']}`}
					/>
					<img
						src={client2}
						alt="Client"
						className={`${classes['gallery__img']}`}
					/>
					<img
						src={client3}
						alt="Client"
						className={`${classes['gallery__img']}`}
					/>
				</div>
				<span className={`${classes['galleryArrow']}`}>
					<img src={prevArrow} alt="Arrow" />
				</span>
			</div>
		</section>
	);
};

export default Clients;
