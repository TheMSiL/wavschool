import { useEffect, useState } from 'react';
import About from '../components/About';
import CookieConsent from './CookieConsent';
import Form from './Form';
import Loader from './Loader';
import Advantages from './advantages/Advantages';
import Course from './course/Course';
import Reviews from './reviews/Reviews';

const MainPage = () => {
	const [showCookieModal, setShowCookieModal] = useState(true);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2500);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (loading) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}
	}, [loading]);

	const handleCookieModalClose = () => {
		setShowCookieModal(false);
	};
	return (
		<div className='wrapper'>
			{loading && <Loader />}
			{!loading && showCookieModal && (
				<CookieConsent onClose={handleCookieModalClose} />
			)}
			<div className='content'>
				<About />
				<Advantages />
				<Course />
				<Form />
				<Reviews />
			</div>
		</div>
	);
};

export default MainPage;
