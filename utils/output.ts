import fs from "fs";
import path from "path";

export default async function outputextfile(url: string) {
  const request = await fetch(url);
  const text = await request.text();
  console.log("output.file");
  fs.writeFileSync(path.join("output.file"), text);
}
