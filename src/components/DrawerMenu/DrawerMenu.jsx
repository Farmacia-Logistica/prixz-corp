import React from 'react';
import './DrawerMenu.scss';

class DrawerMenu extends React.Component {

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
        const toggleDrawerHandler = this.props.toggleDrawerHandler;
        const isOpen = this.props.show;
        let drawerClasses = ['drawer']
        if (isOpen)
            drawerClasses = ['drawer', 'drawer-open']
        return (
            <nav className={drawerClasses.join(" ")}>
                <ul>
                    {this.props.menuData.map((menu, index) => (
                        <li><a
                            key={index}
                            className="option"
                            onClick={() => {
                                toggleDrawerHandler();
                                this.handleScrollTo(menu.reference);
                            }}
                        >
                            {menu.name}
                        </a></li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default DrawerMenu;
