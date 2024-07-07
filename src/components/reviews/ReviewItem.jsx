const ReviewItem = ({ username, text }) => {
	return (
		<div className='bg-white shadow-xl rounded-md px-8 pt-6 pb-8 mb-4 lg:w-[650px] md:w-[75%] w-[90%] mx-auto'>
			<h4 className='font-bold text-lg mb-5 text-center'>{username}</h4>
			<p className='md:text-base text-justify'>{text}</p>
		</div>
	);
};

export default ReviewItem;
