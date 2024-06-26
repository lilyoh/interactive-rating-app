import fs from 'fs';
import fsPromise from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';

export const dynamic = 'force-dynamic'; // defaults to auto

export async function POST(req) {
	revalidatePath('/thankyou');

	if (!fs.existsSync(path.join(process.cwd(), 'data'))) {
		fs.mkdirSync(path.join(process.cwd(), 'data'));
	}

	const { number } = await req.json();

	const filePath = path.join(process.cwd(), 'data', 'selectedNumber.json');

	try {
		await fsPromise.writeFile(filePath, JSON.stringify({ number }));

		return Response.json({ message: 'File written successfully' }, { status: 200 });
	} catch {
		return Response.json({ message: 'Error writing file' }, { status: 500 });
	}
}
