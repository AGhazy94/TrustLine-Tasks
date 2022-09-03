import React from 'react';
import classes from './Team.module.css';
import imgSmall from '../../../Images/Team/Group Small.png';
import imgWide from '../../../Images/Team/Group Wide.png';

const Team = () => {
	return (
		<section className={`${classes['team']}`}>
			<div className={`${classes['team__img']}`}>
				<img
					src={imgSmall}
					alt="computer"
					className={`${classes['team__img--small']}`}
				/>
				<img
					src={imgWide}
					alt="computer"
					className={`${classes['team__img--wide']}`}
				/>
			</div>
			<div className={`${classes['team__lead']}`}>
				<h3 className={`${classes['team__lead--heading']} blueLine`}>
					فريقـنا
				</h3>
				<p className={`${classes['team__lead--text']}`}>
					في ترست لاين، نقدم للعملاء الحلول التي تجعلهم ينمون بثقة لسنوات قادمة.
				</p>
				<p className={`${classes['team__lead--text']}`}>
					يعمل موظفونا بشغف واستقلالية وإتقان لخلق عمل نفخر به جميعًا.
				</p>
			</div>
		</section>
	);
};

export default Team;
