import { useForm, ValidationError } from '@formspree/react';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Aos from 'aos';


const Form = () => {
	const [state, handleSubmit] = useForm('xbjvgywz');
	const [formSubmitted, setFormSubmitted] = useState(false);

useEffect(() => {
	Aos.init({ duration: 1500 });
}, []);

	const handleFormSubmit = async event => {
		event.preventDefault();
		await handleSubmit(event);
		setFormSubmitted(true);
		setTimeout(() => {
			setFormSubmitted(false);
			event.target.reset();
		}, 2000);
	};

	return (
		<section className='pb-16' id='add' data-aos='zoom-in'>
			<div className='container mx-auto'>
				<h2 className=' text-[#9C27B0] uppercase lg:text-3xl text-2xl font-bold lg:mb-16 mb-8 text-center'>
					Форма обратной связи
				</h2>
				<form
					className='bg-white shadow-xl rounded-md px-8 pt-6 pb-8 mb-4 lg:w-[650px] md:w-[75%] w-[90%] mx-auto'
					onSubmit={handleFormSubmit}
				>
					<div className='mb-4'>
						<label
							className='block text-[#F9C430] text-sm text-start font-bold mb-2'
							htmlFor='name'
						>
							Имя
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='name'
							name='name'
							type='text'
							placeholder='Введите ваше имя'
						/>
						<ValidationError prefix='Name' field='name' errors={state.errors} />
					</div>
					<div className='mb-4'>
						<label
							className='block text-[#F9C430] text-start text-sm font-bold mb-2'
							htmlFor='email'
						>
							Email
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='email'
							name='email'
							type='email'
							placeholder='Введите ваш email'
						/>
						<ValidationError
							prefix='Email'
							field='email'
							errors={state.errors}
						/>
					</div>
					<div className='mb-6'>
						<label
							className='block text-[#F9C430] text-start text-sm font-bold mb-2'
							htmlFor='message'
						>
							Сообщение
						</label>
						<textarea
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='message'
							name='message'
							rows='4'
							placeholder='Введите ваше сообщение'
						/>
						<ValidationError
							prefix='Message'
							field='message'
							errors={state.errors}
						/>
					</div>
					<div className='flex items-center justify-center'>
						<button
							className='bg-[#9C27B0] hover:bg-[#c44cda] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
							type='submit'
							disabled={state.submitting}
						>
							Отправить
						</button>
					</div>
					{formSubmitted && (
						<p className='text-green-500 mt-4 font-bold'>
							Мы свяжемся с вами в ближайшее время!
						</p>
					)}
				</form>
			</div>
		</section>
	);
};

export default Form;
