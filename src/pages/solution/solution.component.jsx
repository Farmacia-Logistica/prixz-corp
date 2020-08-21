import React from 'react';
import FirstSecSolution from '../../components/solution/first-sec-solution/first-sec-solution.component';

class Solution extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="section">
				<FirstSecSolution />
			</div>
		);
	}
}

export default Solution;
