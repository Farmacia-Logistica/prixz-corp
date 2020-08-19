import React from 'react';
import SquareInfo from '../square-info/square-info.component';

import './first-sec-problem.styles.scss';
import Pharmacy from '../../assets/icons/pharmacy.png';
import Insurance from '../../assets/icons/insurance.png';
import Wholesaler from '../../assets/icons/wholesaler.png';
import PharmaCompany from '../../assets/icons/pharma_company.png';

const FirstSecProblem = () => (
	<div className="section">
		<div className="problem">
			<div className="text-problem">
				<div class="description">
					<h3>Problem :</h3>
					<p>
						Patients are not getting their prescriptions <br /> when they need them. Ordering online
						is <br /> inefficient, inconvenient, and uncertain.
					</p>
					<span>It extends to other stakeholders:</span>
				</div>
			</div>
			<div className="text-square">
				<SquareInfo fontSize="35px" backgroundColor="#4f58b0" textAlign="center">
					<p>
						"the more I<br />
						sell, the more
						<br />I lose"
					</p>
				</SquareInfo>
			</div>
		</div>
		<div className="icons">
			<div className="problem-icon">
				<div className="icon">
					<img src={Pharmacy} alt="Pharmacy" />
				</div>
				<div className="description">
					<h4>Pharmacy</h4>
					<p>Patients want home delivery, but it's unprofitable for pharmacy chains</p>
				</div>
			</div>
			<div className="problem-icon">
				<div className="icon">
					<img src={Insurance} alt="Insurance" />
				</div>
				<div className="description">
					<h4>Pharmacy</h4>
					<p>Patients want home delivery, but it's unprofitable for pharmacy chains</p>
				</div>
			</div>
			<div className="problem-icon">
				<div className="icon">
					<img src={Wholesaler} alt="Wholesaler" />
				</div>
				<div className="description">
					<h4>Pharmacy</h4>
					<p>Patients want home delivery, but it's unprofitable for pharmacy chains</p>
				</div>
			</div>
			<div className="problem-icon">
				<div className="icon">
					<img src={PharmaCompany} alt="PharmaCompany" />
				</div>
				<div className="description">
					<h4>Pharmacy</h4>
					<p>Patients want home delivery, but it's unprofitable for pharmacy chains</p>
				</div>
			</div>
		</div>
		<div className="message">
			Rx fulfillment is time-consuming
			<br /> Regulatory compliant delivery is very limited and unprofitable
			<br /> Unknown patient adherence to treatment
		</div>
	</div>
);

export default FirstSecProblem;
