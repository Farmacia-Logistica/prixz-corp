import React from 'react';
import ListPage from '../../components/list-page/list-page.component';
import './logistics.styles.scss';
import { Fade } from 'react-awesome-reveal';
class Logistics extends React.Component {
	constructor() {
		super();
		this.state = {
			listOptions: {
				title: 'Logistics :',
				subtitle: '',
				options: [
					{
						boldText: 'Delivery man & Cast crew',
						text: ''
					},
					{
						boldText: 'Order management system: ',
						text:
							'We have a system that integrates mobile applications for tracking and managing orders and delivery routes.'
					},
					{
						boldText: 'Route Optimization:',
						text: 'We take care that all orders take the best possible route'
					},
					{
						boldText: 'License to handle all types of medications.',
						text: ''
					},
					{
						boldText: 'Profitability optimization:',
						text:
							'By making the Home Service more efficient, we offer our clients cost reduction in the delivery of their orders.'
					},
					{
						boldText: 'Real-time order monitoring:',
						text:
							"We verify, step by step, the status of each order: from the moment it is created on any of the platforms, until it is delivered to the customer's door."
					},
					{
						boldText: 'Verification of compliance with all Sanitary Regulations: ',
						text:
							'For us it is important to comply with all sanitary regulations to provide a safe service to our clients.'
					}
				]
			}
		};
	}
	render() {
		return (
			<Fade direction="left">
				<div className="section" ref={this.props.reference}>
					<ListPage {...this.state.listOptions} />
				</div>
			</Fade>
		);
	}
}

export default Logistics;
