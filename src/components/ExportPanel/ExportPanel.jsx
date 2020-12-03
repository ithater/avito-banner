import React, { useState } from 'react';

import styled from 'styled-components';

import { CopyToClipboard } from 'react-copy-to-clipboard';

function ExportPanel(props) {
	const { bannerHTML, form } = props;

	const [isExportedHTML, setIsExportedHTML] = useState(false);
	const [isExportedPNG, setIsExportedPNG] = useState(false);
	const [isExportedJSON, setIsExportedJSON] = useState(false);

	const onCopy = set => {
		set(true);
		setTimeout(set, 800, false);
	};

	const exportPNG = () => {};

	return (
		<ExportPanel_>
			<ExportButton onClick={}>
				Экспорт PNG
				{isExportedPNG && <CopiedNotification>Скопировано</CopiedNotification>}
			</ExportButton>

			<CopyToClipboard
				onCopy={() => onCopy(setIsExportedHTML)}
				text={bannerHTML}
			>
				<ExportButton>
					Экспорт HTML
					{isExportedHTML && (
						<CopiedNotification>Скопировано</CopiedNotification>
					)}
				</ExportButton>
			</CopyToClipboard>

			<CopyToClipboard
				onCopy={() => onCopy(setIsExportedJSON)}
				text={JSON.stringify(form)}
			>
				<ExportButton>
					Экспорт JSON
					{isExportedJSON && (
						<CopiedNotification>Скопировано</CopiedNotification>
					)}
				</ExportButton>
			</CopyToClipboard>
		</ExportPanel_>
	);
}

const ExportPanel_ = styled.div`
	display: flex;
	justify-content: space-between;
	border-radius: 8px;
	grid-row: 2 / 3;
`;

const ExportButton = styled.button`
	position: relative;
	z-index: 10;
	font-style: normal;
	font-weight: 500;
	font-size: 22px;
	line-height: 28px;
	letter-spacing: 1px;
	color: #fff;
	padding: 7px;
	border: none;
	outline: none;
	border-radius: 8px;
	background-color: #478ecc;

	@media (hover: hover) and (pointer: fine) {
		transition: 0.3s;
		&:hover {
			background-color: #256199;
		}
	}
`;

const CopiedNotification = styled.span`
	display: block;
	position: absolute;
	z-index: 5;
	left: 50%;
	bottom: calc(100% + 6px);
	padding: 3px;
	border-radius: 4px;
	font-size: 18px;
	transform: translate(-50%);
	background-color: #333333;
	&:before {
		content: '';
		position: absolute;
		display: block;
		top: 100%;
		left: 50%;
		transform: translate(-50%);
		height: 0;
		border: 5px solid transparent;
		border-top-color: #333333;
	}
`;

export default ExportPanel;
