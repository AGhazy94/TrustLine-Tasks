import React from 'react';
import classes from './Footer.module.css';
import trustLineLogo from '../../../Images/Logo-white.png';
import linkedInLogo from '../../../Images/LinkedIn Logo.png';
import twitterLogo from '../../../Images/Twitter Logo.png';

const Footer = () => {
	return (
    <div className={`${classes['wrapper']}`}>
		<footer className={`${classes['footer']}`}>
			<div className={`${classes['footer__copyright']}`}>
				<img
					src={trustLineLogo}
					alt="TrustLine Logo"
					className={`${classes['footer__logo']}`}
				/>
				<p className={`${classes['footer__lead']}`}>
					واجهة الرياض -منطقة الأعمال, طريق المطار, الرياض 11564
					<br />
					Trustline - جميع الحقوق محفوظة 2022
				</p>
			</div>
			<ul className={`${classes['footer__links']}`}>
				<li className={`${classes['footer__item']}`}>
					<a href="/#" className={`${classes['footer__link']}`}>
						للشركات
					</a>
				</li>
				<li className={`${classes['footer__item']}`}>
					<a href="/#" className={`${classes['footer__link']}`}>
						للباحثين
					</a>
				</li>
				<li className={`${classes['footer__item']}`}>
					<a href="/#" className={`${classes['footer__link']}`}>
						بيانات التواصل
					</a>
				</li>
				<li className={`${classes['footer__item']}`}>
					<a href="/#" className={`${classes['footer__link']}`}>
						تواصل معنا
					</a>
				</li>
			</ul>
			<div className={`${classes['footer__socials']}`}>
				<img
					src={linkedInLogo}
					alt="LinkedIn"
					className={`${classes['footer__social']} ${classes['pl']}`}
				/>
				<img
					src={twitterLogo}
					alt="Twitter"
					className={`${classes['footer__social']} ${classes['pr']}`}
				/>
			</div>
		</footer>
    </div>
	);
};

export default Footer;
