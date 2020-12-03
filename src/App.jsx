import React, { useState } from 'react';

import GlobalStyle from '@/GlobalStyle';
import styled from 'styled-components';

import BannerPreview from '@components/BannerPreview/BannerPreview';
import ControlPanel from '@components/ControlPanel/ControlPanel';
import ExportPanel from '@components/ExportPanel/ExportPanel';
import AddIllustration from '@components/AddIllustration/AddIllustration';

import useForm from '@components/Hooks/useForm';

function App() {
	const [form, setForm] = useForm();
	const [openModal, setOpenModal] = useState(false);

	const [bannerHTML, setBannerHTML] = useState('');

	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<BannerPreview setBannerHTML={setBannerHTML} form={form} />
				<ControlPanel form={form} setForm={setForm} />
				<ExportPanel form={form} bannerHTML={bannerHTML} />
				{openModal && (
					<AddIllustration
						form={form}
						setForm={setForm}
						openModal={openModal}
						setOpenModal={setOpenModal}
					/>
				)}
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 250px;
	grid-template-rows: 1fr 46px;
	grid-gap: 20px;
	max-width: 1060px;
	height: calc(100% - 100px);
	margin: 50px auto 0;
	justify-content: center;
`;

export default App;
