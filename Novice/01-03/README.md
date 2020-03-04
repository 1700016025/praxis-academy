## Minggu 03

## Hari Ke 3  : Function / Fungsi di JavaScript

## Oleh       : Dian Pertiwi

## Tanggal    : 04 Maret 2020

## Ringkasan Materi : 
## JavaScript Functions — Understanding The Basics

## What is a Function? 
## Fungsi adalah subprogram yang dirancang untuk melakukan tugas tertentu.
## Fungsi dijalankan ketika mereka dipanggil. Ini dikenal sebagai memanggil fungsi.
## Nilai dapat diteruskan ke fungsi dan digunakan di dalam fungsi.
## Fungsi selalu mengembalikan nilai. Dalam JavaScript, jika tidak ada nilai kembali yang ditentukan, fungsi tersebut akan kembali tidak terdefinisi.
## Fungsi adalah objek

## Definisi function adalah penjilidan reguler di mana nilai penjilidan adalah fungsi. Misalnya, kode ini mendefinisikan kuadrat untuk merujuk ke fungsi yang menghasilkan kuadrat dari angka yang diberikan
## Setiap function dalam JavaScript adalah objek Fungsi. Lihat Function untuk informasi tentang properti dan metode objek Fungsi.

## Untuk mengembalikan nilai selain dari default, fungsi harus memiliki pernyataan pengembalian yang menentukan nilai yang akan dikembalikan. Function tanpa pernyataan pengembalian akan mengembalikan nilai default. Dalam kasus konstruktor yang dipanggil dengan kata kunci baru, nilai default adalah nilai parameternya. Untuk semua fungsi lainnya, nilai pengembalian default tidak ditentukan.

## Variabel : Anda menggunakan variabel sebagai nama simbolik dalam aplikasi Anda.  Nama variabel, disebut Pengidentifikasi, sesuai dengan peraturan tertentu.

## Mengevaluasi variabel : Variabel yang dideklarasikan dengan menggunakan pernyataan  var atau let tanpa penetapan nilai yang ditentukan memiliki nilai undefined.

## Lingkup variabel : Bila Anda mendeklarasikan variabel di luar fungsi apa pun, ini disebut variabel global , karena tersedia pada kode lain dalam dokumen tersebut. Ketika Anda mendeklarasikan sebuah variabel dalam suatu fungsi, itu disebut variabel lokal , karena hanya tersedia di dalam fungsi itu.

## Hoisting variabel : Hal lain yang tidak biasa tentang variabel dalam JavaScript adalah Anda bisa merujuk ke variabel yang dideklarasikan nanti, tanpa mendapatkan eksepsi. Konsep ini dikenal sebagai hoisting; Variabel dalam JavaScript dalam arti "dikibarkan" atau diangkat ke atas fungsi atau pernyataan. Bagaimanapun, variabel yang dikibarkan akan memberikan nilai undefined. Jadi, bahkan jika Anda mendeklarasikan dan menginisialisasi setelah Anda menggunakan atau merujuk ke variabel ini, itu akan tetap memberikan undefined.
 
## Variabel global : Variabel global sebenarnya adalah properti dari objek global . Di halaman web objek global itu window, sehingga Anda bisa mengatur dan mengakses variabel global dengan menggunakan sintaks window.variable

## Mengapa tanda kurung digunakan untuk membungkus panggilan fungsi JavaScript? Dalam JavaScript, fungsi yang dibungkus dengan tanda kurung disebut "Immediately Invoked Function Expressions" atau "Self Executing Functions". Tujuan dari pembungkus adalah untuk namespace dan mengontrol visibilitas fungsi anggota. Itu membungkus kode di dalam lingkup fungsi dan mengurangi bentrok dengan perpustakaan lain. Ini adalah apa yang kita sebut Ekspresi Fungsi Segera Dibatalkan (IIFE) atau Self Executing Function Anonymous

## Nested functions dan closure
## Nested functions : Suatu function disebut "nested" ketika itu dibuat di dalam function lain. Di sini function nested getFullName () dibuat untuk kenyamanan. Itu dapat mengakses variabel luar dan juga dapat mengembalikan nama lengkap. Function nested sangat umum dalam JavaScript. Yang jauh lebih menarik, fungsi bersarang dapat dikembalikan baik sebagai properti dari objek baru atau sebagai hasil dengan sendirinya. Kemudian dapat digunakan di tempat lain. Di mana pun, ia masih memiliki akses ke variabel luar yang sama.

## Closure function : Variabel JavaScript dapat menjadi milik lingkup lokal atau global dan Variabel global dapat dibuat lokal (pribadi) dengan Closure

## Fungsi generator : Generator adalah fungsi yang dapat keluar dan kemudian dimasukkan kembali. Konteks mereka (binding variabel) akan disimpan di seluruh pintu masuk. Deklarasi fungsi * (kata kunci fungsi diikuti oleh tanda bintang) mendefinisikan fungsi generator, yang mengembalikan objek Generator.

## this and Arrow Functions:
## Arrow functions (juga disebut "fat arrow functions") tidak diragukan lagi salah satu fitur ES6 yang lebih populer. Mereka memperkenalkan cara baru dalam menulis function ringkas. 
## diperkenalkan dalam ES6, menyediakan cara ringkas untuk menulis fungsi dalam JavaScript. Keuntungan signifikan lain yang ditawarkannya adalah kenyataan bahwa ia tidak mengikatnya sendiri. Dengan kata lain, konteks di dalam fungsi panah didefinisikan secara leksikal atau statis.

## Variable hoisting adalah perilaku dalam JavaScript di mana deklarasi variabel dipindahkan ke bagian atas lingkup (lingkup fungsi atau lingkup global) di mana variabel tersebut didefinisikan. Variabel JavaScript khas dapat dibuat dalam dua tahap - deklarasi dan inisialisasi.

## fuction Hoisting : Selain variabel, mengangkat berlaku untuk fungsi yang dibuat menggunakan sintaks deklarasi function.

## Penjelasaan tentang isi repo :
 



