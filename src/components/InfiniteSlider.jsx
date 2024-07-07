import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReviewItem from './reviews/ReviewItem';

const InfiniteSlider = ({ reviews }) => {
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 700,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
	};

	return (
		<Slider {...sliderSettings}>
			{reviews.map(({ username, text }) => (
				<ReviewItem key={username} username={username} text={text} />
			))}
		</Slider>
	);
};

export default InfiniteSlider;
