import React from 'react';
import styled from 'styled-components';

import BannerFieldset from './BannerFieldset';
import TextFieldset from './TextFieldset';
import ImageFieldset from './ImageFieldset';

function ControlPanel() {

	return (
		<ControlPanel_
			id="control-panel"
			action="post"
			encType="multipart/form-data"
		>
			<Wrapper>
				<BannerFieldset />
				<TextFieldset />
				<ImageFieldset />
			</Wrapper>
		</ControlPanel_>
	);
}

const ControlPanel_ = styled.form`
	grid-row: 1 / 3;
	padding: 20px 5px 20px 10px;
	border-radius: 8px;
	background: #d3d3d3;

	@media (max-width: 960px) {
		margin-bottom: 50px;
	}
`;


const Wrapper = styled.div`
	margin-bottom: 5px;
	font-size: 24px;
	font-weight: bold;
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	padding-right: 5px;
	&::-webkit-scrollbar {
		width: 3px;
		&-track {
			background: #b9b9b9;
			border-radius: 8px;
		}
		&-thumb {
			background: #478ecc;
			border-radius: 8px;
		}
	}

	@media (max-width: 1200px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
`;


export default ControlPanel;
