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
export const treeNodeInfo = writable({});

export async function revalidateTree(treeID) {
	if (import.meta.env.VITE_ENVIRONMENT === 'development') {
		try {
			const res = await fetch(`/api/bucket/${treeID}.json`);
			if (!res.ok) {
				throw new Error('Tree not found in local data');
			}
			const { data } = await res.json();
			if ('tree' in data && 'nodes' in data) {
				tree.set(data.tree);
				nodes.set(data.nodes);
				activeNode.set(data.nodes[data.tree.rootNode]);
			}
		} catch (error) {
			getPublishedTree(treeID);
			return;
		}
	}
}

export async function setActiveNode(nodeID) {
	const nodesData = get(nodes);
	if (!(nodeID in nodesData)) throw new Error('unable to find node id in nodes');
	activeNode.set(nodesData[nodeID]);
}

/* get tree from backend */
export async function getPublishedTree(idTree) {
	try {
		const res = await fetch(
			`${import.meta.env.VITE_LOCALHOST}/api/trees/${idTree}/publish/${import.meta.env.VITE_USER}`
		);
		const { data } = await res.json();
		if (!data) throw new Error('Unable to get published tree, check id and url.');
		const ParsedData = JSON.parse(data);
		if (ParsedData.error) throw new Error(ParsedData.error);

		if ('tree' in ParsedData && 'nodes' in ParsedData) {
			tree.set(ParsedData.tree);
			nodes.set(ParsedData.nodes);
			activeNode.set(ParsedData.nodes[ParsedData.tree.rootNode]);
		}
	} catch (error) {
		console.error(error);
		return;
	}
}
