import React from 'react';
import styled, { css } from 'styled-components';

const Checkbox = props => {
	const { labelText, id, state, setState } = props;

	const onChange = evt => setState(evt.target.checked);
	const onClick = () => setState(!state);

	return (
		<Wrapper>
			<Checkbox_ onChange={onChange} id={id} checked={state} />
			<FakeCheckbox onClick={onClick} checked={state} />
			<Label htmlFor={id}>{labelText}</Label>
		</Wrapper>
	);
};

const Wrapper = styled.span`
	display: flex;
	align-items: center;
	padding-left: 10px;

`;

const FakeCheckbox = styled.button.attrs({ type: 'button' })`
	width: 20px;
	height: 20px;
	padding: 0;
	margin-right: 10px;
	border-radius: 4px;
	border: 1px solid #333333;
	outline: none;
	transition: 0.2s;

	${props =>
		props.checked &&
		css`
			background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')
				center / 20px 20px no-repeat;
			background-color: #008cff;
		`}
`;

const Label = styled.label`
	font-size: 17px;
	font-weight: 500;
	cursor: pointer;
`;

const Checkbox_ = styled.input.attrs({ type: 'checkbox' })`
	display: none;
`;

export default Checkbox;
