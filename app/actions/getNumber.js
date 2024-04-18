import fsPromise from 'fs/promises';
import path from 'path';

export async function getNumber() {
	const rawBuffer = await fsPromise.readFile(path.join(process.cwd(), 'data', 'selectedNumber.json'));

	const { number } = JSON.parse(rawBuffer);

	return number;
}
