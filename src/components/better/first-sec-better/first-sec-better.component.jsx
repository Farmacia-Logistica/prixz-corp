import React from 'react';
import CardDescription from '../../card-description/card-description.component';
import SquareInfo from '../../square-info/square-info.component';
import './first-sec-better.styles.scss';
import INFOFIRSTSECTION from './info.data';
class FirstSecBetter extends React.Component {
	constructor() {
		super();
		this.state = {
			cards: INFOFIRSTSECTION
		};
	}

	render() {
		return (
			<div className="sectionBetter">
				<div className="sectionTitle">
					<h3>Competitive Advantage</h3>
				</div>
				<div className="sectionInfo">
					<div className="subSectionTitle">
						<h3>Why we are better</h3>
					</div>
					<div className="subSectionIconographic">
						{this.state.cards.map((card, index) => (
							<div key={index} className="groupInfo">
								<div className="cardImg">
									<SquareInfo {...card.squareOptions.squareProperties}>
										<img src={card.squareOptions.img} alt={card.squareOptions.title} />
									</SquareInfo>
								</div>
								<div className="cardInfo">
									<CardDescription {...card.cardOptions.cardProperties} />
								</div>
							</div>
						))}
					</div>
					<div className="subSectionNote">
						<p>* Urgent delivery in main cities</p>
					</div>
				</div>
			</div>
		);
	}
}

export default FirstSecBetter;
