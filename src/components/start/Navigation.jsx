import { useEffect, useState } from 'react';
import support from '../../assets/support.svg';
import NavItem from './NavItem';

const navItems = [
	{ text: 'О нас', id: 'about' },
	{ text: 'Особености продукта', id: 'advantages' },
	{ text: 'Курс', id: 'course' },
	{ text: 'Присоединиться', id: 'add' },
];

const Navigation = ({ open, setOpen }) => {
	const [activeSection, setActiveSection] = useState(null);

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll('section');
			let currentActive = null;

			sections.forEach(section => {
				const bounding = section.getBoundingClientRect();
				if (bounding.top <= 120 && bounding.bottom >= 120) {
					currentActive = section.id;
				}
			});

			setActiveSection(currentActive);
			setOpen(false);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [setOpen]);
	return (
		<ul
			className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 sm:pl-9 pl-2 transition-all duration-500 ease-linear ${
				open
					? 'md:top-20 top-16 opacity-100 text-center'
					: 'top-[-490px] md:opacity-100 opacity-0'
			}`}
		>
			{navItems.map((item, index) => (
				<NavItem
					key={index}
					text={item.text}
					target={item.id}
					active={activeSection === item.id}
				/>
			))}
			<a
				className='block lg:w-16 w-8 lg:ml-16 md:ml-8 mx-auto hover:scale-110 duration-500'
				href='https://t.me/WVS_Support'
			>
				<img src={support} alt='support' />
			</a>
		</ul>
	);
};

export default Navigation;
