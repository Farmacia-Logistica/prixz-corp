import Welcome from '../pages/welcome/welcome.component';
import Problem from '../pages/problem/problem.component';
import Solution from '../pages/solution/solution.component';

// the first option in data it necessary that has to be the logo
const MENU_DATA = (react) => {
	return [
		{
			name: 'home',
			componente: Welcome,
			reference: react.createRef(null)
		},
		{
			name: 'Problem',
			componente: Problem,
			reference: react.createRef(null)
		},
		{
			name: 'Solution',
			componente: Solution,
			reference: react.createRef(null)
		}
	];
};

export default MENU_DATA;
