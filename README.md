# parse-yarn-lockfile

Parse yarn v1 lock file. This code is extracted from the yarn codebase to make it usable by other projects.

## Usage

```javascript
const fs = require("fs");
const { parse } = require("parse-yarn-lockfile");

const content = fs.readFileSync("yarn.lock", { encoding: "utf-8" });
const parsed = parse(content);

console.log(JSON.stringify(parsed, undefined, 2));
/**
{
  "type": "success",
  "object": {
    "argparse@^2.0.1": {
      "version": "2.0.1",
      "resolved": "https://registry.yarnpkg.com/argparse/-/argparse-2.0.1.tgz#246f50f3ca78a3240f6c997e8a9bd1eac49e4b38",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q=="
    },
    "invariant@^2.2.4": {
      "version": "2.2.4",
      "resolved": "https://registry.yarnpkg.com/invariant/-/invariant-2.2.4.tgz#610f3c92c9359ce1db616e538008d23ff35158e6",
      "integrity": "sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==",
      "dependencies": {
        "loose-envify": "^1.0.0"
      }
    },
...
 **/
```