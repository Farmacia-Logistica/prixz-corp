import Welcome from '../pages/welcome/welcome.component';
import Problem from '../pages/problem/problem.component';
import Solution from '../pages/solution/solution.component';
import Platform from '../pages/platform/platform.component';
import Better from '../pages/better/better.component';
import Logistics from '../pages/logistics/logistics.component';
import Epharmacy from '../pages/epharmacy/epharmacy.component';

// the first option in data it necessary that has to be the logo
const MENU_DATA = (react) => {
	return [
		{
			name: 'HOME',
			componente: Welcome,
			reference: react.createRef(null)
		},
		{
			name: 'PROBLEM',
			componente: Problem,
			reference: react.createRef(null)
		},
		{
			name: 'SOLUTION',
			componente: Solution,
			reference: react.createRef(null)
		},
		{
			name: 'LOGISTICS',
			componente: Logistics,
			reference: react.createRef(null)
		},
		{
			name: 'EPHARMACY',
			componente: Epharmacy,
			reference: react.createRef(null)
		},
		{
			name: 'PLATFORM',
			componente: Platform,
			reference: react.createRef(null)
		},
		{
			name: 'BETTER',
			componente: Better,
			reference: react.createRef(null)
		}
	];
};

export default MENU_DATA;
