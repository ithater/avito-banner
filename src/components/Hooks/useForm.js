import { useState } from 'react';

function useForm() {
	const [form, setForm] = useState({
		'banner-link': '',
		'banner-width': '141',
		'banner-height': '181',
		'banner-border-radius': '10',
		'banner-background-color': '#FFC0CB',
		'banner-text': 'Введите свой текст',
		'banner-text-font-size': '20',
		'banner-text-line-height': '24',
		'banner-text-font-weight': '',
		'banner-text-letter-spacing': '0',
		'banner-text-top': '0',
		'banner-text-left': '0',
	});
	
	return [form, setForm];
}

export default useForm;