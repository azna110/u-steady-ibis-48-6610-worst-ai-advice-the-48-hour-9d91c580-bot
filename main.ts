// Entri "Worst AI Advice: The 48 Hour" — program kecil yang mencetak satu
// saran AI yang sengaja buruk ke berkas keluaran. Tanpa jam, tanpa acak,
// tanpa jaringan: keluarannya selalu sama setiap kali dijalankan.

import { mkdirSync, writeFileSync } from "node:fs";

const potongan = [
  "To stop hackers, email them your ",
  "password first — if they already ",
  "have it, they have nothing left to steal.",
];

const isi = potongan.join("") + "\n";
const folderKeluaran = "/output";
const jalurKeluaran = `${folderKeluaran}/entry.txt`;

mkdirSync(folderKeluaran, { recursive: true });
writeFileSync(jalurKeluaran, isi, "utf8");
