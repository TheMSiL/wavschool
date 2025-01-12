const points = [
	{
		title: 'Предмет договора',
		text: [
			'Предмет договора определяет, какая услуга предоставляется заказчику. Бывает, что услуга включает большой перечень «под-услуг», в таком случае все действия, которые должны быть оплачены, перечисляются каждый отдельно.',
			'Услуга предоставляется в полном объеме, предусмотренном Исполнителем.',
			'• Срок предоставления услуг не может превышать 6 месяцев по одному договору, но не может быть меньше 10 рабочих дней.',
			'• Услуга предоставляется по разработкам и требованиям Исполнителя.',
			'• Услуга может быть предоставлена онлайн или офлайн, но обязательно по предварительной договоренностью сторон Договора предоставления образовательных услуг.',
			'Эта информация ляжет в основу акта приема-передачи оказанных услуг.',
		],
	},
	{
		title: 'Цена',
		text: [
			'Цена может быть фиксирована и устанавливаться по договоренности сторон, или содержать порядок и способы ее определение.',
			'Цена фиксированная, и указана в условиях Договора предоставления образовательных услуг.',
			'Услуга содержит под-услуги с разной ценой и этапами выполнения или если способ определения цены сложен, ее выносят в приложение с полным перечнем услуг и конкретной ценой за каждую услугу по Договору предоставление образовательных услуг.',
		],
	},
	{
		title: 'Способ оплаты:',
		text: [
			'• Полная предоплата.',
			'Но обязательно по дополнительной договоренности сторон договора. Окончательные условия прописаны в Договоре предоставление образовательных услуг.',
		],
	},
	{
		title: 'Способы оплаты за услугу могут быть:',
		text: [
			'• VISA',
			'• MasterCard - Interkassa',
			'• Иные указанные в окне оплаты',

			'Исполнитель имеет право потребовать оплату в любой момент, а заказчик обязан осуществить оплату не позднее 1 дня с момента получения такого требования (ч. 2 ст. 530 ГКУ).',
			'Денежные обязательства на территории Украины следует выполнять в гривнах (ч. 1 ст. 533 ГКУ), но допускается использование денежного эквивалента в валюте (ч. 2 ст. 524 ГКУ).',
			'Такие моменты предусмотрены в договоре, тогда в день оплаты заказчик оплачивает услугу в гривнах по текущему курсу доллара США или евро.',
		],
	},
	{
		title:
			'Расторжение договора предоставления образовательных услуг и возврат денежных средств',
		text: [
			'Статья 651 ГК Украины предусматривает, что изменение или расторжение договора допускается только при согласие сторон, если иное не установлено договором или законом. Это свидетельствует о запрете одностороннего отказа от договора за исключением, которые могут быть установлены договором или законом.',
			'Таким исключением может быть договор о предоставлении услуг, согласно ст.907 ГК Украины может быть расторгнут путем одностороннего отказа от договора порядке и по основаниям, предусмотренных законом.',
			'Следовательно, односторонний отказ от договора о предоставлении услуг может происходить в трех случаях:',
			'• По основаниям, установленным ГК Украины;',
			'• По основаниям, установленным другим законом;',
			'• По договоренности сторон.',
			'В статье 615 ГК Украины предусматривается, что «в случае нарушения обязательства одной стороной вторая сторона имеет право частично или в полном объеме отказаться от обязательства».',
			'Такие обстоятельства могут возникнуть в случае:',
			'• Нарушение обязательства одной из сторон договора о предоставлении услуг;',
			'• Односторонний отказ от обязательства частично или в полном объеме, если соответственно изменяются условия обязательства или оно прекращается.',
			'Правом одностороннего отказа от договора о предоставлении услуг наделен не только заказчик, но и исполнитель.',
			'Согласно ст.615 ГК Украины исполнитель в таких случаях имеет право отказаться от исполнения договора о предоставлении услуг при условии нарушения договора заказчиком.',
		],
	},
	{
		title: 'Возврат денежных средств возможен при:',
		text: [
			'Письменном уведомлении о намерении отказаться от выполнения условий договора предоставления образовательных услуг Исполнителя.',
			'- Уведомление о намерении вернуть средства принимается в случае ненаступления образовательных услуг.',
			'- Заказчик имеет право в течение 3 (трёх) календарных дней с момента начала предоставления услуги (начала проведения курса) отказаться от услуг Исполнителя, если такие услуги не оправдали ожидания. В таком случае средства, уплаченные Заказчиком, возвращаются в полном объеме в течение 30 (тридцати) календарных дней.',
			'Дополнительно к письменному заявлению о возврате денежных средств необходимо добавить:',
			'• Копии паспорта, ИНН плательщика;',
			'• Копию квитанции о перечислении денежных средств на текущий денежный счет исполнителя с отчетливо видимыми датой и номером квитанции.',
		],
	},
];

const ReturnPolicy = () => {
	return (
		<>
			<div className='content mt-28 md:py-16 py-2 container mx-auto px-4 lg:px-0'>
				<h1 className='md:text-2xl text-xl font-bold tracking-[0.5rem] mb-4 text-[#F9C430] text-center'>
					ПОЛИТИКА ВОЗВРАТА И ОБМЕНА
				</h1>
				<h4 className='font-bold tracking-[0.25rem] text-[#9C27B0] mb-4'>
					Сроки и определения в договоре предоставления образовательных услуг
					Исполнитель доводит до сведения возможного участника договора
					предоставления образовательных услуг (заказчика) к существенным
					условиям сотрудничества и подписанию соответствующих документов
					(договора и других)
				</h4>
				<p className='font-bold tracking-[0.15rem] mb-4'>
					Определения в договоре расшифровывают, чтобы стороны одинаково
					понимали их значение.
				</p>
				<p className='font-bold text-justify'>
					Согласно ст. 901 ГК Украины по договору о предоставлении услуг одна
					сторона (исполнитель) по заданию другой стороны (заказчика) обязуется
					предоставить услугу при совершении определенного действия или
					совершении определенной деятельности, а заказчик обязуется оплатить
					ее, если иное не установлено договором. Правоотношения, возникающие
					при оказании и получении услуг, регламентируются рядом законодательных
					и подзаконных актов К ним можно отнести законы «Об аудиторской
					деятельности» от 22.04.1993 г., «О телекоммуникациях» от 18.11.2003
					г., Положение о закупке товаров работ и услуг за государственные
					средства, утвержденное постановлением КМУ от 17.10.2008 г. № 921
					(редакции постановления от 19.11.2008 г. № 1017), приказ Госстандарта
					«Об утверждении Правил обязательной сертификации гостиничных услуг» от
					27.01.99 г. (в редакции приказа Госпотребстандарта от 03.09.2007 г. №
					207), приказ Минобразования, Минэкономики, Минфина «О утверждение
					Порядка предоставления платных услуг государственными учебными
					заведениями» от 27.10.1997 г. и т.п.
				</p>
				<div>
					{points.map(({ title, text }) => (
						<div key={title}>
							<h4 className='font-bold my-4 md:text-lg text-base'>{title}</h4>
							{text.map(item => (
								<p
									key={item}
									className='text-justify md:text-base text-sm my-2'
								>
									{item}
								</p>
							))}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default ReturnPolicy;
