export function isExhaustive(x: never) {
	// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
	console.error(`Unexpected: ${x}`);
}
