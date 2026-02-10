// Vercel Serverless Function for color block generation
// This function dynamically generates color block images

export default function handler(req, res) {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);
  const match = pathname.match(/\/color-block\/([a-fA-F0-9]{6})\.png$/);
  
  if (!match) {
    res.status(404).send('Not Found');
    return;
  }
  
  const hexColor = match[1];
  const pngBuffer = createColorBlockPNG(hexColor);
  
  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  res.send(pngBuffer);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

function createColorBlockPNG(hexColor) {
  const width = 500;
  const height = 500;
  
  const PNG_SIGNATURE = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);
  
  const imageData = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    imageData[i * 4] = r;
    imageData[i * 4 + 1] = g;
    imageData[i * 4 + 2] = b;
    imageData[i * 4 + 3] = 255;
  }
  
  const IHDR = Buffer.alloc(13);
  IHDR.writeUInt32BE(width, 0);
  IHDR.writeUInt32BE(height, 4);
  IHDR.writeUInt8(8, 8);
  IHDR.writeUInt8(2, 9);
  IHDR.writeUInt8(0, 10);
  IHDR.writeUInt8(0, 11);
  IHDR.writeUInt8(0, 12);
  
  const zlib = require('zlib');
  const compressed = zlib.deflateSync(imageData);
  
  function createChunk(type, data) {
    const length = Buffer.alloc(4);
    length.writeUInt32BE(data.length, 0);
    const typeBuffer = Buffer.from(type, 'ascii');
    const crc = Buffer.alloc(4);
    
    const crcInput = Buffer.concat([typeBuffer, data]);
    const crcValue = zlib.crc32(crcInput);
    crc.writeUInt32BE(crcValue >>> 0, 0);
    
    return Buffer.concat([length, typeBuffer, data, crc]);
  }
  
  const IHDRChunk = createChunk('IHDR', IHDR);
  const IDATChunk = createChunk('IDAT', compressed);
  const IENDChunk = createChunk('IEND', Buffer.alloc(0));
  
  return Buffer.concat([PNG_SIGNATURE, IHDRChunk, IDATChunk, IENDChunk]);
}
