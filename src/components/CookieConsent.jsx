import { NavLink } from 'react-router-dom';

const CookieConsent = ({ onClose }) => {
	const handleAccept = () => {

		localStorage.setItem('cookieConsent', '1');
		onClose();
	};


	const isConsentGiven = localStorage.getItem('cookieConsent') === '1';

	if (isConsentGiven) {
		return null;
	}

	return (
		<div className='modal'>
			<div className='modal-content'>
				<div className='md:mr-4 mb-4 lg:w-[70%] w-full'>
					<h4 className='font-bold lg:text-start text-xl mb-6'>
						Уведомление об использовании файлов cookie
					</h4>
					<p className='md:text-lg text-start'>
						Наш сайт использует файлы cookie, чтобы улучшить работу сайта,
						повысить его эффективность и удобство. Продолжая использовать сайт,
						вы соглашаетесь на использование файлов cookie.
					</p>
				</div>
				<div className='grid xl:w-[25%] md:w-1/2'>
					<button
						className='bg-[#F9C430] text-white font-bold duration-500 p-2 rounded-md mb-4 mr-6 hover:scale-105'
						onClick={handleAccept}
					>
						Принять
					</button>
					<NavLink
						to={'/privacy-policy'}
						className='duration-500 hover:text-[#F9C430] text-center'
					>
						Политика конфиденциальности
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default CookieConsent;
