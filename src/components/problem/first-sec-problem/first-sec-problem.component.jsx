import React from 'react';
import SquareInfo from '../../square-info/square-info.component';
import CardTitle from '../../card-title/card-title.component';
import './first-sec-problem.styles.scss';
import Pharmacy from '../../../assets/icons/pharmacy.png';
import Insurance from '../../../assets/icons/insurance.png';
import Wholesaler from '../../../assets/icons/wholesaler.png';
import PharmaCompany from '../../../assets/icons/pharma_company.png';
class FirstSecProblem extends React.Component {
	constructor() {
		super();
		this.state = {
			icons: [
				{
					imageSrc: Pharmacy,
					title: 'Pharmacy',
					text: "Patients want home delivery, but it's unprofitable for pharmacy chains"
				},
				{
					imageSrc: Insurance,
					title: 'Insurance',
					text: 'No upfront price negotiation with Rx provider when reimbursing patients'
				},
				{
					imageSrc: Wholesaler,
					title: 'Wholesaler',
					text: '5 pharmacy chains dominate the market with too much bargaining power'
				},
				{
					imageSrc: PharmaCompany,
					title: 'Pharma Company',
					text: 'Patients not getting the branded product. Disconnected with patients'
				}
			]
		};
	}

	render() {
		return (
			<div className="firstSection">
				<div className="sectionText">
					<div className="description">
						<h3>Problem :</h3>
						<p>
							Patients are not getting their prescriptions <br /> when they need them. Ordering
							online is <br /> inefficient, inconvenient, and uncertain.
						</p>
						<span>It extends to other stakeholders:</span>
					</div>
					<div className="info">
						<SquareInfo fontSize="35px" backgroundColor="#4f58b0">
							<p>
								"the more I<br />
								sell, the more
								<br />I lose"
							</p>
						</SquareInfo>
					</div>
				</div>
				<div className="sectionIcons">
					{this.state.icons.map((icon, index) => (
						<CardTitle
							img={icon.imageSrc}
							title={icon.title}
							alt={icon.title}
							orientation="vertical"
							alignItems="center"
							width="300px"
							textAlign="left"
							description={icon.text}
						/>
					))}
				</div>
				<div className="sectionFooter">
					<p>Rx fulfillment is time-consuming</p>
					<p>Regulatory compliant delivery is very limited and unprofitable</p>
					<p>Unknown patient adherence to treatment</p>
				</div>
			</div>
		);
	}
}

export default FirstSecProblem;
