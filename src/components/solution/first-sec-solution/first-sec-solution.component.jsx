import React from 'react';
import SolutionData from './solution.data';
import CardTitle from '../../card-title/card-title.component';
import './first-sec-solution.styles.scss';
import Pharmacy from '../../../assets/icons/pharmacy.png';
import InsuranceCompany from '../../../assets/icons/insurance.png';

import Delivery from '../../../assets/whiteIcons/delivery.png';
class FirstSecSolution extends React.Component {
	constructor() {
		super();
		this.state = {
			...SolutionData
		};
	}

	render() {
		return (
			<div className="sectionSolution">
				<div className="icons">
					<div className="title">
						<h1>Solution : </h1>
						<h2> Delivering simpler access to therapies</h2>
					</div>
					<div className="icons-text">
						{this.state.iconsPt1.map((icon, index) => (
							<CardTitle
								key={index}
								width={icon.width}
								img={icon.imageSrc}
								title={icon.name}
								alt={icon.name}
							/>
						))}
					</div>
					<div className="icons-v2">
						{this.state.iconsPt2.map((icon, index) => (
							<CardTitle key={index} width={icon.width} img={icon.imageSrc} alt={icon.name} />
						))}
					</div>
					<div className="users">
						{this.state.iconsPt3.map((icon, index) => (
							<CardTitle key={index} width={icon.width} img={icon.imageSrc} alt={icon.name} />
						))}
					</div>
				</div>
				<div className="info">
					<div className="title">
						<h2>A systemic solution for a systemic problem</h2>
					</div>
					<div className="card-info">
						<div className="vertical-title-section">
							<div className="vertical-title">
								<h3>Logistics</h3>
							</div>
						</div>
						<div className="horizontal-info">
							<ul>
								<li>Regulatory compliant delivery service</li>
								<li>Profitability optimization</li>
								<li>Real-time monitoring</li>
								<li>Driver routing and delivery optimization</li>
							</ul>
						</div>
					</div>
					<div className="card-info">
						<div className="vertical-title-section">
							<div className="vertical-title">
								<h3>ePharmacy</h3>
							</div>
						</div>
						<div className="horizontal-info">
							<ul>
								<li>Regulatory compliant delivery service</li>
								<li>Profitability optimization</li>
								<li>Real-time monitoring</li>
								<li>Driver routing and delivery optimization</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FirstSecSolution;
