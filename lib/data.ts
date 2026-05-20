import type { Activity, Koordinasi, Pembinaan, Monev, NavItem } from "./types"

export const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Koordinasi", href: "/koordinasi" },
  {
    label: "Pembinaan dan Pendampingan",
    href: "/pembinaan",
    children: [
      { label: "Kalurahan Pleret", href: "/pembinaan/pleret" },
      { label: "Kalurahan Srimulyo", href: "/pembinaan/srimulyo" },
      { label: "Kalurahan Bantul", href: "/pembinaan/bantul" },
      { label: "Kalurahan Panggungharjo", href: "/pembinaan/panggungharjo" },
    ],
  },
  { label: "Monev", href: "/monev" },
]

export const activities: Activity[] = [
  {
    id: "1",
    title: "Pencanangan Desa Cantik di Kalurahan Pleret",
    date: "22 Mei 2025",
    description:
      "Pencanangan Program Desa Cinta Statistik (Desa Cantik) di Kalurahan Pleret, Kapanewon Pleret, Kabupaten Bantul. Acara dibuka by Bupati Kabupaten Bantul.",
    imageUrl: "/images/activities/pencanangan-pleret1.png",
    kalurahan: "Pleret",
    category: "koordinasi",
  },
  {
    id: "2",
    title: "Sosialisasi Awal Program Desa Cantik",
    date: "30 April 2025",
    description:
      "Bertempat di ruang kerja Lurah Pleret, BPS Kabupaten Bantul melaksanakan sosialisasi awal Program Desa Cinta Statistik kepada aparat Kalurahan Pleret.",
    imageUrl: "/images/activities/sosialisasi-pleret.png",
    kalurahan: "Pleret",
    category: "koordinasi",
  },
  {
    id: "3",
    title: "Pembinaan 1 - Zoom Meeting",
    date: "5 Juni 2025",
    description:
      "Badan Pusat Statistik Kabupaten Bantul menyelenggarakan kegiatan Pembinaan Desa Cantik Kabupaten Bantul Tahun 2025 secara daring melalui ruang virtual Zoom Meeting.",
    imageUrl: "/images/activities/pembinaan1a-pleret.png",
    kalurahan: "Pleret",
    category: "pembinaan",
  },
  {
    id: "4",
    title: "Koordinasi Kalurahan Pleret",
    date: "13 Februari 2025",
    description:
      "Koordinasi with Kalurahan Pleret dilakukan sejak penentuan kalurahan yang akan menjadi binaan dalam Program Desa Cantik Kabupaten Bantul Tahun 2025.",
    imageUrl: "/images/activities/koordinasi-pleret.png",
    kalurahan: "Pleret",
    category: "koordinasi",
  },
  {
    id: "5",
    title: "Koordinasi Kalurahan Srimulyo",
    date: "3 Juli 2025",
    description:
      "Tim Desa Cantik Kabupaten Bantul mengunjungi Kalurahan Srimulyo untuk berkoordinasi and berdiskusi tentang kegiatan statistik yang akan dilakukan.",
    imageUrl: "/images/activities/koordinasi-srimulyo.png",
    kalurahan: "Srimulyo",
    category: "koordinasi",
  },
  {
    id: "6",
    title: "Koordinasi Kalurahan Panggungharjo",
    date: "11 Juli 2025",
    description:
      "Tim Desa Cantik BPS Kabupaten Bantul melakukan kunjungan ke Kantor Kalurahan Panggungharjo dalam rangka koordinasi lanjutan terkait keberlanjutan Program Desa Cantik.",
    imageUrl: "/images/activities/koordinasi-panggungharjo.png",
    kalurahan: "Panggungharjo",
    category: "koordinasi",
  },
  {
    id: "7",
    title: "Pembinaan 3 - Penyajian Data",
    date: "29 Juli 2025",
    description:
      "Pembinaan ketiga dilaksanakan bersama agen statistik dari Kalurahan Pleret. Tim Desa Cantik BPS Kabupaten Bantul menyampaikan bagaimana cara menyajikan data secara baik and benar.",
    imageUrl:  "/images/activities/pembinaan3a-pleret.png",
    kalurahan: "Pleret",
    category: "pembinaan",
  },
  {
    id: "8",
    title: "Monitoring dan Evaluasi",
    date: "12 Agustus 2025",
    description:
      "Bertempat di ruang rapat Kalurahan Pleret diselenggarakan rapat evaluasi kegiatan Desa Cinta Statistik (Desa Cantik) Tahun 2025.",
    imageUrl:  "/images/activities/monev1.png",
    kalurahan: "Pleret",
    category: "monev",
  },
]

