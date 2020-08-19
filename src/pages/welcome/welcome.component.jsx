import React from 'react';
import FirstSecWelcome from '../../components/first-sec-welcome/first-sec-welcome.component';
import './welcome.styles.scss';
const Welcome = ({ reference }) => (
	<div className="container-welcome" ref={reference}>
		<FirstSecWelcome />
	</div>
);

export default Welcome;
