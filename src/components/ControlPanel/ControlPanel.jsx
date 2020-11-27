import React from 'react';

function ControlPanel() {
	
	
	return (
		<form 
			className="control-panel"
			id="control-panel"
			action="post"

		>
				<fieldset
				className="control-panel-fieldset"
			>
				<legend className="control-panel-fieldset">Баннер</legend>
				
				
				<label htmlFor="slider-width">Ширина баннера (px)</label>
				<input 
					id="slider-width"
					name="slider-width"
					className="control-panel__input"
					type="number"
				/>
				
				<label htmlFor="slider-height">Высота баннера (px)</label>
				<input
					id="slider-height"
					name="slider-height"
					className="control-panel__input"
					type="number"
				/>

				<label htmlFor="slider-background-color">Заливка баннера</label>
				<input
					id="slider-background-color"
					name="slider-background-color"
					className="control-panel__input"
					type="color"
				/>

				
			</fieldset>
			
			<fieldset
				className="control-panel-fieldset"
			>
				<legend className="control-panel-fieldset">Текст</legend>
				
				
				<label htmlFor="slider-text">Текст баннера</label>
				<input 
					id="slider-text"
					name="slider-text"
					className="control-panel__input"
					type="text"
				/>
				
				<label htmlFor="slider-font-size">Размер шрифта (px)</label>
				<input
					id="slider-font-size"
					name="slider-font-size"
					className="control-panel__input"
					type="number"
				/>

				<label htmlFor="slider-font-weight">Насыщенность шрифта</label>
				<input
					id="slider-font-weight"
					name="slider-font-weight"
					className="control-panel__input"
					type="number"
				/>
				
				<label htmlFor="slider-letter-spacing">Трекинг (px)</label>
				<input
					id="slider-letter-spacing"
					name="slider-letter-spacing"
					className="control-panel__input"
					type="number"
				/>

				<label htmlFor="slider-top">Позиционирование (y)</label>
				<input
					id="slider-top"
					name="slider-top"
					className="control-panel__input"
					type="number"
				/>

				<label htmlFor="slider-left">Позиционирование (x)</label>
				<input
					id="slider-left"
					name="slider-left"
					className="control-panel__input"
					type="number"
				/>
			</fieldset>
		</form>
  );
}

export default ControlPanel;
