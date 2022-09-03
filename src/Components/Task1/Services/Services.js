import React from 'react';
import Card from './Card';
import classes from './Services.module.css';
import redTeam from '../../../Images/Services/people.png';
import penTest from '../../../Images/Services/trending-up.png';
import shield from '../../../Images/Services/shield.png';
import code from '../../../Images/Services/code.png';
import computer from '../../../Images/Services/keyboard-open.png';

const Services = () => {
	return (
			<section className={`${classes['services']}`} dir="rtl">
				<div className={`${classes['services__lead']}`}>
					<h3 className={`${classes['services__heading']} blueLine`}>
						الخدمات والحلول
					</h3>
					<p className={`${classes['services__text']}`}>
						نقدم خدمات وحلول احترافية في مجال الأمن السيبراني
					</p>
				</div>
				<Card
					cardImg={redTeam}
					imgText={'الفريق الأحمر'}
					cardText={
						'مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان.'
					}
				/>
				<Card
					cardImg={penTest}
					imgText={'تقييم الضعف'}
					cardText={
						'مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان.'
					}
				/>
				<Card
					cardImg={shield}
					imgText={'المصادر الأمنية'}
					cardText={
						'مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان.'
					}
				/>
				<Card
					cardImg={code}
					imgText={'مراجعة كود المصدر'}
					cardText={
						'مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان.'
					}
				/>
				<Card
					cardImg={computer}
					imgText={'فحص الموقع والجوال'}
					cardText={
						'مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان.'
					}
				/>
			</section>
	);
};

export default Services;
