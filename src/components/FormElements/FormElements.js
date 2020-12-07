import styled, { css } from 'styled-components';

const Holder = styled.div`
	max-width: 100%;
	padding-left: 5px;
	padding-right: 5px;
	margin-bottom: 10px;
	
`;

const Label = styled.label`
	display: block;
	font-size: 15px;
	font-weight: 500;
	letter-spacing: 0.5px;
	margin-bottom: 2px;
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
	@media (max-width: 960px) {
		max-width: 300px;
	}
`;

const Legend = styled.legend`
	margin-bottom: 5px;
	font-size: 24px;
	font-weight: bold;
`;

export { Holder, Label, Fieldset, Legend };
