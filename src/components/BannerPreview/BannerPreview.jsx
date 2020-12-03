import React, { useEffect, useRef } from 'react';

import styled from 'styled-components';

function BannerPreview(props) {
	const { form, setBannerHTML } = props;

	const bannerRef = useRef(null);

	useEffect(() => {
		const bannerHTML = bannerRef.current.outerHTML;
		console.log('bannerHTML: ', bannerHTML);
		setBannerHTML(bannerHTML);
	});

	const bannerStyles = {
		position: 'relative',
		display: 'inline-block',
		width: form['banner-width'] + 'px',
		height: form['banner-height'] + 'px',
		borderRadius: form['banner-border-radius'] + 'px',
		backgroundColor: form['banner-background-color'],
		overflow: 'hidden',
	};

	const textStyles = {
		position: 'absolute',
		top: 'block',
		width: form['banner-text-width'] + 'px',
		height: form['banner-text-height'] + 'px',
		color: 'white',
		margin: '0',
		fontSize: form['banner-text-font-size'] + 'px',
		lineHeight: form['banner-text-line-height'] + 'px',
		maxHeight: form['banner-text-line-height'] * 3 + 'px',
		display: '-webkit-box',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		WebkitBoxOrient: 'vertical',
		WebkitLineClamp: '3',
	};

	const text = form['banner-text'];

	return (
		<BannerPreview_>
			<a
				href={form['banner-link']}
				style={bannerStyles}
				onClick={evt => evt.preventDefault()}
				ref={bannerRef}
			>
				{text && <p style={textStyles}>{text}</p>}
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
`;

export default BannerPreview;
