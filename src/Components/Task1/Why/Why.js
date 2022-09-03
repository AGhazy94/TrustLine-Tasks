import React from 'react';
import classes from './Why.module.css';
import shieldPurple from '../../../Images/Why/Shield1.png';
import shieldGrey from '../../../Images/Why/Shield2.png';
import pendingPrograms from '../../../Images/Why/pending-programe.png';
import programDimmed1 from '../../../Images/Why/programe-dimmed1.png';
import programDimmed2 from '../../../Images/Why/programe-dimmed2.png';
import programLight from '../../../Images/Why/programe-light.png';

const Why = () => {

	const shieldPurpleBG = {
		backgroundImage : `url(${shieldPurple})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: '40%',
		backgroundPosition: '80%',
	}

	const shieldGreyBG = {
		backgroundImage : `url(${shieldGrey})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: '25%',
		backgroundPosition: 'left',
	}

	return (
		<section dir="rtl" className={classes['why']}>
			<div className={classes['why__lead']}>
				<h3 className={`${classes['why__lead--heading']} blueLine`}>
					لماذا ترست لاين؟
				</h3>
				<p className={classes['why__lead--text']}>
					نقدم خدمات احترافية في مجال الأمن السيبراني بأذرع وطنية تسعى <br />{' '}
					لرفع مستوى الأمن في جميع الكيانات والمؤسسات
				</p>
			</div>
			<div className={classes['cards__container']}>
				<div className={`${classes['card__1']} ${classes['card-short']}`} style={shieldPurpleBG}>
					<h4 className={classes['card__1--heading']}>
						نوفر مستوى عالي من الحماية.
					</h4>
					<p className={classes['card__1--lead']}>
						تعرف أكثر على دورنا في توفير الحماية.
					</p>
				</div>
				<div className={`${classes['card__2']} ${classes['card-tall']}`}>
					<h4 className={classes['card__2--heading']}>نقدم خدمات فعالة.</h4>
					<p className={classes['card__2--lead']}>
						نسعى لتقليل المخاطر على مستوى المؤسسات
					</p>
					<img
						className={classes['card__2--img']}
						src={pendingPrograms}
						alt="program"
					/>
				</div>
				<div className={`${classes['card__3']} ${classes['card-tall']}`}>
					<div className={classes['card__3__imgs']}>
						<img
							className={classes['card__3--img1']}
							src={programDimmed1}
							alt="program"
						/>
						<img
							className={classes['card__3--img2']}
							src={programLight}
							alt="program"
						/>
						<img
							className={classes['card__3--img3']}
							src={programDimmed2}
							alt="program"
						/>
					</div>
					<div className={classes['card__3--lead']}>
						<h4 className={classes['card__3--heading']}>
							نكون الشريك الموثوق لعملائنا.
						</h4>
						<p className={classes['card__3--text']}>
							نقدم خدمات وحلول احترافية في مجال الأمن السيبراني.{' '}
						</p>
					</div>
				</div>
				<div className={`${classes['card__4']} ${classes['card-short']}`} style={shieldGreyBG} >
					<h4 className={classes['card__4--heading']}>
						نتقدم بخطوة على التهديدات السيبرانية ونقاط الضعف.
					</h4>
				</div>
			</div>
		</section>
	);
};

export default Why;
