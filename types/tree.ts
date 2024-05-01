export type Choice = {
	to: string;
	text_button: string;
};

export type Node = {
	name: string;
	question: string;
	text: string;
	choices: Choice[];
	id: string;
	tree: string;
};

export type Tree = {
	name: string;
	description: string;
	published: boolean;
	folder: string;
	id: string;
	rootNode: string;
	productThumb: string;
};

export type PublishedTree = {
	tree: Tree;
	nodes: Node[];
};
