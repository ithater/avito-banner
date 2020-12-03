import React, { useState, useRef } from 'react';

import styled from 'styled-components';

import closeIcon from '@/assets/image/close__img.svg';

function AddIllustration(props) {
	const [openType, setOpenType] = useState('link');

	const { form, setForm, setOpenModal } = props;

	const dialogRef = useRef(null);
	const closeBtnRef = useRef(null);

	const CloseModal = evt => {
		const target = evt.target;
		if ((target !== dialogRef.current) & (target !== closeBtnRef.current))
			return;
		setOpenModal(false);
	};

	return (
		<Wrapper ref={dialogRef} onClick={CloseModal}>
			<Dialog>
				<CloseBtn ref={closeBtnRef} onClick={CloseModal} />
				<Holder>
					<UploadOption>Ссылкой</UploadOption>
					<UploadOption>DATA64 URI</UploadOption>
					<UploadOption>Загрузить</UploadOption>
				</Holder>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis enim
					harum eligendi sapiente quaerat, facilis quae ea beatae nisi eveniet
					sequi dolorum quis! Repudiandae unde voluptatem cupiditate quo libero
					consequuntur.
				</p>
			</Dialog>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 10;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.7);
`;

const Dialog = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	max-width: 500px;
	padding: 50px;
	border-radius: 8px;
	background-color: #ffffff;
	z-index: 15;
`;

const CloseBtn = styled.button`
	position: absolute;
	top: 20px;
	right: 20px;
	height: 20px;
	width: 20px;
	border: none;
	background: url(${closeIcon}) center / 20px 20px no-repeat;
	background-color: transparent;
`;

const Holder = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 25px;
`;

const UploadOption = styled.button`
	padding: 10px;
	font-size: 16px;
	font-weight: 500;
	color: #ffffff;
	border-radius: 4px;
	background-color: #c0c9ff;
	border: none;
	text-transform: uppercase;
`;



export default AddIllustration;
