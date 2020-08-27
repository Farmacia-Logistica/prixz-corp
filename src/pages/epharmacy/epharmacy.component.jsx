import React from 'react';
import ListPage from '../../components/list-page/list-page.component';

import './epharmacy.styles.scss';
import { Fade } from 'react-awesome-reveal';
class Epharmacy extends React.Component {
	constructor() {
		super();
		this.state = {
			listOptions: {
				title: 'ePharmacy: ',
				subtitle:
					'Technological platform that integrates all industry participants to provide complete treatments to patients.',
				options: [
					{
						boldText: '',
						text:
							'Integration of third parties (pharmacies, wholesalers, insurance companies, pharmaceutical companies)'
					},
					{
						boldText: '',
						text: 'Inventory collection point & Real-time stocks'
					},
					{
						boldText: '',
						text:
							'Compliance with all Sanitary Regulations:  (OTC, Rx, psychotropic and specialty) Cold Network.'
					},
					{
						boldText: '',
						text: 'Digital marketing: SEO, Mailing, CRM., Prices & promotions, Ux'
					},
					{
						boldText: '',
						text: 'Custom stores'
					},
					{
						boldText: '',
						text: 'Contact Center'
					},
					{
						boldText: '',
						text: 'Administration of treatments for chronic patients'
					},
					{
						boldText: '',
						text: 'Marketplaces'
					},
					{
						boldText: '',
						text: 'Health content generation.'
					},
					{
						boldText: '',
						text: 'Complementary product sampling'
					},
					{
						boldText: '',
						text: 'Price management'
					}
				]
			}
		};
	}

	render() {
		return (
			<Fade direction="right">
				<div className="section" ref={this.props.reference}>
					<ListPage {...this.state.listOptions} />
				</div>
			</Fade>
		);
	}
}

export default Epharmacy;
