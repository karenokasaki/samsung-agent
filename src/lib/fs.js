import fs from 'fs';
import util from 'util';

/**
 *
 * @param {string} path - path for file to be checked.
 * @returns {boolean} - boolean expresses if file is accessible.
 */
export function fileExists(path) {
	if (!path || typeof path !== 'string') return false;
	try {
		fs.statSync(path);
		fs.accessSync(path, fs.constants.F_OK);
		return true;
	} catch (err) {
		return false;
	}
}
