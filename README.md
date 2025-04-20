# learn-node.js
hari ini saya belajar tentang file system 
yaitu menigmpor tulisan dari notes.txt caranya adalah 
1. membuat folder/direktori file bernama filesystem di JAVASCRIPT-PROJECT
2. Membuat file bernama notes.txt dan index.js di dalam direktori filesystem

3. masukkan catatan yang akan di ekspor ke index.js 
contoh: Belajar node,js
main game bentar
seduh kopi
4. mulai tulis kode

kode lengkap

const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'notes.txt');

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.log('Gagal membaca file:', err.message);
    return;
  }

  console.log('Isi file notes.txt:');
  console.log(data);
});


penjelasan dari setiap kode 

const fs = require('fs');
mengimpor modul  fs(filesystem) dari node.js
digunakan untuk operasi file seperti membaca, menulis,menghapus, dll

const path = require('path');
mengimpor modul path dari node.js
digunakan untuk menangani dan menyusun jalur file agar tidak salah path 

const filePath = path.resolve(__dirname, 'notes.txt');
menentukan path absolut dari file notes.txt
-__dirname artinya: folder tempat file indeex.js berada sekarang 
path.resolv(...) menggabungkan __dirname dan notes.txt jadi path lengkap

kenapa? agar node.js tahu lokasi pasti filenya, jadi nggak bingung

fs.readFile(filePath, 'utf-8', (err, data) => { ... });
fungsi ini yntuk membaca isi file secara asynchronous (tidak mengganggu proses lain).
filePath: lokasi file yang ingin dibaca
'utf-8': encoding supaya teks dibaca dalam format tulisan biasa 
(err, data) => { ... } : callback function yang dijalankan saat file selesai dibaca

if (err) { ... }
mengecek apakah ada error saat membaca file (contohnya: file tidak ditemukan).

console.log(data);
menampilkan isi file notes.txt ke terminal

maknanya secara keseluruhan
kode ini:

menentukan lokasi file notes.txt
membaca isi file tersebut
menampilkan isi file ke  console
menangani error kalau file-nya gagal dibaca