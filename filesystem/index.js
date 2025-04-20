const fs = require('fs');
const path = require('path');

// tentukan path absolut file notes.txt
const filePath = path.resolve(__dirname, 'notes.txt');

// baca file secara asynchronous
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.log('Gagal membaca file', err.message);
        return;
    }

    console.log('Isi file notes.txt');
    console.log(data);
});