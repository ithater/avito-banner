import React from 'react';

import Input from '@components/FormElements/Input';
import Select from '@components/FormElements/Select';
import TextArea from '@components/FormElements/TextArea';
import InputFile from '@components/FormElements/InputFile';

import styled from 'styled-components';

function ControlPanel(props) {
	const { form, setForm } = props;

	return (
		<ControlPanel_
			id="control-panel"
			action="post"
			encType="multipart/form-data"
		>
			<Wrapper>
				<Fieldset>
					<Legend>Баннер</Legend>

					<Input
						type="text"
						name="banner-link"
						labelText="Ссылка банера"
						setForm={setForm}
						form={form}
					/>

					<Input
						type="number"
						name="banner-width"
						labelText="Ширина баннера (px)"
						form={form}
						setForm={setForm}
					/>

					<Input
						type="number"
						name="banner-height"
						labelText="Высота баннера (px)"
						setForm={setForm}
						form={form}
					/>

					<Input
						type="number"
						name="banner-border-radius"
						labelText="Скругления баннера (px)"
						setForm={setForm}
						form={form}
					/>

					<Input
						type="color"
						name="banner-background-color"
						className="control-panel__input control-panel__input--color"
						defaultValue="#000000"
						labelText="Заливка баннера"
						form={form}
						setForm={setForm}
					/>
				</Fieldset>

				<Fieldset>
					<Legend>Текст</Legend>

					<TextArea
						name="banner-text"
						className="control-panel__input control-panel__input--textarea"
						labelText="Текст баннера"
						text="Введите ваш текст"
						form={form}
						setForm={setForm}
					/>

					<Input
						type="number"
						name="banner-text-font-size"
						labelText="Размер шрифта (px)"
						form={form}
						setForm={setForm}
					/>

					<Input
						type="number"
						name="banner-text-line-height"
						labelText="Высота линии (px)"
						form={form}
						setForm={setForm}
					/>

					<Select
						name="banner-text-font-style-and-weight"
						labelText="Начертание шрифта"
						form={form}
						setForm={setForm}
						options={[
							{ value: '700italic', text: '700italic' },
							{ value: 'regular', text: 'regular' },
						]}
					/>

					<Input
						type="number"
						name="banner-text-letter-spacing"
						labelText="Трекинг (px)"
						form={form}
						setForm={setForm}
					/>

					<Input
						type="number"
						name="banner-text-top"
						labelText="Позиционирование (y)"
						form={form}
						setForm={setForm}
					/>

					<Input
						type="number"
						name="banner-text-left"
						labelText="Позиционирование (x)"
						form={form}
						setForm={setForm}
					/>
				</Fieldset>

				<Fieldset className="control-panel__fieldset">
					<Legend className="control-panel__legend">Иллюстрация</Legend>
					<InputFile
						name="banner-illustration"
						form={form}
						labelText="Добавить иллюстрацию"
						setForm={setForm}
					/>
				</Fieldset>
			</Wrapper>
		</ControlPanel_>
	);
}

const ControlPanel_ = styled.form`
	grid-row: 1 / 3;
	padding: 20px 5px 20px 10px;
	border-radius: 8px;
	background: #d3d3d3;
`;
const Fieldset = styled.fieldset`
	width: 100%;
	min-width: 0;
	border: none;
	padding: 0;
	margin: 0;
	&:not(:last-child) {
		margin-bottom: 10px;
	}
`;
const Legend = styled.legend`
	margin-bottom: 5px;
	font-size: 24px;
	font-weight: bold;
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
`;

export default ControlPanel;
