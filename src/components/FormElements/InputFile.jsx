import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Holder from '@components/FormElements/Holder';

import uploadIcon from '@/assets/image/upload__icon__img.svg';

const InputFile = props => {
	const { name, form, setForm, labelText } = props;

	const [fileName, setFileName] = useState(null);

	const onChange = evt => {
		const target = evt.target;
		const inputData = target.files[0];
		setFileName(inputData.name);
		console.log(5);

	};


	return (
		<Holder className="control-panel__input-holder">
			<FileLabel htmlFor={name}>
				{
					fileName ? (
						<LabelText single>{fileName}</LabelText>
					) : (
						<>
							<LabelText>{labelText}</LabelText>
							<UploadIcon src={uploadIcon} />
						</>
					)
				}
			</FileLabel>
			<Input name={name} id={name} onChange={onChange} type="file" />
		</Holder>
	);
};

const Input = styled.input`
	display: none;
`;

const FileLabel = styled.label`
	display: flex;
	justify-content: space-between;
	max-width: 100%;
	align-items: center;
	padding: 10px 15px;
	cursor: pointer;
	background-color: rgba(71, 142, 204, 1);
	border-radius: 4px;
	overflow: hidden;
	min-height: 0;
`;

const LabelText = styled.span`
	display: block;
	max-width: 144px;
	font-size: 18px;
	line-height: 24px;
	color: #ffffff;
	text-transform: uppercase;
	text-align: center;

	${props => props.single && css`
    max-width: 100%;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
  `}
`;

const UploadIcon = styled.img`
	width: 28px;
`;

export default InputFile;
