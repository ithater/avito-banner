import React from 'react';

import styled from 'styled-components';



import Holder from '@components/FormElements/Holder';
import Label from '@components/FormElements/Label';

const Select = (props) => {
	const { name, form, setForm, options, labelText } = props;

	const onChange = (evt) => {
		const target = evt.target;
		const inputData = {};
		inputData[target.name] = target.value;
		console.log(inputData);
		setForm({ ...form, ...inputData });
	};

	return (
		<Holder>
			<Label htmlFor={name}>
				{labelText}
			</Label>

			<Select_
				id={name}
				name={name}
				onChange={onChange}
				value={form[name]}
			>
				{options.map(({ text, value }) => (
					<option key={value} value={value}>{text}</option>
				))}
			</Select_>
		</Holder>
	);
};

const Select_ = styled.select`
	width: 100%;
	outline: none;
	border: none;
	border-radius: 4px;
	padding: 5px;
	font-size: 16px;
	transition: box-shadow 0.3s, border 0.3s;
	box-shadow: 0 0 0 1px rgba(71, 142, 204, 0);
	border: 1px solid transparent;
	&:focus {
		box-shadow: 0 0 0 1px rgba(71, 142, 204, 1);
		border: 1px solid rgba(71, 142, 204, 1);
	}
`;

export default Select;
