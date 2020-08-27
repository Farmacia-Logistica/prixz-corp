import React from 'react';
import Prixz from '../../assets/whiteIcons/prixz.png';
import { FaAlignRight } from 'react-icons/fa';
import './navbar.styles.scss';

class NavBar extends React.Component {
	constructor() {
		super();
		this.state = {
			toggle: false,
			optionSelected: 'HOME'
		};
	}

	Toggle = () => {
		this.setState({ toggle: !this.state.toggle });
	};

	handleScrollTo = ({ reference, name }) => {
		const el = reference.current ? reference.current : reference;
		// Scroll the element into view
		const offsets = el.getBoundingClientRect();
		this.setState({ toggle: false, optionSelected: name });
		window.scrollTo({
			top: offsets.top + window.pageYOffset - 66,
			left: 0,
			behavior: 'smooth'
		});
		/*
		el.scrollIntoView({
			behavior: 'smooth',
			block: window.scroll(100, 300)
		});*/
	};

	render() {
		return (
			<div className="nav">
				<div className={this.state.toggle ? 'background-shadow' : ''} onClick={this.Toggle} />
				<div className={'nav-bar'}>
					<div className="logo">
						<img src={Prixz} alt="Prixz" />
					</div>
					<div className="menu">
						<div className="sections">
							{this.props.menuData.map((objLink, index) => (
								<button
									className={objLink.name === this.state.optionSelected ? 'active' : ''}
									onClick={() => {
										this.handleScrollTo(objLink);
									}}
									key={index}
								>
									{objLink.name}
								</button>
							))}
						</div>
						<div className="iconMenu">
							<button onClick={this.Toggle}>
								<FaAlignRight />
							</button>
						</div>
					</div>
				</div>
				<div
					className={'list hide open ' + (this.state.toggle ? 'show-elements' : 'hide-elements')}
				>
					<div />
					<ul>
						{this.props.menuData.map((objLink, index) => (
							<li
								key={index}
								className={objLink.name === this.state.optionSelected ? 'active' : ''}
								onClick={() => {
									this.handleScrollTo(objLink);
								}}
							>
								{objLink.name.toUpperCase()}
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default NavBar;
