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
	full_name: string;
	image: string;
	quick?: boolean;
	release?: string;
}

export const components: Component[] = [
	{
		name: 'resistor',
		full_name: 'resistor',
		image: resistor,
		quick: true,
		release: '0.1.0'
	},
	{
		name: 'inductor',
		full_name: 'inductor',
		image: inductor,
		quick: true,
		release: '0.1.0'
	},
	{
		name: 'isource',
		full_name: 'current source',
		image: isource,
		quick: true,
		release: '0.1.0'
	},
	{
		name: 'vsource',
		full_name: 'voltage source',
		image: vsource,
		quick: true,
		release: '0.1.0'
	},
	{
		name: 'fuse',
		full_name: 'fuse',
		image: fuse,
		quick: true,
		release: '0.1.0'
	},
	{
		name: 'diode',
		full_name: 'diode',
		image: diode,
		quick: true,
		release: '0.1.0'
	},
	{
		name: 'led',
		full_name: 'light-emitting diode',
		image: led,
		quick: true,
		release: '0.1.0'
	},
	{
		name: 'dcmotor',
		full_name: 'direct current motor',
		image: dcmotor,
		quick: true,
		release: '0.1.0'
	},
	{
		name: 'ground',
		full_name: 'ground',
		image: ground,
		release: '0.1.0'
	},
	{
		name: 'earth',
		full_name: 'earth',
		image: earth,
		release: '0.1.0'
	},
	{
		name: 'bjt',
		full_name: 'bipolar junction transistor',
		image: bjt,
		release: '0.1.0'
	},
	{
		name: 'mosfet',
		full_name: 'field-effect transistor',
		image: mosfet,
		release: '0.2.0'
	},
	{
		name: 'opamp',
		full_name: 'operational amplifier',
		image: mosfet,
		release: '0.2.0'
	}
];
