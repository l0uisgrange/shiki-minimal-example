import resistor from './images/resistor.svg';
import inductor from './images/inductor.svg';
import isource from './images/isource.svg';
import vsource from './images/vsource.svg';
import fuse from './images/fuse.svg';
import diode from './images/diode.svg';
import led from './images/led.svg';
import dcmotor from './images/dcmotor.svg';
import ground from './images/ground.svg';
import earth from './images/earth.svg';
import bjt from './images/bjt.svg';
import mosfet from './images/mosfet.svg';

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
	},
	{
		name: 'ground',
		category: 'ground',
		image: ground
	},
	{
		name: 'earth',
		category: 'earth',
		image: earth
	},
	{
		name: 'bjt',
		category: 'bipolar junction transistor',
		image: bjt
	},
	{
		name: 'mosfet',
		category: 'field-effect transistor',
		image: mosfet
	}
];
