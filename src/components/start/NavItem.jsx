import { Link } from 'react-scroll';

const NavItem = ({ text, target, active }) => {
	return (
		<li
			className={`lg:ml-8 md:ml-4 lg:my-0 my-10 font-bold lg:text-lg text-base cursor-pointer duration-300 hover:text-[#F9C430] ${
				active ? 'active' : ''
			}`}
		>
			<Link to={target} smooth={true} offset={-120} duration={500}>
				{text}
			</Link>
		</li>
	);
};

export default NavItem;
