import React from 'react';
import classes from './Navbar.module.css';
import logo from '../../../Images/Logo-white.png';

const Navbar = () => {
	return (
		<nav className={classes['nav']}>
			<div className={classes['nav__btn']}>
				<a className={classes['nav__btn--lang']} href="/#">
					ENG
				</a>
				<a className={classes['nav__btn--login']} href="/#">
					دخول
				</a>
			</div>
			<ul className={classes['nav__list']}>
				<li className={classes['nav__list--item']}>
					<a href="/#" className={classes['nav__list--link']}>
						تواصل معنا
					</a>
				</li>
				<li className={classes['nav__list--item']}>
					<a href="/#" className={classes['nav__list--link']}>
						آلية العمل
					</a>
				</li>
				<li className={classes['nav__list--item']}>
					<a href="/#" className={classes['nav__list--link']}>
						لماذا ترست لاين؟
					</a>
				</li>
				<li className={classes['nav__list--item']}>
					<a href="/#" className={classes['nav__list--link']}>
						ترست لاين
					</a>
				</li>
			</ul>
			<img src={logo} alt="Trustline Logo" className={classes['nav__logo']} />
		</nav>
	);
};

export default Navbar;
