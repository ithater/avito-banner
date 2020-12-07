import React, { useEffect } from 'react';

import styled from 'styled-components';

function BannerPreview(props) {
	const {
		formValue: {
			bannerLink,
			bannerWidth,
			bannerHeight,
			bannerBorderRadius,
			bannerBackgroundColor,
			bannerText,
			bannerTextColor,
			bannerTextWordBreak,
			bannerTextFontSize,
			bannerTextLineHeight,
			bannerTextLetterSpacing,
			bannerTextTop,
			bannerTextLeft,
			bannerTextPaddingLeft,
			bannerTextPaddingTop,
			bannerTextPaddingRight,
			bannerImageString,
			bannerImageTop,
			bannerImageLeft,
			bannerImageWidth,
			bannerImageHeight,
			bannerImageWidthAuto,
			bannerImageHeightAuto,
		},
		bannerRef,
		setBannerHTML,
	} = props;

	const bannerStyles = {
		width: bannerWidth + 'px',
		height: bannerHeight + 'px',
		borderRadius: bannerBorderRadius + 'px',
		backgroundColor: bannerBackgroundColor,

		position: 'relative',
		display: 'inline-block',
		overflow: 'hidden',
	};

	const imageStyles = {
		top: bannerImageTop + 'px',
		left: bannerImageLeft + 'px',
		width: bannerImageWidthAuto ? 'auto' : bannerImageWidth + 'px',
		height: bannerImageHeightAuto ? 'auto' : bannerImageHeight + 'px',
		position: 'absolute',
		zIndex: '5',
	};

	const textStyles = {
		top: bannerTextTop + 'px',
		left: bannerTextLeft + 'px',
		letterSpacing: bannerTextLetterSpacing + 'px',
		color: bannerTextColor,
		fontSize: bannerTextFontSize + 'px',
		lineHeight: bannerTextLineHeight + 'px',
		maxHeight: bannerTextLineHeight * 3 + 'px',
		paddingLeft: bannerTextPaddingLeft + 'px',
		paddingTop: bannerTextPaddingTop + 'px',
		paddingRight: bannerTextPaddingRight + 'px',
		wordBreak: bannerTextWordBreak ? 'break-all' : 'normal',
		position: 'absolute',
		zIndex: '10',
		width: '100%',
		margin: '0',
		color: 'white',
		overflow: 'hidden',
		fontFamily: 'sans-serif',
	};

	useEffect(() => setBannerHTML(bannerRef.current.outerHTML));

	return (
		<BannerPreview_>
			<a
				href={bannerLink}
				style={bannerStyles}
				onClick={evt => evt.preventDefault()}
				ref={bannerRef}
			>
				<p style={textStyles}>{bannerText}</p>
				{bannerImageString && (
					<img src={bannerImageString} style={imageStyles} />
				)}
			</a>
		</BannerPreview_>
	);
}

const BannerPreview_ = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	grid-row: 1 / 2;
	border-radius: 8px;
	background: #d3d3d3;
	overflow: auto;
	padding: 50px;

	@media (max-width: 960px) {
		height: 500px;
		margin-bottom: 50px;
	}
`;

export default BannerPreview;
