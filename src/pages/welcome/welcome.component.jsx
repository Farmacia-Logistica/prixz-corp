import React from 'react';
import FirstSecWelcome from '../../components/first-sec-welcome/first-sec-welcome.component';
import './welcome.styles.scss';
import Fade from 'react-reveal/Fade';
const Welcome = () => (
	<div className="container-welcome">
		<Fade left>
			<FirstSecWelcome />
		</Fade>
	</div>
);

export default Welcome;
