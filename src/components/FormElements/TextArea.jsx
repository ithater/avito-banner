import React from 'react';
import styled from 'styled-components';
import { Holder, Label } from '@components/FormElements/FormElements';

const TextArea = props => {
	const { id, state, setState, labelText } = props;

	const onChange = evt => setState(evt.target.value);

	return (
		<Holder>
			<Label htmlFor={id}>{labelText}</Label>
			<TextArea_ id={id} value={state} onChange={onChange} />
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
