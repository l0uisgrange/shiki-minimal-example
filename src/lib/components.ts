import resistor from './images/resistor.svg';
import inductor from './images/inductor.svg';
import isource from './images/isource.svg';
import vsource from './images/vsource.svg';

export interface Component {
	name: string;
	category: string;
	image: string;
}

export const components: Component[] = [
	{
		name: 'resistor',
		category: 'resistor',
		image: resistor
	},
	{
		name: 'inductor',
		category: 'inductor',
		image: inductor
	},
	{
		name: 'isource',
		category: 'current source',
		image: isource
	},
	{
		name: 'vsource',
		category: 'voltage source',
		image: vsource
	}
];
