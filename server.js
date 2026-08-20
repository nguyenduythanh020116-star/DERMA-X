// DERMA-X v0.7.0 Aesthetic-Clinical Gateway — Local Development Server
// Node.js 18+; Khởi chạy ứng dụng DermaX cục bộ (Local-First)
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = Number(process.env.PORT || 3010);

function send(res, status, type, body) {
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-store' });
  res.end(body);
}

function json(res, status, obj) {
  send(res, status, 'application/json; charset=utf-8', JSON.stringify(obj));
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  if (req.method === 'GET' && req.url === '/health') {
    return json(res, 200, {
      ok: true,
      service: 'DERMA-X Aesthetic-Clinical Studio',
      version: '0.7.0',
      time: new Date().toISOString()
    });
  }

  if (req.method === 'GET' && (req.url === '/api/products' || req.url === '/data/products.json')) {
    const file = path.join(ROOT, 'data', 'products.json');
    if (!fs.existsSync(file)) return json(res, 404, { error: 'Không tìm thấy cơ sở dữ liệu sản phẩm.' });
    try {
      return json(res, 200, JSON.parse(fs.readFileSync(file, 'utf8')));
    } catch (e) {
      return json(res, 500, { error: 'Lỗi định dạng JSON.' });
    }
  }

  let reqPath = decodeURIComponent((req.url || '/').split('?')[0]);
  if (reqPath === '/') reqPath = '/index.html';
  const file = path.resolve(ROOT, '.' + reqPath);

  if (!file.startsWith(ROOT + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    return send(res, 404, 'text/plain; charset=utf-8', '404 - Không tìm thấy trang.');
  }

  const ext = path.extname(file);
  const types = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg'
  };
  send(res, 200, types[ext] || 'application/octet-stream', fs.readFileSync(file));
});

server.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(` ✨ DERMA-X v0.7.0 Aesthetic & Clinical Studio`);
  console.log(` 🌐 Đang chạy tại: http://localhost:${PORT}`);
  console.log(`=================================================`);
});
