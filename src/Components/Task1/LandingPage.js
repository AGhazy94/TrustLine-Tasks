import React from 'react';
import classes from './LandingPage.module.css';
import Header from './Header/Header';
import Services from './Services/Services';
import Team from './Team/Team';
import Why from './Why/Why';
import Clients from './Clients/Clients';
import News from './News/News';
import Footer from './Footer/Footer';

const LandingPage = () => {
	return (
		<div dir="rtl">
			<Header />
			<div className={classes['wrapper']}>
				<Why />
				<Services />
				<Team />
			</div>
			<Clients />
			<News />
			<Footer />
		</div>
	);
};

export default LandingPage;
