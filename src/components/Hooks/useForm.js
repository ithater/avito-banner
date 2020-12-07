import { useState } from 'react';

function useForm() {
	const [bannerLink, setBannerLink] = useState(''),
		[bannerWidth, setBannerWidth] = useState(141),
		[bannerHeight, setBannerHeight] = useState(181),
		[bannerBorderRadius, setBannerBorderRadius] = useState(10),
		[bannerBackgroundColor, setBannerBackgroundColor] = useState('#ffc0cb'),
		
		[bannerText, setBannerText] = useState('Введите текст'),
		[bannerTextColor, setBannerTextColor] = useState('#ffffff'),
		[bannerTextWordBreak, setBannerTextWordBreak] = useState(false),
		[bannerTextFontSize, setBannerTextFontSize] = useState(20),
		[bannerTextLineHeight, setBannerTextLineHeight] = useState(24),
		[bannerTextLetterSpacing, setBannerTextLetterSpacing] = useState(0),
		[bannerTextTop, setBannerTextTop] = useState(0),
		[bannerTextLeft, setBannerTextLeft] = useState(0),
		[bannerTextPaddingLeft, setBannerTextPaddingLeft] = useState(0),
		[bannerTextPaddingRight, setBannerTextPaddingRight] = useState(0),
		
		[bannerImageString, setBannerImageString] = useState(''),
		[bannerImageTop, setBannerImageTop] = useState(0),
		[bannerImageLeft, setBannerImageLeft] = useState(0),
		[bannerImageHeight, setBannerImageHeight] = useState(100),
		[bannerImageWidth, setBannerImageWidth] = useState(50),
		[bannerImageWidthAuto, setBannerImageWidthAuto] = useState(true),
		[bannerImageHeightAuto, setBannerImageHeightAuto] = useState(false);

	const formValue = {
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
		bannerTextPaddingRight,
		bannerImageString,
		bannerImageTop,
		bannerImageLeft,
		bannerImageHeight,
		bannerImageWidth,
		bannerImageWidthAuto,
		bannerImageHeightAuto,
	};

	const setFormValue = {
		setBannerLink,
		setBannerWidth,
		setBannerHeight,
		setBannerBorderRadius,
		setBannerBackgroundColor,
		setBannerText,
		setBannerTextColor,
		setBannerTextWordBreak,
		setBannerTextFontSize,
		setBannerTextLineHeight,
		setBannerTextLetterSpacing,
		setBannerTextTop,
		setBannerTextLeft,
		setBannerTextPaddingLeft,
		setBannerTextPaddingRight,
		setBannerImageString,
		setBannerImageTop,
		setBannerImageLeft,
		setBannerImageHeight,
		setBannerImageWidth,
		setBannerImageWidthAuto,
		setBannerImageHeightAuto,
	};
	return [formValue, setFormValue];
}

export default useForm;
