import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.webp';
import Navigation from './Navigation';

const Header = () => {
	const [open, setOpen] = useState(false);
	const [scrolling, setScrolling] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 150) {
			setScrolling(true);
		} else {
			setScrolling(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className='container mx-auto'>
			<header className='shadow-md w-full fixed top-0 left-0 z-10'>
				<nav
					className={`flex items-center justify-between ${
						open ? 'bg-white' : scrolling ? 'bg-white' : 'bg-transparent'
					} py-4 px-7 ${open ? 'border-b-2 border-[#9aaeca]' : 'border-b-0'}`}
				>
					<NavLink to='/' className='inline-block'>
						<img
							className='lg:w-40 sm:w-28 w-20 hover:scale-110 duration-500'
							src={logo}
							alt='WaV School'
						/>
					</NavLink>
					<div
						onClick={() => {
							setOpen(!open);
						}}
						className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
					>
						<ion-icon name={open ? 'close-outline' : 'menu-outline'}></ion-icon>
					</div>
					<Navigation open={open} setOpen={setOpen} />
				</nav>
			</header>
		</div>
	);
};

export default Header;
