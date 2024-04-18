"use server";

import fs from "fs";
import fsPromise from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

// server action
// mutation, server

// server-action
// client-component
// Form, function invoke()

// server-component
// Form

export async function changeNumber(number) {
  if (!fs.existsSync(path.join(process.cwd(), "data"))) {
    fs.mkdirSync(path.join(process.cwd(), "data"));
  }

  const filePath = path.join(process.cwd(), "data", "selectedNumber.json");

  try {
    await fsPromise.writeFile(filePath, JSON.stringify({ number }));

    revalidatePath("/thankyou");

    return number;
  } catch {
    throw new Error("Writing file is failed.");
  }
}
