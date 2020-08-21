import React from 'react';
import FirstSecProblem from '../../components/problem/first-sec-problem/first-sec-problem.component';
const Problem = ({ reference }) => (
	<div ref={reference} className="section">
		<FirstSecProblem />
	</div>
);

export default Problem;
