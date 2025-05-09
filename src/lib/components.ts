import resistor from './images/resistor.svg';
import inductor from './images/inductor.svg';
import isource from './images/isource.svg';
import vsource from './images/vsource.svg';
import fuse from './images/fuse.svg';
import diode from './images/diode.svg';
import led from './images/led.svg';
import dcmotor from './images/dcmotor.svg';

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
	},
	{
		name: 'fuse',
		category: 'fuse',
		image: fuse
	},
	{
		name: 'diode',
		category: 'diode',
		image: diode
	},
	{
		name: 'led',
		category: 'light-emitting diode',
		image: led
	},
	{
		name: 'dcmotor',
		category: 'direct current motor',
		image: dcmotor
	}
];
