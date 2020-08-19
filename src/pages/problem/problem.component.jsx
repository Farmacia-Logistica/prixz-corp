import React from 'react';
import FirstSecProblem from '../../components/first-sec-problem/first-sec-problem.component';

import './problem.styles.scss';

const Problem = ({ reference }) => (
	<div ref={reference} className="problemSection">
		<FirstSecProblem />
	</div>
);

export default Problem;
