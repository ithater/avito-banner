import React from 'react';

import styled from 'styled-components';

import Holder from '@components/FormElements/Holder';
import Label from '@components/FormElements/Label';

const TextArea = props => {
	const { name, className, labelText, form, setForm } = props;

	const onChange = evt => {
		const target = evt.target;
		const inputData = {};
		inputData[target.name] = target.value;
		setForm({ ...form, ...inputData });
	};

	return (
		<Holder>
			<Label htmlFor={name}>{labelText}</Label>
			<TextArea_
				id={name}
				name={name}
				className={className}
				onChange={onChange}
				value={form['banner-text']}
			/>
		</Holder>
	);
};

const TextArea_ = styled.textarea`
	width: 100%;
	outline: none;
	min-height: 50px;
	max-height: 150px;
	padding: 5px;
	font-size: 17px;
	border: none;
	border-radius: 4px;

	transition: box-shadow 0.3s, border 0.3s;
	box-shadow: 0 0 0 1px rgba(71, 142, 204, 0);
	border: 1px solid transparent;
	&:focus {
		box-shadow: 0 0 0 1px rgba(71, 142, 204, 1);
		border: 1px solid rgba(71, 142, 204, 1);
	}
	resize: vertical;
`;

export default TextArea;
