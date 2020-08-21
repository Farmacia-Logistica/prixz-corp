import React from 'react';

import './solution.styles.scss';
import Pharmacy from '../../assets/icons/pharmacy.png';
import Insurance from '../../assets/icons/insurance.png';
import Wholesaler from '../../assets/icons/wholesaler.png';
import PharmaCompany from '../../assets/icons/pharma_company.png';
import Doctor from '../../assets/icons/doctor.png';
import PatientM from '../../assets/icons/patient_m.png';
import PatientW from '../../assets/icons/patient_w.png';

import Delivery from '../../assets/whiteIcons/delivery.png';
import Statistics from '../../assets/whiteIcons/statistics.png';
import Package from '../../assets/whiteIcons/package.png';
import Prixz from '../../assets/whiteIcons/prixz.png';
import Sells from '../../assets/whiteIcons/sells.png';
import Callcenter from '../../assets/whiteIcons/callcenter.png';

const Solution = ({ reference }) => (
	<div ref={reference} className="section">
		<div className="section-solution">
			<div className="solution-text">
				<div className="solution-description">
					<h3>Solution:</h3>
					<p>
						Delivering simpler access to
						<br /> therapies
					</p>
				</div>
				<div className="solution-icons">
					<div className="group-icon">
						<div className="icon">
							<img src={Pharmacy} alt="Pharmacy"></img>
							<h4>Pharmacy</h4>
						</div>
					</div>
					<div className="group-icon">
						<img src={Insurance} alt="Insurance"></img>
						<h4>
							Insurance
							<br /> company
						</h4>
					</div>
					<div className="group-icon">
						<img src={PharmaCompany} alt="PharmaCompany"></img>
						<h4>
							Pharma
							<br /> company
						</h4>
					</div>
					<div className="group-icon">
						<img src={Wholesaler} alt="Wholesaler"></img>
						<h4>Wholesaler</h4>
					</div>
					<div className="group-icon">
						<img src={Doctor} alt="Doctor"></img>
						<h4>Doctor</h4>
					</div>
				</div>
				<div className="solution-iconsv2">
					<div className="group-icon">
						<img src={Delivery} alt="Delivery"></img>
					</div>
					<div className="group-icon">
						<img src={Statistics} alt="Statistics"></img>
					</div>
					<div className="group-icon">
						<img src={Package} alt="Package"></img>
					</div>
					<div className="group-icon">
						<img
							style={{
								width: '220px'
							}}
							src={Prixz}
							alt="Prixz"
						></img>
					</div>
					<div className="group-icon">
						<img src={Sells} alt="Sells"></img>
					</div>
					<div className="group-icon">
						<img src={Callcenter} alt="Callcenter"></img>
					</div>
				</div>
				<div className="solution-icons-user">
					<div className="group-icon">
						<img src={PatientM} alt="PatientM"></img>
					</div>
					<div className="group-icon">
						<img src={PatientW} alt="PatientW"></img>
					</div>
				</div>
			</div>
			<div className="systemic-solution">
				<div className="title">
					<h3>
						A systemic solution for a <br />
						systemic problem
					</h3>
				</div>
				<div className="bar-info">
					<div className="bar-title">
						<h4>Logistics</h4>
					</div>
					<div className="bar-list">
						<ul className="nobull">
							<li>Regulatory compliant delivery service</li>
							<li>Profitability optimization</li>
							<li>Real-time monitoring</li>
							<li>Driver routing and delivery optimization</li>
						</ul>
					</div>
				</div>
				<div className="bar-info">
					<div className="bar-title">
						<h4>ePharmacy</h4>
					</div>
					<div className="bar-list">
						<ul className="nobull">
							<li>Third-Party Integration</li>
							<li>Product sampling, including Rx</li>
							<li>Inventory integration</li>
							<li>Pricing management</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Solution;
