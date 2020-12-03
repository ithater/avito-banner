import React from 'react';

import styled from 'styled-components';

import Holder from '@components/FormElements/Holder';
import Label from '@components/FormElements/Label';

const Input = props => {
	const { name, labelText, form, setForm, type } = props;

	const onChange = evt => {
		const target = evt.target;
		const inputData = {};
		inputData[target.name] = target.value;
		setForm({ ...form, ...inputData });
	};

	return (
		<Holder>
			<Label htmlFor={name}>
				{labelText}
			</Label>
			<Input_
				id={name}
				name={name}
				onChange={onChange}
				value={form[name]}
				type={type}
			/>
		</Holder>
	);
};


const Input_ = styled.input`
	width: 100%;
	outline: none;
	border: none;
	border-radius: 4px;
	padding: 5px;
	font-size: 17px;
	transition: box-shadow 0.3s, border 0.3s;
	box-shadow: 0 0 0 1px rgba(71, 142, 204, 0);
	border: 1px solid transparent;
	&:focus {
		box-shadow: 0 0 0 1px rgba(71, 142, 204, 1);
		border: 1px solid rgba(71, 142, 204, 1);
	}

	${props => {
		if (props.type === 'color')
			return `
				padding: 0px 2px;
				height: 30px;
			`;
	}}
`;

export default Input;
