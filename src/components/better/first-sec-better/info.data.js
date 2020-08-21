import PlusCellPhone from '../../../assets/iconsv2/pluscellphone.png';
import Shield from '../../../assets/iconsv2/shield.png';
import Pharmacy from '../../../assets/iconsv2/pharmacy.png';
import Alert from '../../../assets/iconsv2/alert.png';
import Card from '../../../assets/iconsv2/card.png';
import Deliver from '../../../assets/iconsv2/deliver.png';
const defaultOptionsCard = {
	widthParagraph: '50%',
	marginTopTitle: '0px',
	widthBlock: '35px',
	heightBlock: '7px',
	backgroundColorBlock: '#fdc5a2'
};
const defaultPropertiesSquare = {
	textAlign: 'center',
	backgroundColor: '#4f59b0ff'
};
const INFOFIRSTSECTION = [
	{
		squareOptions: {
			squareProperties: {
				...defaultPropertiesSquare
			},
			img: PlusCellPhone,
			title: 'PlusCellPhone'
		},
		cardOptions: {
			cardProperties: {
				...defaultOptionsCard,
				title: 'Pharmacy Platform',
				description: 'From the manufacturer to the patient, all stakeholders are included'
			}
		}
	},
	{
		squareOptions: {
			squareProperties: {
				...defaultPropertiesSquare
			},
			img: Shield,
			title: 'Shield'
		},
		cardOptions: {
			cardProperties: {
				...defaultOptionsCard,
				title: 'Insurance Integration',
				description: 'Reimbursement with policy number or direct payment by insurance company'
			}
		}
	},
	{
		squareOptions: {
			squareProperties: {
				...defaultPropertiesSquare
			},
			img: Pharmacy,
			title: 'Pharmacy'
		},
		cardOptions: {
			cardProperties: {
				...defaultOptionsCard,
				title: 'One-stop pharmacy',
				description: 'Rx, specialty, controlled, OTC and home healthcare'
			}
		}
	},
	{
		squareOptions: {
			squareProperties: {
				...defaultPropertiesSquare
			},
			img: Alert,
			title: 'Alert'
		},
		cardOptions: {
			cardProperties: {
				...defaultOptionsCard,
				title: 'Personalized promotions',
				description: 'Complementary therapeutic product sampling and targeted promotions'
			}
		}
	},
	{
		squareOptions: {
			squareProperties: {
				...defaultPropertiesSquare
			},
			img: Card,
			title: 'Card'
		},
		cardOptions: {
			cardProperties: {
				...defaultOptionsCard,
				title: 'Patient Adherence',
				description: 'Chronic patient reminders, refills and membership program'
			}
		}
	},
	{
		squareOptions: {
			squareProperties: {
				...defaultPropertiesSquare
			},
			img: Deliver,
			title: 'Deliver'
		},
		cardOptions: {
			cardProperties: {
				...defaultOptionsCard,
				title: 'Flexible Delivery, Nationwide',
				description: 'Urgent or scheduled delivery, nationwide*'
			}
		}
	}
];

export default INFOFIRSTSECTION;
