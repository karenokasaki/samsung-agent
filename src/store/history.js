import { get, writable } from 'svelte/store';
import { LinkedList } from '../lib/linkedlist';

const mockActiveNode = {
	type: '',
	name: 'n2',
	text: 'Subnecto crustulum aeternus. Tabernus utrum turpis alter terra defluo casus adhaero sint. Votum certe color mollitia causa quasi aggredior adhuc. Volo verbera aggero tantum certus auctor veritas et utor voluptas. Vulgo cimentarius animus tergum cum caute.',
	question: 'It`s turning on?',
	resolution: '',
	choices: [],
	tree: '4345dfae-c024-42dc-9b89-94672c30d77a',
	id: 'd425742e-8abf-4c1a-8ff9-631e6b9af812'
};

const mockHistory = {
	'Apr 29, 2024': [
		{ data: { node: mockActiveNode, answer: 'Yes.' }, timestamp: new Date() },
		{ data: { node: mockActiveNode, answer: 'No.' }, timestamp: new Date() },
		{ data: { node: mockActiveNode, answer: 'Sometimes.' }, timestamp: new Date() }
	]
};

export const history = writable(mockHistory);

export const breadcrumb = writable(new LinkedList());

function formatDate(date) {
	const options = { month: 'short', day: '2-digit', year: 'numeric' };
	return new Intl.DateTimeFormat('en-US', options).format(date);
}

export function addStep(data) {
	/** Add event data to history */
	const historyData = get(history);
	const timestamp = new Date();
	const dateString = formatDate(timestamp);
	if (dateString && dateString in historyData && Array.isArray(historyData[dateString])) {
		historyData[dateString].push({ data, timestamp });
	} else {
		historyData[dateString] = new Array().concat({ data, timestamp });
	}
	history.set(historyData);

	/** Add event data to breadcrumb */
	breadcrumb.set(get(breadcrumb).addNode(data));
}

export function setNewBreadcrumbTail(id) {
	breadcrumb.set(get(breadcrumb).setNewTail(id));
}

export function popBreadcrumb() {
	breadcrumb.set(get(breadcrumb).pop());
}
