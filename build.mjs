import { buildSync } from "esbuild";

buildSync({
  entryPoints: ["mcp/server.ts"],
  bundle: true,
  platform: "node",
  format: "cjs",
  outfile: "dist/gravenx-mcp.cjs",
  alias: { "@": "." },
  logLevel: "info",
});
console.log("bundled: dist/gravenx-mcp.cjs");
