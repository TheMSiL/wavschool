import { useState } from 'react';
import arrowDown from '../assets/arrow-down.svg';
import arrowUp from '../assets/arrow-up.svg';

const Dropdown = ({ item }) => {
	const [isOpen, setIsOpen] = useState(false);
	

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='flex items-center space-x-6 mb-3'>
			<img className='md:w-8 w-6' src={item.img} alt={item.text} />
			<div className='relative' onClick={toggleDropdown}>
				<div className='flex items-center space-x-2 cursor-pointer'>
					<a className='text-start md:text-lg text-base '>{item.text}</a>
					<img src={!isOpen ? arrowDown : arrowUp} />
				</div>
				{isOpen && (
					<div className='absolute p-3 bg-white shadow-md z-10 rounded-md' >
						<ul className='grid space-y-2 mt-2'>
							{item.dropdownContent.map((dropDown, index) => (
								<li key={index} className='text-[#9C27B0] font-bold text-start'>
									{dropDown}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Dropdown;
