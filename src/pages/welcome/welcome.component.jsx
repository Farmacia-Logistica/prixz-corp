import React from 'react';
import FirstSecWelcome from '../../components/welcome/first-sec-welcome/first-sec-welcome.component';
import { Fade } from 'react-awesome-reveal';
const Welcome = ({ reference }) => (
	<Fade direction="left">
		<div className="section" ref={reference}>
			<FirstSecWelcome />
		</div>
	</Fade>
);

export default Welcome;
