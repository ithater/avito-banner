import React, { useContext } from 'react';
import Context from '@/Context';
import styled, { css } from 'styled-components';

import Input from '@components/FormElements/Input';
import TextArea from '@components/FormElements/TextArea';
import Сheckbox from '@components/FormElements/Checkbox';
import {
	Fieldset,
	Legend,
	Holder,
	Label,
} from '@components/FormElements/FormElements';

function TextFieldset() {
	const {
		formValue: {
			bannerText,
			bannerTextWordBreak,
			bannerTextTop,
			bannerTextLeft,
			bannerTextPaddingLeft,
			bannerTextPaddingRight,
			bannerTextFontSize,
			bannerTextLineHeight,
			bannerTextLetterSpacing,
			bannerTextColor,
		},
		setFormValue: {
			setBannerText,
			setBannerTextWordBreak,
			setBannerTextTop,
			setBannerTextLeft,
			setBannerTextPaddingLeft,
			setBannerTextPaddingRight,
			setBannerTextFontSize,
			setBannerTextLineHeight,
			setBannerTextLetterSpacing,
			setBannerTextColor,
		},
	} = useContext(Context);

	return (
		<Fieldset>
			<Legend>Текст</Legend>

			<TextArea
				id="bannerText"
				labelText="Текст баннера"
				state={bannerText}
				setState={setBannerText}
			/>

			<Dropdown active={!!bannerText}>
				<Holder>
					<Label htmlFor="bannerTextColor">Заливка баннера</Label>
					<Input
						type="color"
						id="bannerTextColor"
						state={bannerTextColor}
						setState={setBannerTextColor}
					/>
				</Holder>

				<Holder>
					<Сheckbox
						id="bannerTextWordBreak"
						labelText="Разрыв слов"
						state={bannerTextWordBreak}
						setState={setBannerTextWordBreak}
					/>
				</Holder>

				<Holder>
					<Label htmlFor="bannerTextTop">Позиционирование (y)</Label>
					<Input
						type="number"
						id="bannerTextTop"
						state={bannerTextTop}
						setState={setBannerTextTop}
					/>
				</Holder>
				<Holder>
					<Label htmlFor="bannerTextLeft">Позиционирование (x)</Label>
					<Input
						type="number"
						id="bannerTextLeft"
						state={bannerTextLeft}
						setState={setBannerTextLeft}
					/>
				</Holder>

				<Holder>
					<Label htmlFor="bannerTextPaddingLeft">Отступ слева (px)</Label>
					<Input
						type="number"
						id="bannerTextPaddingLeft"
						state={bannerTextPaddingLeft}
						setState={setBannerTextPaddingLeft}
					/>
				</Holder>

				<Holder>
					<Label htmlFor="bannerTextPaddingRight">Отступ справа (px)</Label>
					<Input
						type="number"
						id="bannerTextPaddingRight"
						state={bannerTextPaddingRight}
						setState={setBannerTextPaddingRight}
					/>
				</Holder>

				<Holder>
					<Label htmlFor="bannerTextFontSize">Размер шрифта (px)</Label>
					<Input
						type="number"
						id="bannerTextFontSize"
						state={bannerTextFontSize}
						setState={setBannerTextFontSize}
					/>
				</Holder>

				<Holder>
					<Label htmlFor="bannerTextLineHeight">Высота линии (px)</Label>
					<Input
						type="number"
						id="bannerTextLineHeight"
						state={bannerTextLineHeight}
						setState={setBannerTextLineHeight}
					/>
				</Holder>

				<Holder>
					<Label htmlFor="bannerTextLetterSpacing">Трекинг (px)</Label>
					<Input
						type="number"
						id="bannerTextLetterSpacing"
						state={bannerTextLetterSpacing}
						setState={setBannerTextLetterSpacing}
					/>
				</Holder>
			</Dropdown>
		</Fieldset>
	);
}

const Dropdown = styled.div`
	max-height: 0;
	transition: 0.5s;
	overflow: hidden;

	${props =>
		props.active &&
		css`
			max-height: 900px;
		`}
`;

export default TextFieldset;
