import React from 'react';

import './solution.styles.scss';

const Solution = ({ reference }) => (
	<div ref={reference} className="section">
		<div class="section-solution">
			<div className="solution-text">
				<div className="solution-description">
					<h3>Solution :</h3>
					<p>Delivering simpler access to therapies</p>
				</div>
				<div className="solution-icons"></div>
				<div className="solution-iconsv2"></div>
				<div className="solution-icons-user"></div>
			</div>
			<div className="systemic-solution">
				<div class="title">
					<h3>A systemic solution for a systemic problem</h3>
				</div>
			</div>
		</div>
	</div>
);

export default Solution;
