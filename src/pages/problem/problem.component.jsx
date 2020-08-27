import React from 'react';
import FirstSecProblem from '../../components/problem/first-sec-problem/first-sec-problem.component';
import { Fade } from 'react-awesome-reveal';
const Problem = ({ reference }) => (
	<Fade direction="right">
		<div className="section" ref={reference}>
			<FirstSecProblem />
		</div>
	</Fade>
);

export default Problem;
