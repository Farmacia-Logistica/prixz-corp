import React from 'react';

import './square-info.styles.scss';

const SquareInfo = ({ fontSize, widthText = '100%', marginLeft, textAlign = null, text }) => (
	<div
		className="square"
		style={{
			fontSize,
			textAlign
		}}
	>
		<h3
			style={{
				width: widthText,
				marginLeft
			}}
		>
			{text}
		</h3>
	</div>
);

export default SquareInfo;
