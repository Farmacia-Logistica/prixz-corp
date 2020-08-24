import React from 'react';

import './list-page.styles.scss';
const ListPage = ({ title, subtitle, options }) => (
	<div className="listContainer">
		<div className="listTitle">
			<h1>{title}</h1>
		</div>
		{subtitle ? (
			<div className="listSubtitle">
				<h2>{subtitle}</h2>
			</div>
		) : (
			''
		)}
		<div className="listOption">
			<ul>
				{options.map((option, index) => (
					<li key={index}>
						<span
							style={{
								fontWeight: 'bold'
							}}
						>
							{option.boldText}
						</span>
						<span>{option.text}</span>
					</li>
				))}
			</ul>
		</div>
	</div>
);

export default ListPage;
