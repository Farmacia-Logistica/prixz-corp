import React from 'react';
import BlockHorizontalColor from '../../block-horizontal-color/block-horizontal-color.component';

import './first-sec-platform.styles.scss';
const FirstSecPlatform = ({ icons, descriptions, backgroundImage }) => (
	<div className="sectionPlatform">
		<div className="sectionDescription">
			<div className="title">
				<h4>Prixz Platform</h4>
			</div>
			<div className="icons">
				<div className="vertical-text">
					<h1>For:</h1>
				</div>
				<div className="space-icons">
					{icons.map((icon, index) => (
						<div key={index} className="group-icon">
							<div className="icon">
								<img src={icon.imageSrc} alt={icon.title} />
							</div>
							<div className="description">
								<h4>{icon.title}</h4>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="descriptions">
				{descriptions.map((description, index) => (
					<div key={index} className="groupDescription">
						<h3>{description.title}</h3>
						<div className="blockColor">
							<BlockHorizontalColor width="30px" height="7px" backgroundColor="#fdc5a2" />
						</div>
						<div className="activities">
							<ul>
								{description.activities.map((activity, index) => (
									<li key={index}>{activity}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
		<div
			className="sectionImage"
			style={{
				backgroundImage: `url(${backgroundImage})`
			}}
		></div>
	</div>
);

export default FirstSecPlatform;
