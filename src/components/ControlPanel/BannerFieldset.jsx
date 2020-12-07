import React, { useContext } from 'react';
import Context from '@/Context';


import Input from '@components/FormElements/Input';
import {
	Fieldset,
	Legend,
	Holder,
	Label,
} from '@components/FormElements/FormElements';

function BannerFieldset() {
	const {
		formValue: {
			bannerLink,
			bannerWidth,
			bannerHeight,
			bannerBorderRadius,
			bannerBackgroundColor,
		},
		setFormValue: {
			setBannerLink,
			setBannerWidth,
			setBannerHeight,
			setBannerBorderRadius,
			setBannerBackgroundColor,
		},
	} = useContext(Context);

	return (
		<Fieldset>
			<Legend>Баннер</Legend>

			<Holder>
				<Label htmlFor="bannerLink">Ссылка банера</Label>
				<Input
					type="text"
					id="bannerLink"
					state={bannerLink}
					setState={setBannerLink}
				/>
			</Holder>

			<Holder>
				<Label htmlFor="bannerWidth">Ширина баннера (px)</Label>
				<Input
					type="number"
					id="bannerWidth"
					state={bannerWidth}
					setState={setBannerWidth}
				/>
			</Holder>

			<Holder>
				<Label htmlFor="bannerHeight">Высота баннера (px)</Label>
				<Input
					type="number"
					id="bannerHeight"
					state={bannerHeight}
					setState={setBannerHeight}
				/>
			</Holder>

			<Holder>
				<Label htmlFor="bannerBorderRadius">Скругления баннера (px)</Label>
				<Input
					type="number"
					id="bannerBorderRadius"
					state={bannerBorderRadius}
					setState={setBannerBorderRadius}
				/>
			</Holder>

			<Holder>
				<Label htmlFor="bannerBackgroundColor">Заливка баннера</Label>
				<Input
					type="color"
					id="bannerBackgroundColor"
					state={bannerBackgroundColor}
					setState={setBannerBackgroundColor}
				/>
			</Holder>
		</Fieldset>
	);
}

export default BannerFieldset;
