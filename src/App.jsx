import React, { useState, useRef } from 'react';
import Context from '@/Context';
import GlobalStyle from '@/GlobalStyle';
import styled from 'styled-components';

import BannerPreview from '@components/BannerPreview/BannerPreview';
import ControlPanel from '@components/ControlPanel/ControlPanel';
import ExportPanel from '@components/ExportPanel/ExportPanel';

import useForm from '@components/Hooks/useForm';

function App() {
	const [formValue, setFormValue] = useForm();
	const [bannerHTML, setBannerHTML] = useState('');

	const bannerRef = useRef('');

	return (
		<Context.Provider value={{ formValue, setFormValue }}>
			<GlobalStyle />
			<Wrapper>
				<BannerPreview
					bannerRef={bannerRef}
					formValue={formValue}
					setBannerHTML={setBannerHTML}
				/>

				<ControlPanel />

				<ExportPanel
					bannerRef={bannerRef}
					formValue={formValue}
					bannerHTML={bannerHTML}
				/>
			</Wrapper>
		</Context.Provider>
	);
}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 250px;
	grid-template-rows: 1fr 46px;
	grid-gap: 20px;
	max-width: 1060px;
	height: 100%;
	padding-top: 50px;
	padding-bottom: 50px;
	margin: auto;
	justify-content: center;

	@media (max-width: 1200px) {
		max-width: 900px;

	}

	@media (max-width: 960px) {
		display: block;
		height: auto;
		max-width: 750px;
	}

	@media (max-width: 768px) {
		display: block;
		height: auto;
		max-width: 90%;
	}

	@media (max-height: 600px) {
		grid-template-rows: 500px 46px;
		height: auto;
	}
	
	


	
`;

export default App;
