import React from 'react';
import Card from './Card';
import classes from './News.module.css';
import articlePhoto1 from '../../../Images/News/article3.png';
import articlePhoto2 from '../../../Images/News/article2.png';
import articlePhoto3 from '../../../Images/News/article1.png';

const News = () => {
	return (
		<section className={`${classes['news']}`}>
			<h3 className={`${classes['news__heading']} blueLine`}>الأخبار</h3>
			<div className={`${classes['news__cards']}`}>
				<Card
					img={articlePhoto1}
					heading={
						'الأمن السيبراني في عام 2022 - نظرة جديدة على بعض الإحصائيات المقلقة للغاية'
					}
					preview={
						'شهد العامان الماضيان تحولًا سريعًا في العمل إلى المكاتب البعيدة والمختلطة. تظهر الإحصاءات'
					}
				/>
				<Card
					img={articlePhoto2}
					heading={'لماذا يعتبر أمان التطبيق مهمًا للأعمال؟'}
					preview={
						'تطبيقات البرمجيات هي مكونات أساسية لنجاح المنظمة. لسوء الحظ ، بينما التطبيق'
					}
				/>
				<Card
					img={articlePhoto3}
					heading={'حشد الأمن - هل هو بديل للاختراق؟'}
					preview={
						'نمت شعبية برامج الأمن الجماعي إلى الحد الذي وصلت إليه بعض الشركات'
					}
				/>
			</div>
		</section>
	);
};

export default News;
