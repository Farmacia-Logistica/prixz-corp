import React from 'react';
import FirstSecWelcome from '../../components/welcome/first-sec-welcome/first-sec-welcome.component';
const Welcome = ({reference}) => (
	<div ref={reference} className="section">
		<FirstSecWelcome />
	</div>
);

export default Welcome;
