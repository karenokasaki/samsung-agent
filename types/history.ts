import type { Node } from './tree';

export type EventData = {
	node: Node;
	answer: string;
};

export type Event = {
	data: EventData;
	timestamp: Date;
};
