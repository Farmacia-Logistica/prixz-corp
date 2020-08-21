import Pharmacy from '../assets/icons/pharmacy.png';
import Wholesaler from '../assets/icons/wholesaler.png';
import Insurance from '../assets/icons/insurance.png';
import PharmaCompany from '../assets/icons/pharma_company.png';
import Doctor from '../assets/icons/doctor.png';
import Patient from '../assets/icons/patient_m.png';

import ColorfulPills from '../assets/platform/colorful_pills.jpg';
import NursePills from '../assets/platform/nurse_pills.jpg';
import Experiment from '../assets/platform/experiment.jpg';
import DtPt from '../assets/platform/dtpt.jpg';

const SECTIONSDATA = [
	{
		icons: [
			{
				imageSrc: Pharmacy,
				title: 'Pharmacies'
			},
			{
				imageSrc: Wholesaler,
				title: 'Wholesaler'
			}
		],
		descriptions: [
			{
				title: 'Delivery Management System',
				activities: ['Delivery person', 'Order management platform', 'Monitoring']
			},
			{
				title: 'ePharmacy System',
				activities: [
					'Ecommerce',
					'Contact center',
					'Real - time mobile channels',
					'Pricing management'
				]
			},
			{
				title: "Prixz' Platform Network",
				activities: ['Sales generation', 'Inventory sharing']
			}
		],
		backgroundImage: ColorfulPills
	},
	{
		icons: [
			{
				imageSrc: Insurance,
				title: 'Insurance'
			}
		],
		descriptions: [
			{
				title: 'Prescription Management Platform',
				activities: ['ePharmacy System', 'Insurance Provider special pricing']
			},
			{
				title: 'Patient Adherence System',
				activities: ['Chronic patient reminders and refills', 'Chronic membership program']
			}
		],
		backgroundImage: NursePills
	},
	{
		icons: [
			{
				imageSrc: PharmaCompany,
				title: 'Pharmaceutical Companies'
			}
		],
		descriptions: [
			{
				title: 'Smart Sampling',
				activities: [
					'Branded product sampling for patients consuming generic ones',
					'Complementary therapeutic product sampling',
					'Targeted promotions'
				]
			},
			{
				title: 'ePharmacy System + Delivery',
				activities: [
					'Ecommerce, contact center, etc',
					'Real - time mobile channels',
					'Pricing management',
					"Doctors' prescription supplied to patient"
				]
			},
			{
				title: 'Patient Adherence System',
				activities: ['Chronic patient reminders and refills.', 'Chronic membership program.']
			}
		],
		backgroundImage: Experiment
	},
	{
		icons: [
			{
				imageSrc: Patient,
				title: 'Patients'
			},
			{
				imageSrc: Doctor,
				title: 'Doctors'
			}
		],
		descriptions: [
			{
				title: 'ePharmacy + Delivery',
				activities: [
					'Online pharmacy',
					'Contact center',
					'Real-time mobile channels',
					'Insurance integration',
					'Delivery tracking'
				]
			},
			{
				title: 'Patient Adherence System',
				activities: ['Chronic patient reminders and refills', 'Chronic membership program']
			}
		],
		backgroundImage: DtPt
	}
];

export default SECTIONSDATA;
