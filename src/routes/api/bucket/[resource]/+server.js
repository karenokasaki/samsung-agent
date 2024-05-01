import { error, json } from '@sveltejs/kit';
import { fileExists } from '$lib/fs';
import fs from 'fs';

export function GET({ params }) {
	try {
		const { resource } = params;
		const exists = fileExists(`./data/bucket/${resource}`);
		if (!exists) error(400, { error: 'resource does not exist' });
		const data = JSON.parse(fs.readFileSync(`./data/bucket/${resource}`));
		return json({ data });
	} catch (err) {
		error(500, { error: err.message });
	}
}
