import React from 'react';
import classes from './Hero.module.css';

const Hero = () => {
	return (
		<div dir="rtl" className={classes['hero']}>
			<h2 className={classes['hero__heading']}>ترست لاين تقدم لأعمالك الحماية</h2>
			<p className={classes['hero__lead']}>
				ترست لاين شركة سعودية متخصصة في تقديم مجموعة واسعة من خدمات وحلول الأمن
				السيبراني.
			</p>
			<a href="/#" className={classes['hero__btn']}>تواصل معنا</a>
		</div>
	);
};

export default Hero;
