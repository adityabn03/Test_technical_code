let kalimat = "saya dapat menyelesaikan soal ini dengan baik";
let kalimatBaru = kalimat.replace(/\b\w/g, (l) => l.toUpperCase());

console.log(kalimatBaru);
