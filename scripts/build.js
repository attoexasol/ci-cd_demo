const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const source = path.join(root, "public");
const destination = path.join(root, "dist");

fs.rmSync(destination, {
  recursive: true,
  force: true,
});

fs.cpSync(source, destination, {
  recursive: true,
});

console.log("Build successful! Files copied to dist/");
