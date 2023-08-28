// build.mjs
import { build } from "esbuild";

build({
  entryPoints: ["./index.mjs"],
  bundle: true,
  platform: "node",
  target: "node16",
  minify: true,
  outfile: "./dist/bundle.js",
}).catch(() => process.exit(1));
