import hero from '../assets/hero.webp';

const About = () => {
	return (
		<section className='mt-28 md:py-16 py-2 ' id='about'>
			<div className='container mx-auto lg:flex justify-between items-center'>
				<div className='text-start lg:max-w-2xl mx-auto px-2'>
					<h1 className='xl:text-6xl text-5xl font-bold tracking-[0.5rem] mb-8 text-[#F9C430] text-center'>
						WaV School
					</h1>
					<p className='xl:tracking-[0.25rem] tracking-[0.15rem] xl:leading-7 leading-5 xl:text-xl lg:text-lg md:text-base text-sm mb-3 text-justify md:max-w-none max-w-[400px] mx-auto'>
						Мы - школа дизайна “WaV School” представляем собой сообщество
						активных, целеустремленных и амбициозных людей, точно таких-же, как
						и вы! Раз вы читаете этот текст, значит вы хотите развить, улучшить,
						или обрести новые навыки в сфере веб-дизайна.
					</p>
					<p className='xl:tracking-[0.25rem] tracking-[0.15rem] xl:leading-7 leading-5 xl:text-xl lg:text-lg text-base mb-3 text-justify md:block hidden'>
						Именно для вас, друзья и коллеги, мы собрали многосторонние курсы и
						скомпоновали их в один уникальный пакет. По нашему опыту мы знаем
						насколько трудно бороться с конкуренцией на рынке, насколько трудно
						отыскать качественную информацию и доказать клиентам что вы именно
						тот, кто им нужен… А, если и можно, то почти за все деньги мира.
					</p>
					<p className='xl:tracking-[0.25rem] tracking-[0.15rem] xl:leading-7 leading-5 xl:text-xl lg:text-lg text-base mb-3 text-justify md:block hidden'>
						Ставя за цель решить вышеперечисленные проблемы и поспособствовать
						вашему процветанию в этой сфере, мы предлагаем вам этот продукт и
						обещаем: Все будет WaV
					</p>
				</div>
				<img
					className='md:w-[40vw] sm:w-[60vw] mx-auto'
					src={hero}
					alt='WaV School'
					loading='lazy'
				/>
			</div>
		</section>
	);
};

export default About;
