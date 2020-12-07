import React from 'react';
import styled from 'styled-components';

import { Holder } from '@components/FormElements/FormElements';

import uploadIcon from '@/assets/image/upload__icon__img.svg';

const InputFile = props => {
	const { id, setState, labelText } = props;

	const onChange = evt => {
		const target = evt.target;
		const inputData = target.files[0];
		if (!inputData.type.startsWith('image')) return;
		
		const reader = new FileReader();
    reader.readAsDataURL(inputData);
    reader.onload = () => setState(reader.result);
    reader.onerror = error => console.error(error);
	};

	return (
		<Holder>
			<FileLabel htmlFor={id}>
				<LabelText>{labelText}</LabelText>
				<UploadIcon src={uploadIcon} />
			</FileLabel>
			<Input id={id} onChange={onChange} />
		</Holder>
	);
};

const Input = styled.input.attrs({ type: 'file' })`
	display: none;
`;

const FileLabel = styled.label`
	display: flex;
	justify-content: space-around;
	max-width: 100%;
	align-items: center;
	padding: 10px 15px;
	cursor: pointer;
	background-color: rgba(71, 142, 204, 1);
	border-radius: 4px;
	overflow: hidden;
`;

const LabelText = styled.span`
	display: block;
	font-size: 18px;
	line-height: 24px;
	color: #ffffff;
	text-transform: uppercase;
	text-align: center;
`;

const UploadIcon = styled.img`
	width: 28px;
`;

export default InputFile;
