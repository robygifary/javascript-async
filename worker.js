/*
  Saat kita membuat object Worker, Worker tidak akan secara otomatis berjalan, melainkan kita perlu memberi perintah dengan cara mengirim pesan
  Untuk mengirim pesan, kita bisa gunakan method postMessage()
  Sedangkan untuk menerima balasan dari worker, kita bisa menggunakan event listener onmessage
  Data yang diterima adalah object MessageEvent
*/

addEventListener('message', function (message) {
  const total = message.data;

  for (let i = 0; i < total; i++) {
    postMessage(i);
  }
});
