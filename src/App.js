import React, { useState } from 'react';
import Header from './components/header/header.component';
import menu from './data/menu.data.js';
import './App.css';
import DrawerMenu from './components/DrawerMenu/DrawerMenu';
import BackgroundShadow from './components/BackgroundShadow/BackgroundShadow';

function App() {
	let MENU_DATA = menu(React);
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	const toggleDrawerHandler = () => {
		setIsMenuVisible(!isMenuVisible);
	};
	return (
		<div style={{ height: '100%' }}>
			<Header menuData={MENU_DATA} toggleDrawerHandler={toggleDrawerHandler} />
			<DrawerMenu show={isMenuVisible} toggleDrawerHandler={toggleDrawerHandler} menuData={MENU_DATA} />
			{isMenuVisible ? <BackgroundShadow hideShadowHandler={toggleDrawerHandler} />: null }
			{MENU_DATA.map((menu, index) => (
				<menu.componente key={index} reference={menu.reference} />
			))}
		</div>
	);
}

export default App;
