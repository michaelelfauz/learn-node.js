const fs = require('fs');
const path = require('path');

// buat readable stream dengan chunk 15 byte
const readableStream = fs.createReadStream(
    path.resolve(__dirname, 'input.txt'),
    { highWaterMark: 15 } // baca15 karakter per bagian

);

// buat writeable stream
const writeableStream = fs.createWriteStream(
    path.resolve(__dirname, 'output.txt')
);

// saat ada data siap dibaca
readableStream.on('readable', () => {
    let chunk;
    while ((chunk = readableStream.read()) !== null) {
        writeableStream.write(`${chunk.toString()}\n`);
    }
});