#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";

async function processFile(filePath) {
  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    const modifiedContent = fileContent.replace(
      /(?<=\(material-[a-z,-]*)\.woff2\)/g,
      ".woff2?no-inline)",
    );
    await fs.writeFile(filePath, modifiedContent, "utf8");
    console.log(
      `Successfully added '?no-inline' to all occurrences of 'woff2' in '${filePath}'.`,
    );
  } catch (error) {
    console.error(`Error processing file '${filePath}':`, error.message);
    process.exit(1);
  }
}

async function main() {
  if (process.argv.length !== 3) {
    console.error("Usage: node script.js <filename>");
    process.exit(1);
  }

  const filePath = path.resolve(process.cwd(), process.argv[2]);

  try {
    const stats = await fs.stat(filePath);
    if (!stats.isFile()) {
      console.error(`Error: '${filePath}' is not a file.`);
      process.exit(1);
    }
    await processFile(filePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(`Error: File '${filePath}' not found.`);
    } else {
      console.error("An unexpected error occurred:", error);
    }
    process.exit(1);
  }
}

main();
