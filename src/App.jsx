import React from 'react';




import BannerPreview from '@components/BannerPreview/BannerPreview';
import ControlPanel from '@components/ControlPanel/ControlPanel';
import ExportPanel from '@components/ExportPanel/ExportPanel';

function App() {

  return (
		<div className="container">
			<BannerPreview/>
			<ControlPanel/>
			<ExportPanel/>
		</div>
  );
}

export default App;
