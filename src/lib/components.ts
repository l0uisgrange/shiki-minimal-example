import button from './images/button.svg';

export interface Component {
	name: string;
	category: string;
	image: string;
}

export const components: Component[] = [
	{
		name: 'Resistor',
		category: 'Classic',
		image: button
	}
];
