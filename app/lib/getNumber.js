import fsPromise from "fs/promises";
import path from "path";
import { unstable_noStore as noStore } from "next/cache";

// server action
// GET
export async function getNumber() {
  noStore();

  const rawBuffer = await fsPromise.readFile(
    path.join(process.cwd(), "data", "selectedNumber.json"),
  );

  const { number } = JSON.parse(rawBuffer);

  return number;
}
