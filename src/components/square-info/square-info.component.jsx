import React from 'react';

import './square-info.styles.scss';

const SquareInfo = ({ widthText = '100%', marginLeft, textAlign, backgroundColor, children }) => (
	<div
		className="square"
		style={{
			backgroundColor,
			textAlign
		}}
	>
		<h3
			style={{
				width: widthText,
				marginLeft
			}}
		>
			{children}
		</h3>
	</div>
);

export default SquareInfo;
