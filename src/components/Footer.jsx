import instagram from '../assets/Instagram.svg';
import { NavLink } from 'react-router-dom';
import email from '../assets/email.svg';
import telegram from '../assets/telegram.svg';

const footerLinks = [
	{
		img: email,
		text: 'wavschool.sup@gmail.com',
		src: 'mailto:wavschool.sup@gmail.com',
	},
	{
		img: telegram,
		text: 'Support',
		src: 'https://t.me/WVS_Support',
	},
	{
		img: instagram,
		text: 'Instagram',
		src: 'https://instagram.com/wav_school?igshid=OGQ5ZDc2ODk2ZA==',
	},
	{
		img: telegram,
		text: 'WaV School',
		src: 'https://t.me/WaV_School_Courses',
	},
];

const Footer = () => {
	return (
		<footer className='bg-white shadow-lg w-full py-6 px-6'>
			<div className='container mx-auto'>
				<ul className='lg:flex items-center grid sm:grid-cols-2 sm:justify-center xl:space-x-32 space-x-0 ld:space-x-4 gap-6 flex-wrap '>
					{footerLinks.map(({ img, text, src }) => (
						<li className='xl:mb-0' key={text}>
							<a
								href={src}
								className='flex items-center hover:scale-105 font-bold sm:text-lg text-base duration-500 hover:text-[#F9C430]'
							>
								<img className='lg:w-10 w-8 mr-3' src={img} alt={text} />
								{text}
							</a>
						</li>
					))}
				</ul>
				<div className='flex md:items-center items-start gap-4 md:flex-row flex-col pt-6 pb-2 justify-center '>
					<NavLink
						to={'/offer-agreement'}
						className='duration-500 hover:text-[#F9C430] md:mr-10'
					>
						Договор-оферта
					</NavLink>
					<NavLink
						to={'/privacy-policy'}
						className='duration-500 hover:text-[#F9C430] md:mr-10'
					>
						Политика конфиденциальности
					</NavLink>
					<NavLink
						to={'/return-policy'}
						className='duration-500 hover:text-[#F9C430]'
					>
						Политика возврата и обмена
					</NavLink>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
