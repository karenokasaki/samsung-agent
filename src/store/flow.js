import { get, writable } from 'svelte/store';

export const tree = writable({});
export const nodes = writable({});
export const activeNode = writable(null);

export async function revalidateTree(treeID) {
	const res = await fetch(`/api/bucket/${treeID}.json`);
	const { data } = await res.json();
	if ('tree' in data && 'nodes' in data) {
		tree.set(data.tree);
		nodes.set(data.nodes);
		activeNode.set(data.nodes[data.tree.rootNode]);
	}
}

export async function setActiveNode(nodeID) {
	const nodesData = get(nodes);
	if (!(nodeID in nodesData)) throw new Error('unable to find node id in nodes');
	activeNode.set(nodesData[nodeID]);
}
