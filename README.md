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

Readable stream untuk memecah file menjadi beberapa bagian agar menghemat memori/resource dan cocok untuk file besar









Rangkuman 
apa itu node.js 
node js adalah javscript runtime yang memungkinkan kita menjalankan javascipt di luar browser (misalnya untuk server/back-end). diciptakan oleh ryan dahl pada 2009.

menjalankan javascript di node js 
1.REPL - jalankan lansung di terminal
2. file.js - tulis kode di file dan jalankan dengan node namafile.js

Apa itu Global Object?

Bayangkan kamu lagi nulis kode di mana-mana, terus ada variabel atau fungsi yang bisa langsung kamu pakai tanpa perlu di-import dulu. Nah, itulah yang disebut global object — semacam benda ajaib yang bisa diakses dari mana aja di dalam program Node.js kamu.
✅ Contoh Global Object yang Sering Dipakai di Node.js:
Nama	Fungsi
global	Tempat utama untuk semua variabel global. Mirip seperti window di browser.
process	Info tentang program yang lagi jalan. Contohnya: sistem operasi, folder kerja, dll.
console	Untuk mencetak ke layar/terminal. Misalnya: console.log().
setTimeout, setInterval	Untuk membuat delay atau menjalankan kode berkala. Mirip di JavaScript biasa.
🧩 Ada juga yang namanya "pseudo-globals" (bukan benar-benar global tapi bisa dipakai langsung):
Nama	Fungsi
__filename	Menunjukkan nama file JavaScript yang sedang dijalankan.
__dirname	Menunjukkan folder tempat file itu berada.
require()	Untuk mengambil/meng-import module dari file lain.
module	Info tentang module/file yang sedang kamu tulis.

    Catatan: Pseudo-globals ini tidak tersedia kalau kamu langsung ketik di terminal REPL, tapi tersedia di file .js.

🔑 Intinya:

Global object itu seperti alat-alat bawaan Node.js yang langsung bisa kamu pakai, tanpa perlu pasang atau panggil apa-apa dulu. Mereka bikin hidup kita lebih gampang saat bikin program!

modularization
pisahkan kdoe ke dalam beberapa file / modulle agar lebih rapi.
gunakan module.exports untuk ekspor dan require() untuk impor.

filesystem (fs)
Mengakses dan memanipulasi file di komputer
gunaka ds.readfile() (async) atau fs.readFileSync() (sync).
akses efisien file besar > gunakan stream

Stream di node.js 
1. readable stream
membaca file bagian demi bagian (hemat memori).
gunakan: fs.createReadStream(path, { highWaterMark }).
2. writeable stream 
menulis file bagian demi bagian
gunakan fs.createWriteStream(path) lalu .write() dan .end().

process object 
berisi info tentang environment aplikasi(environtment adalah kumoulan kondisi atau konfigurasi).
process.env menyimpan environtment variable seperti NODE_ENV.

NPM(node package manager)
untuk mengelola library/third party module 
gunakan npm install namamodul (lokal) atau npx untuk eksekusi global tanpa install

Event (EventEmitter)
Pola event-driven,contoh: saat ada panggilan masuk, kita angkat
node.js punya EventEmitter untuk menangani event secara efisien

KESIMPULAN
node.js memungkinkan javascript berjalan di server. dengan konsep modular, stream, event dan manajemen paket (npm), kita bisa membangun aplikasi back end yang efisien dan skalabel.
