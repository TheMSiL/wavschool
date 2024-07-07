import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import design from '../../assets/Design inspiration-bro.png';


const Advantages = () => {
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);
	return (
		<section className='md:py-16 py-10' id='advantages' data-aos='fade-up'>
			<div className='container mx-auto'>
				<h2 className='uppercase lg:text-3xl text-2xl font-bold lg:mb-16 mb-8 text-center text-[#F9c430]'>
					Наши Преимущества
				</h2>
				<div className='grid lg:grid-cols-3 justify-items-center items-center'>
					<div>
						<div className='lg:max-w-md hover:shadow-lg p-5 rounded-md hover:bg-[#F9c430] duration-500'>
							<h4 className='mb-4 font-bold text-lg text-[#9C27B0] tracking-[0.15rem]'>
								Практическая направленность
							</h4>
							<p className='text-justify text-white tracking-[0.10rem]'>
								Наш продукт фокусируется на практических навыках. Вы будете
								создавать реальные проекты и применять полученные знания
								непосредственно на практике.
							</p>
						</div>
						<div className='lg:max-w-md hover:shadow-lg p-5 rounded-md hover:bg-[#F9c430] lg:mt-32 mt-8 duration-500'>
							<h4 className='mb-4 font-bold text-lg text-[#9C27B0] tracking-[0.15rem]'>
								Актуальные тенденции
							</h4>
							<p className='text-justify text-white tracking-[0.10rem]'>
								Мир дизайна постоянно меняется, и мы следим за последними
								тенденциями и инструментами, чтобы обеспечить вас актуальной
								информацией и навыками.
							</p>
						</div>
					</div>
					<div className='h-full'>
						<div className='lg:max-w-md hover:shadow-lg p-5 rounded-md hover:bg-[#F9c430] duration-500'>
							<h4 className='mb-4 font-bold text-lg text-[#9C27B0] tracking-[0.15rem]'>
								Готовность к карьерному росту
							</h4>
							<p className='text-justify text-white tracking-[0.10rem]'>
								Наш пакет предоставит вам базу для развития в сфере графического
								дизайна, будь то начало карьеры или повышение уровня ваших
								навыков.
							</p>
						</div>
						<img src={design} className='w-[75%] mx-auto' />
						<div className='lg:max-w-md hover:shadow-lg p-5 rounded-md hover:bg-[#F9c430] lg:mt-32 mt-8 duration-500'>
							<h4 className='mb-4 font-bold text-lg text-[#9C27B0] tracking-[0.15rem]'>
								Для кого
							</h4>
							<p className='text-justify text-white tracking-[0.10rem]'>
								Новичков в дизайне, Хобби-дизайнеров, Предпринимателей, Фрилансеров, Свитчеров, Самосовершенствующихся, и, естественно, для всех других, кого
								нет в этом списке
							</p>
						</div>
					</div>
					<div>
						<div className='lg:max-w-md hover:shadow-lg p-5 rounded-md hover:bg-[#F9c430] duration-500'>
							<h4 className='mb-4 font-bold text-lg text-[#9C27B0] tracking-[0.15rem]'>
								Гибкий график обучения
							</h4>
							<p className='text-justify text-white tracking-[0.10rem]'>
								Все материалы из курсов доступы вам после оплаты сразу и вы
								можете заниматься в любое удобное для вас время
							</p>
						</div>
						<div className='lg:max-w-md hover:shadow-lg p-5 rounded-md hover:bg-[#F9c430] lg:mt-32 mt-8 duration-500'>
							<h4 className='mb-4 font-bold text-lg text-[#9C27B0] tracking-[0.15rem]'>
								Долгосрочная поддержка
							</h4>
							<p className='text-justify text-white tracking-[0.10rem]'>
								Наш пакет предоставит вам базу для развития в сфере графического
								дизайна, будь то начало карьеры или повышение уровня ваших
								навыков.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Advantages;
