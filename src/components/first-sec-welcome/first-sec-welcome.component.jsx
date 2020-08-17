import React from 'react';
import Dot from '../dot/dot.component';
import SquareInfo from '../square-info/square-info.component';
import './first-sec-welcome.styles.scss';
import PrixzLogo from '../../assets/logos/prixz.png';

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
		console.log(totalElements);
		this.setState({
			elements: totalElements
		});
	}

	render() {
		return (
			<div className="first-section headline">
				<div className="brand-section">
					<div className="vertical-text">
						<div className="block-color"></div>
						<span>
							Pharmacy Platform for
							<br /> Spanish speaking LATAM
						</span>
					</div>
					<div className="logo">
						<div className="vector-logo">
							<div className="dots">
								{this.state.elements.map((element, index) => (
									<div key={index}>{element.map((elementDot) => elementDot)}</div>
								))}
							</div>
						</div>
						<div className="img-logo">
							<img src={PrixzLogo} alt="Logo" />
						</div>
					</div>
				</div>
				<div className="publicity-image"></div>
				<div className="publicity-background">
					<div className="img-background">
						<div className="layer"></div>
					</div>
					<div className="pitch-deck">
						<SquareInfo text={'Pitch \n Deck'} fontSize="50px" widthText="50%" marginLeft="-42px" />
					</div>
				</div>
			</div>
		);
	}
}

export default FirstSectionWelcome;
