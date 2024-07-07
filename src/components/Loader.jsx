import React from 'react';

const Loader = ({ status }) => {
	return (
		<div
			className={`loadingio-spinner-bean-eater-c5w51zuzjiq ${
				status ? 'displayNone' : ''
			}`}
		>
			<div className='ldio-n2v5x7u0v8d'>
				<div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
