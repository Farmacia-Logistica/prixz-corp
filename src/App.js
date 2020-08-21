import React from 'react';
import Header from './components/header/header.component';
import menu from './data/menu.data.js';
import './App.css';

function App() {
	let MENU_DATA = menu(React);
	return (
		<div>
			{/*<Header menuData={MENU_DATA} />*/}
			{MENU_DATA.map((menu, index) => (
				<menu.componente key={index} reference={menu.reference} />
			))}
		</div>
	);
}

export default App;
