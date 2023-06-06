export function groupBy<T>(array: T[], getKey: (item: T) => string) {
	const map = new Map<string, T[]>();
	array.forEach((item) => {
		const key = getKey(item);
		const group = map.get(key);
		group ? group.push(item) : map.set(key, [item]);
	});

	return Object.fromEntries(map.entries());
}
