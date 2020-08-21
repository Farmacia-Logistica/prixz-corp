import React from 'react';
import BlockHorizontalColor from '../block-horizontal-color/block-horizontal-color.component';

import './card-description.styles.scss';

const CardDescription = ({
	title,
	description,
	marginTopTitle,
	widthParagraph,
	widthBlock,
	heightBlock,
	backgroundColorBlock
}) => (
	<div className="cardGroup">
		<h1
			style={{
				marginTop: marginTopTitle
			}}
		>
			{title}
		</h1>
		<div className="blockColor">
			<BlockHorizontalColor
				width={widthBlock}
				height={heightBlock}
				backgroundColor={backgroundColorBlock}
			/>
		</div>
		<p
			style={{
				width: widthParagraph
			}}
		>
			{description}
		</p>
	</div>
);

export default CardDescription;
