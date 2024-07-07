import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ds from '../../assets/3ds.png';
import illustrator from '../../assets/adobe-illustrator.svg';
import photoshop from '../../assets/adobe-photoshop.svg';
import after from '../../assets/after-effect.svg';
import blender from '../../assets/blender.png';
import course from '../../assets/course.webp';
import hand from '../../assets/hand.svg';
import Dropdown from '../Dropdown';
import PaymentForm from '../PaymentForm';

const structure = [
	{
		img: photoshop,
		text: 'Photoshop : 4 полноценных курса ',
		dropdownContent: [
			'Общий курс "от Нуля до Про"',
			'Цифровое рисование и игровые объекты',
			'Коллаж и коллаж интерьера',
			'Маски в Photoshop',
		],
	},
	{
		img: illustrator,
		text: 'Illustrator : 4 полноценных курса ',
		dropdownContent: [
			'Общий курс по Векторной иллюстрации',
			'Геймдев и мультяшные персонажи',
			'Реалистичные персонажи',
			'Дизайн одежды и эскизов',
		],
	},
	{
		img: after,
		text: 'After Effects : 4 полноценных курса ',
		dropdownContent: [
			'Быстрый старт, визуальные эффекты',
			'Общий курс по анимации',
			'Морфинг',
			'Сториз, создание и анимация логотипов',
		],
	},
	{
		img: ds,
		text: 'Autodesk 3ds MAX : 4 полноценных курса ',
		dropdownContent: [
			'Общий курс по 3Ds Max',
			'Интеграция 3D графики в видео',
			'Анимация различных персонажей с учетом физики',
			'Создание растительного окружения',
		],
	},
	{
		img: blender,
		text: 'Blender : 4 полноценных курса по Blender ',
		dropdownContent: [
			'Общий курс для новичков',
			'Расширенные возможности Blender',
			'Cоздание пейзажей и окружения',
			'Моделирование твердотельных поверхностей',
		],
	},
	{
		img: hand,
		text: '3 курса по Плагинам, Шаблонам, Шрифтам и Паттернам с возможностью загрузить различные инструменты ',
		dropdownContent: ['Неоновые шрифты, 3D инфографика, кисти и другое'],
	},
];

const Course = () => {
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);
	return (
		<section className='md:py-16 py-10' id='course'>
			<div className='container mx-auto flex lg:flex-row flex-col-reverse items-center justify-between'>
				<div className='lg:w-[40vw] sm:w-[60vw]'>
					<img src={course} alt='WaV School' loading='lazy' />
				</div>
				<div className='lg:max-w-xl max-w-lg p-2' data-aos='fade-up'>
					<h2 className=' text-[#9C27B0] uppercase lg:text-3xl text-2xl font-bold lg:mb-10 mb-6 text-center'>
						Содержимое пакета:
					</h2>
					<div className='shadow-md p-4 w-[75%] bg-white rounded-md mx-auto mb-4 flex items-center flex-col space-y-4 justify-center'>
						<p className='font-bold line-through text-gray-400'>
							Было: 179.99$
						</p>
						<p className='font-bold '>Стало: 149.99$</p>
						<p className='font-bold text-[#9C27B0] text-center'>
							+ бесплатное сопровождение
						</p>
						<PaymentForm />
					</div>
					<p className='md:text-xl text-base'>
						Приобретая данный пакет с курсами вы получите доступ к следующим
						категориям курсов:
					</p>
					<div className='my-8'>
						{structure.map(item => (
							<Dropdown item={item} key={item.text} />
						))}
					</div>
					<p className='text-white md:text-xl text-base font-bold text-center'>
						А также бонусный курс по созданию графики с помощью ИИ
					</p>
				</div>
			</div>
		</section>
	);
};

export default Course;
