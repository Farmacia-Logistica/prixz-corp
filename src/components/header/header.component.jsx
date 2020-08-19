import React from 'react';
import './header.styles.scss';

class Header extends React.Component {
	handleScrollTo = (ref) => {
		const el = ref.current ? ref.current : ref;

		// Scroll the element into view
		el.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};

	render() {
		return (
			<div className="Header">
				<div className="options-container">
					{this.props.menuData.map((menu, index) => (
						<span
							key={index}
							className="option"
							onClick={() => {
								this.handleScrollTo(menu.reference);
							}}
						>
							{menu.name}
						</span>
					))}
				</div>
			</div>
		);
	}
}

export default Header;
