// ponytail: plain static file server, no bundler needed — the .html prototypes are pre-built.
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const TYPES = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".jsx": "text/plain",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".md": "text/plain",
};

http
  .createServer((req, res) => {
    let file = path.normalize(path.join(ROOT, decodeURIComponent(req.url.split("?")[0])));
    if (!file.startsWith(ROOT)) return res.writeHead(403).end("Forbidden");
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");

    fs.readFile(file, (err, data) => {
      if (err) return res.writeHead(404).end("Not found");
      res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
      res.end(data);
    });
  })
  .listen(PORT, () => console.log(`Gutguard prototypes running at http://localhost:${PORT}`));
