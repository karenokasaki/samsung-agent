export function dateToReadableTimestamp(date) {
	if (!date) return '';
	const options = { hour: '2-digit', minute: '2-digit', hour12: true };
	return date?.toLocaleTimeString('en-US', options) || '';
}
