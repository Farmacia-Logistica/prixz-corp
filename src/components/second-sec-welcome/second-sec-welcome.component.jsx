import React from 'react';

import './second-sec-welcome.styles.scss';

const SecondSecWelcome = () => (
	<div className="section">
		<div className="info-container">
			<div className="info">
				<h2>
					Pharmacies
					<br />
					have not
					<br />
					changed much
				</h2>
				<p>and it's not working...</p>
			</div>
		</div>
		<div className="comparative-images">
			<div className="images">
				<div className="old-pharmacy">
					<div className="image"></div>
				</div>
				<div className="new-pharmacy">2</div>
			</div>
		</div>
		<div className="vertical-bar"></div>
	</div>
);

export default SecondSecWelcome;
