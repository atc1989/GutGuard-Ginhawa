import fs from "node:fs";
import path from "node:path";

const root = "D:/Users/najee/Downloads/gutguard-build/gutguard";
const src = fs.readFileSync(path.join(root, "01-ginhawa-landing/ginhawa-landing.jsx"), "utf8");
const out = path.join(root, "public");
fs.mkdirSync(out, { recursive: true });

function write(name, marker) {
  const start = src.indexOf(marker);
  if (start < 0) throw new Error("missing " + marker);
  const prefix = "data:image/png;base64,";
  const b64Start = src.indexOf(prefix, start) + prefix.length;
  const b64End = src.indexOf('"', b64Start);
  const dest = path.join(out, name);
  fs.writeFileSync(dest, Buffer.from(src.slice(b64Start, b64End), "base64"));
  console.log(name, fs.statSync(dest).size);
}

write("watermark.png", "const GG_WATERMARK");
write("wordmark.png", "const GG_WORDMARK");
