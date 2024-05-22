import { get, writable } from 'svelte/store';

export const TREE_TYPES = {
	NORMAL: 'normal',
	TREE: 'tree',
	CONDITIONAL: 'conditional'
};
export const MODEL_GENERIC = 'generic';

export const tree = writable({});
export const nodes = writable({});
export const activeNode = writable(null);
export const modelChoosen = writable(MODEL_GENERIC);
export const treeTypeInfo = writable({});

export async function revalidateTree(treeID) {
	if (import.meta.env.VITE_ENVIRONMENT === 'development') {
		const res = await fetch(`/api/bucket/${treeID}.json`);
		const { data } = await res.json();
		if ('tree' in data && 'nodes' in data) {
			tree.set(data.tree);
			nodes.set(data.nodes);
			activeNode.set(data.nodes[data.tree.rootNode]);
		}
	}

	// if (import.meta.env.VITE_ENVIRONMENT === 'production') {}
}

export async function setActiveNode(nodeID) {
	const nodesData = get(nodes);
	if (!(nodeID in nodesData)) throw new Error('unable to find node id in nodes');
	activeNode.set(nodesData[nodeID]);
}

/* get tree from json */
export async function getTreeJson(treeID) {
	const res = await fetch(`/api/bucket/${treeID}.json`);
	const { data } = await res.json();
	if ('tree' in data && 'nodes' in data) {
		tree.set(data.tree);
		nodes.set(data.nodes);
		activeNode.set(data.nodes[data.tree.rootNode]);
	}
}

/* get tree from backend */
export async function getPublishTree(url) {
	const res = await fetch(`http://localhost:5173${url}`);
	const { data } = await res.json();
	const ParsedData = JSON.parse(data);
	if ('tree' in ParsedData && 'nodes' in ParsedData) {
		tree.set(ParsedData.tree);
		nodes.set(ParsedData.nodes);
		activeNode.set(ParsedData.nodes[ParsedData.tree.rootNode]);
	}
}
