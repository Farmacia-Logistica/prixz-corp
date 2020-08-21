import React from 'react';
import FirstSecPlatform from '../../components/platform/first-sec-platform/first-sec-platform.component';
import SECTIONS_DATA from '../../data/sections.data';
class Platform extends React.Component {
	constructor() {
		super();
		this.state = {
			sections: SECTIONS_DATA
		};
	}
	render() {
		return (
			<React.Fragment>
				{this.state.sections.map((section, index) => (
					<div key={index} className="section">
						<FirstSecPlatform {...section} />
					</div>
				))}
			</React.Fragment>
		);
	}
}
export default Platform;
