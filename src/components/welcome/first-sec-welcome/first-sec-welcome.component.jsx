import React from 'react';
import Dot from '../../dot/dot.component';
import SquareInfo from '../../square-info/square-info.component';
import './first-sec-welcome.styles.scss';
import PrixzLogo from '../../../assets/logos/prixz.png';
import BlockHorizontalColor from '../../block-horizontal-color/block-horizontal-color.component';

class FirstSectionWelcome extends React.Component {
	constructor() {
		super();
		this.state = {
			dots: {
				rows: 5,
				columns: 3
			},
			elements: []
		};
	}

	componentDidMount() {
		const { dots } = this.state;
		let elementDot;
		let totalElements = [];

		for (let i = 0; i < dots.rows; i++) {
			elementDot = [];
			for (let j = 0; j < dots.columns; j++) {
				elementDot.push(<Dot key={j} />);
			}
			totalElements.push(elementDot);
		}
		this.setState({
			elements: totalElements
		});
	}

	render() {
		return (
			<div className="first-section">
				<div className="brandSection">
					<div className="brandText">
						<div className="title">
							<h3>About Us</h3>
						</div>
						<div className="dots">
							{this.state.elements.map((element, index) => (
								<div key={index}>{element.map((elementDot) => elementDot)}</div>
							))}
						</div>
					</div>
					<div className="brandLogo">
						<img src={PrixzLogo} alt="Logo" />
					</div>
					<div className="brandVector">
						<BlockHorizontalColor width="100px" height="15px" backgroundColor="#fdc5a2" />
					</div>
				</div>
				<div className="imageSection">
					<div className="imagePublicity"></div>
					<div className="imageText">
						<div className="info">
							<SquareInfo fontSize="35px" textAlign="center">
								<p>
									Pharmacy
									<br />
									Platform for
									<br />
									Spanish
									<br />
									speaking
									<br />
									LATAM
								</p>
							</SquareInfo>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FirstSectionWelcome;