export const koordinasiData: Koordinasi[] = [
  {
    id: "k1",
    kalurahan: "Pleret",
    date: "13 Februari 2025",
    title: "Koordinasi - Kalurahan Pleret",
    description:
      "Koordinasi with Kalurahan Pleret dilakukan sejak penentuan kalurahan yang akan menjadi binaan dalam Program Desa Cantik Kabupaten Bantul Tahun 2025. Kepala BPS Kabupaten Bantul, Dedi Cahyono, SE, MA, MSE, bersama anggota mengunjungi Kalurahan Pleret dalam rangka pemberitahuan jika Kalurahan Pleret akan diusulkan sebagai kalurahan yang akan dibina oleh BPS dalam Program Desa Cinta Statistik Tahun 2025.",
    imageUrl: "/images/activities/koordinasi-pleret.png",
  },
  {
    id: "k2",
    kalurahan: "Bantul",
    date: "3 Juni 2025",
    title: "Koordinasi - Kalurahan Bantul",
    description:
      "Tim Desa Cantik BPS kabupaten Bantul melakukan kunjungan ke Kantor Kalurahan Bantul dalam rangka koordinasi program Desa Cantik tahun 2025.",
    imageUrl: "/images/activities/koordinasi-bantul.png",
  },
  {
    id: "k3",
    kalurahan: "Srimulyo",
    date: "3 Juli 2025",
    title: "Koordinasi - Kalurahan Srimulyo",
    description:
      "Keberlanjutan Program Desa Cinta Statistik (Desa Cantik) sangat penting agar literasi, kesadaran, and peran aktif perangkat desa dalam pengelolaan data statistik tidak pudar. Oleh karena itu, Tim Desa Cantik Kabupaten Bantul mengunjungi Kalurahan Srimulyo untuk berkoordinasi and berdiskusi tentang kegiatan statistik apa saja yang akan dilakukan oleh Kalurahan Srimulyo di Tahun 2025.",
    imageUrl: "/images/activities/koordinasi-srimulyo.png",
  },
  {
    id: "k4",
    kalurahan: "Panggungharjo",
    date: "11 Juli 2025",
    title: "Koordinasi - Kalurahan Panggungharjo",
    description:
      "Tim Desa Cantik BPS Kabupaten Bantul melakukan kunjungan ke Kantor Kalurahan Panggungharjo dalam rangka koordinasi lanjutan terkait keberlanjutan Program Desa Cantik. Koordinasi dilakukan bersama Fajar Budiaji selaku walidata Kalurahan Panggungharjo serta tim Pengelola Sistem Informasi Desa (PSID).",
    imageUrl: "/images/activities/koordinasi-panggungharjo.png",
  },
]

