import React from 'react';

function ExportPanel() {
  return (
		<div className="export-panel">
			<button className="export-panel__button">
				Экспорт как png
			</button>

			<button className="export-panel__button">
				Экспорт как html
			</button>

			<button className="export-panel__button">
				Экспорт json конфигурацию
			</button>
		</div>
  );
}

export default ExportPanel;
