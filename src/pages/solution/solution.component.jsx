import React from 'react';
import FirstSecSolution from '../../components/solution/first-sec-solution/first-sec-solution.component';
import { Slide } from 'react-awesome-reveal';
class Solution extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<Slide>
				<div className="section" ref={this.props.reference}>
					<FirstSecSolution />
				</div>
			</Slide>
		);
	}
}

export default Solution;
