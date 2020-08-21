import React from 'react';
import './header.styles.scss';
import ToggleButton from '../DrawerMenu/ToggleButton';

class Header extends React.Component {
	handleScrollTo = (ref) => {
		const el = ref.current || ref;
		if (el && el.scrollIntoView) {
			// Scroll the element into view
			el.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}

	};

	render() {
		return (
			<div className="Header">
				<nav className="header-navigation">
					<div className="options-container">
						<ul>
							{this.props.menuData.map((menu, index) => (
								<li><a
									key={index}
									className="option"
									onClick={() => {
										this.handleScrollTo(menu.reference);
									}}
								>
									{menu.name}
								</a></li>
							))}
						</ul>
					</div>
					<ToggleButton onClick={() => {
						this.props.toggleDrawerHandler()
					}}></ToggleButton>
				</nav>
			</div>
		);
	}
}

export default Header;