export const pembinaanData: Pembinaan[] = [
  {
    id: "p1",
    title: "Pembinaan 1",
    date: "5 Juni 2025",
    description:
      "Pada 5 Juni 2025, Badan Pusat Statistik Kabupaten Bantul menyelenggarakan kegiatan Pembinaan Desa Cantik Kabupaten Bantul Tahun 2025 secara daring melalui ruang virtual Zoom Meeting. Giat pembinaan diikuti by Dinas Komunikasi and Informatika Kabupaten Bantul, Badan Perencanaan and Pembangunan Daerah Kabupaten Bantul, Dinas Pemberdayaan Masyarakat and Kalurahan Kabupaten Bantul, and beberapa Kalurahan antara lain: Pleret, Srimulyo, Bantul, Panggungharjo, serta Tim Desa Cantik BPS Bantul.",
    kalurahan: ["Pleret", "Srimulyo", "Bantul", "Panggungharjo"],
    imageUrls: [
      "/images/activities/pembinaan1a-pleret.png",
      "/images/activities/pembinaan1b-pleret.png",
      "/images/activities/pembinaan1a-bantul.png",
      "/images/activities/pembinaan1b-bantul.png",
      "/images/activities/pembinaan1a-srimulyo.png",
      "/images/activities/pembinaan1b-srimulyo.png",
      "/images/activities/pembinaan1a-panggungharjo.png",
      "/images/activities/pembinaan1b-panggungharjo.png",
    ],
  },
  {
    id: "p2",
    title: "Pembinaan 2",
    date: "26 Juni 2025",
    description:
      "Pembinaan kedua fokus on pengumpulan data and teknik wawancara. Tim BPS memberikan pelatihan tentang cara mengumpulkan data yang valid and reliabel.",
    kalurahan: ["Pleret", "Srimulyo", "Bantul", "Panggungharjo"],
    imageUrls: [
      "/images/activities/pembinaan2a-pleret.png",
      "/images/activities/pembinaan2b-pleret.png",
    ],
  },
  {
    id: "p3",
    title: "Pembinaan 3",
    date: "29 Juli 2025",
    description:
      "Pembinaan ketiga dilaksanakan bersama agen statistik dari Kalurahan Pleret. Dalam kesempatan ini, Tim Desa Cantik BPS Kabupaten Bantul menyampaikan bagaimana cara menyajikan data secara baik and benar agar informasi yang terkandung di dalamnya mudah dipahami serta dimanfaatkan.",
    kalurahan: ["Pleret"],
    imageUrls: [
      "/images/activities/pembinaan3a-pleret.png",
      "/images/activities/pembinaan3b-pleret.png",
    ],
  },
]

export const monevData: Monev[] = [
  {
    id: "m1",
    title: "Monitoring dan Evaluasi Desa Cantik 2025",
    date: "12 Agustus 2025",
    description:
      "Bertempat di ruang rapat Kalurahan Pleret diselenggarakan rapat evaluasi kegiatan Desa Cinta Statistik (Desa Cantik) Tahun 2025. Evaluasi dihadiri by Lurah Pleret beserta jajarannya, agen statistik, and Tim Desa Cantik BPS Kabupaten Bantul. Kepala BPS Kabupaten Bantul, Dedi Cahyono menyampaikan bahwa program ini bertujuan untuk membangun kesadaran and kemampuan masyarakat desa dalam mengelola data statistik sebagai dasar perencanaan and pengembangan potensi wisata.",
    imageUrls: [
      "/images/activities/monev1.png",
      "/images/activities/monev2.png",
      "/images/activities/monev3.png",
    ],
    findings: [
      "Program telah berjalan sesuai rencana",
      "Agen statistik aktif dalam pengumpulan data",
      "Perlu peningkatan kapasitas dalam visualisasi data",
      "Rekomendasi untuk keberlanjutan program di tahun 2026",
    ],
  },
]

export const kalurahans = ["Pleret", "Srimulyo", "Bantul", "Panggungharjo"] as const

export const heroImages: Record<string, string> = {
  beranda: "/images/hero/herofix.png",
  koordinasi: "/images/hero/herofix.png",
  pembinaan: "/images/hero/herofix.png",
  monev: "/images/hero/herofix.png",
  pleret: "/images/hero/herofix.png",
  srimulyo: "/images/hero/herofix.png",
  bantul: "/images/hero/herofix.png",
  panggungharjo: "/images/hero/herofix.png",
}
