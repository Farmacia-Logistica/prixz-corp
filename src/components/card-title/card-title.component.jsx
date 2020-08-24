import React from 'react';

import './card-title.styles.scss';

const CardTitle = ({
	img,
	alignItems,
	textAlign = 'center',
	title,
	description,
	alt,
	width,
	orientation
}) => (
	<div
		style={{
			textAlign
		}}
		className={
			alignItems +
			' cardSection ' +
			(orientation && orientation === 'vertical' ? orientation : 'horizontal')
		}
	>
		<div className="cardImage">
			<img src={img} alt={alt} />
		</div>
		{title ? (
			<div
				className="cardTitle"
				style={{
					width: width
				}}
			>
				{title ? <h4>{title}</h4> : ''}
				{description ? <p>{description}</p> : ''}
			</div>
		) : (
			''
		)}
	</div>
);

export default CardTitle;
