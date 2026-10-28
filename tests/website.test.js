const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

test("Homepage contains required heading", () => {
  const html = fs.readFileSync(
    path.join(__dirname, "../public/index.html"),
    "utf8",
  );

  assert.match(html, /My First CI\/CD Pipeline/);
});

test("CSS and JS files exist", () => {
  assert.ok(fs.existsSync("public/style.css"));

  assert.ok(fs.existsSync("public/app.js"));
});
