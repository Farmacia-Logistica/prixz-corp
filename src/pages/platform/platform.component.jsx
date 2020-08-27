import React from 'react';
import FirstSecPlatform from '../../components/platform/first-sec-platform/first-sec-platform.component';
import SECTIONS_DATA from '../../data/sections.data';
import { Fade } from 'react-awesome-reveal';
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
					<Fade key={index} direction={section.direction}>
						<div className="section" ref={index === 0 ? this.props.reference : null}>
							<FirstSecPlatform {...section} />
						</div>
					</Fade>
				))}
			</React.Fragment>
		);
	}
}
export default Platform;
