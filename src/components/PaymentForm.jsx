import { useState } from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize('G-GVM35QZCX9');

const PaymentForm = () => {
	const [selectedPayment, setSelectedPayment] = useState('');

	const handlePaymentSelect = event => {
		setSelectedPayment(event.target.value);
	};

	const handleBtnClick = () => {
		ReactGA.event({
			test: 'TEST CLICK',
		})
	}

	return (
		<div>
			<select
				value={selectedPayment}
				onChange={handlePaymentSelect}
				className='w-full mt-2 p-2 rounded-md border'
			>
				<option value=''>Выберите метод оплаты</option>
				<option value='crypto'>Криптовалюта</option>
				<option value='crypto'>Электронный кошелек</option>
				<option value='card'>Банковская карта</option>
			</select>
			{selectedPayment === 'crypto' && (
				<a
					onClick={handleBtnClick}
					href='https://pay.interkassa.com/form/6ce01b62-302a-483c-83e4-5275743a13cc'
					className='bg-[#9C27B0] text-white font-bold w-full duration-500 hover:bg-[#af51c0] p-2 rounded-md flex justify-center items-center mt-4'
				>
					Купить
				</a>
			)}
			{selectedPayment === 'card' && (
				<a
					onClick={handleBtnClick}
					href='https://pay.interkassa.com/form/6ce01b62-302a-483c-83e4-5275743a13cc'
					className='bg-[#F9C430] text-white font-bold w-full duration-500 hover:bg-[#f7cf64] p-2 rounded-md flex justify-center items-center mt-4'
				>
					Купить
				</a>
			)}
		</div>
	);
};

export default PaymentForm;
