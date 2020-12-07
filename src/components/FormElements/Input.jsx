import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Input = props => {
	const { id, state, setState, type, validate, deleteText } = props;

	let validationState, setValidationState;

	if (validate) {
		[validationState, setValidationState] = useState('');
	}

	const onChange = evt => {
		if (validate) validate(evt, setValidationState);
		setState(evt.target.value);
	};

	const onDelete = () => {
		setState('');
	};

	return (
		<Wrapper>
			<Input_
				isValid={validationState}
				type={type}
				id={id}
				value={state}
				onChange={onChange}
				disabled={state.length >= 2000}
			/>

			{deleteText && state && <DeleteText onClick={onDelete}>удалить</DeleteText>}
		</Wrapper>
	);
};

const Wrapper = styled.span`
	position: relative;
	display: block;
`;

const DeleteText = styled.button.attrs({ type: 'button' })`
	position: absolute;
	display: block;
	top: 50%;
	right: 4px;
	transform: translateY(-50%);
	padding: 4px;
	border-radius: 4px;
	font-size: 12px;
	letter-spacing: 0.5px;
	text-transform: uppercase;
	outline: none;
	border: none;
	color: #ffffff;
	background-color: #f54444;
`;

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
			return css`
				padding: 0px 2px;
				height: 30px;
			`;
	}}

	${props => {
		if (props.isValid === 'invalid')
			return css`
				box-shadow: 0 0 0 1px rgba(255, 50, 0, 0.8);
				&:focus {
					box-shadow: 0 0 0 1px rgba(255, 50, 0, 0.8);
					border: 1px solid rgba(255, 50, 0, 0.8);
				}
			`;
		else if (props.isValid === 'valid')
			return css`
				box-shadow: 0 0 0 1px rgba(0, 255, 0, 0.8);
				&:focus {
					box-shadow: 0 0 0 1px rgba(0, 255, 0, 0.8);
					border: 1px solid rgba(0, 255, 0, 0.8);
				}
			`;
	}}
`;

export default Input;
