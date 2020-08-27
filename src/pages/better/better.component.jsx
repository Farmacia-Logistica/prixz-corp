import React from 'react';
import FirstSecBetter from '../../components/better/first-sec-better/first-sec-better.component';
import { Fade } from 'react-awesome-reveal';

const Better = ({ reference }) => (
	<Fade direction="right">
		<div className="section" ref={reference}>
			<FirstSecBetter />
		</div>
	</Fade>
);

export default Better;
