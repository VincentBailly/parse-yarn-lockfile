const fs = require("fs");
const { parse } = require(".");

const content = fs.readFileSync("yarn.lock", { encoding: "utf-8" });

const parsed = parse(content);

console.log(JSON.stringify(parsed, undefined, 2));
