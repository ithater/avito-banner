import React, { useContext } from 'react';
import Context from '@/Context';
import styled, { css } from 'styled-components';

import Input from '@components/FormElements/Input';
import InputFile from '@components/FormElements/InputFile';
import Checkbox from '@components/FormElements/Checkbox';
import {
	Fieldset,
	Legend,
	Holder,
	Label,
} from '@components/FormElements/FormElements';

const validateImageInput = (evt, setState) => {
	const value = evt.target.value;
	if (value.trim() === '') {
		setState('');
		return;
	}

	const hrefRegex = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/;
	const base64ImageRegex = /(data:image\/[^;]+;base64[^"]+)/i;
	const isHref = hrefRegex.test(value);
	const isBase64Image = base64ImageRegex.test(value);

	const isValid = isHref || isBase64Image;
	if (isValid) setState('valid');
	else setState('invalid');
	return isValid;
};

function ImageFieldset() {
	const {
		formValue: {
			bannerImageString,
			bannerImageTop,
			bannerImageLeft,
			bannerImageWidth,
			bannerImageHeight,
			bannerImageWidthAuto,
			bannerImageHeightAuto,
		},
		setFormValue: {
			setBannerImageString,
			setBannerImageTop,
			setBannerImageLeft,
			setBannerImageHeight,
			setBannerImageWidth,
			setBannerImageWidthAuto,
			setBannerImageHeightAuto,
		},
	} = useContext(Context);

	return (
		<Fieldset classid="control-panel__fieldset">
			<Legend classid="control-panel__legend">Иллюстрация</Legend>

			<Holder>
				<Label htmlFor="bannerImageString">Ссылка или BASE64 строка</Label>
				<Input
					type="text"
					id="bannerImageString"
					state={bannerImageString}
					setState={setBannerImageString}
					validate={validateImageInput}
					deleteText
				/>
			</Holder>

			<InputFile
				id="bannerUploadFile"
				labelText="загрузить"
				state={bannerImageString}
				setState={setBannerImageString}
			/>

			<Dropdown active={!!bannerImageString}>
				<Holder>
					<Label htmlFor="bannerImageTop">Позиционирование (y) (px)</Label>
					<Input
						type="number"
						id="bannerImageTop"
						state={bannerImageTop}
						setState={setBannerImageTop}
					/>
				</Holder>

				<Holder>
					<Label htmlFor="bannerImageLeft">Позиционирование (x) (px)</Label>
					<Input
						type="number"
						id="bannerImageLeft"
						state={bannerImageLeft}
						setState={setBannerImageLeft}
					/>
				</Holder>

				<Holder>
					<Label htmlFor="bannerImageWidth">Ширина (px)</Label>
					<Row>
						<Input
							type="number"
							id="bannerImageWidth"
							labelText="Ширина (px)"
							state={bannerImageWidth}
							setState={setBannerImageWidth}
						/>
						<Checkbox
							labelText="auto"
							id="bannerImageWidthAuto"
							state={bannerImageWidthAuto}
							setState={setBannerImageWidthAuto}
						/>
					</Row>
				</Holder>

				<Holder>
					<Label htmlFor="bannerImageHeight">Высота (px)</Label>
					<Row>
						<Input
							type="number"
							id="bannerImageHeight"
							labelText="Высота (px)"
							state={bannerImageHeight}
							setState={setBannerImageHeight}
							small
						/>
						<Checkbox
							labelText="auto"
							id="bannerImageHeightAuto"
							state={bannerImageHeightAuto}
							setState={setBannerImageHeightAuto}
						/>
					</Row>
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
			max-height: 500px;
		`}
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default ImageFieldset;
