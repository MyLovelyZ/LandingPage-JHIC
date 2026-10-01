import type { IconName } from "../components/Icon";
import fotoLabMM1 from "../assets/images/facilities/Lab MM 1.jpg";
import fotoLabMM2 from "../assets/images/facilities/Lab MM 2.jpg";
import fotoWorkshopMM from "../assets/images/facilities/WS MM.jpg";
import fotoPodcast1 from "../assets/images/facilities/Lab Podcast 1.jpg";
import fotoPodcast2 from "../assets/images/facilities/Lab Podcast 2.jpg";
import fotoLabRPL from "../assets/images/facilities/Lab RPL.jpg";
import fotoLabMikrotik from "../assets/images/facilities/Lab Mikrotik.jpg";
import fotoFiberOptik1 from "../assets/images/facilities/Lab Fiber Optik 1.jpg";
import fotoFiberOptik2 from "../assets/images/facilities/Lab Fiber Optik 2.jpg";
import fotoWorkshopTKJ1 from "../assets/images/facilities/WS TKJ 1.jpg";
import fotoWorkshopTKJ2 from "../assets/images/facilities/WS TKJ 2.jpg";
import fotoWorkshopTKJ3 from "../assets/images/facilities/WS TKJ 3.jpg";
import fotoBankMini1 from "../assets/images/facilities/WS PKM 1.jpg";
import fotoBankMini2 from "../assets/images/facilities/WS PKM 2.jpg";
import fotoBankMini3 from "../assets/images/facilities/WS PKM 3.jpg";
import fotoLabLPB from "../assets/images/facilities/Lab LPB.jpg";
import fotoKelas1 from "../assets/images/facilities/Ruang Kelas 1.jpg";
import fotoKelas2 from "../assets/images/facilities/Ruang Kelas 2.jpg";
import fotoPerpustakaan from "../assets/images/facilities/Perpustakaan.jpg";
import fotoBkk1 from "../assets/images/facilities/RUANG BKK-LSP.jpg";
import fotoBkk2 from "../assets/images/facilities/RUANG BKK- LSP 2.jpg";
import fotoLsp1 from "../assets/images/facilities/Ruang LSP 1.jpg";
import fotoLsp2 from "../assets/images/facilities/RUANG LSP 2.jpg";
import fotoLsp3 from "../assets/images/facilities/RUANG LSP 3.jpg";
import fotoKbs1 from "../assets/images/facilities/KBS 1.jpg";
import fotoKbs2 from "../assets/images/facilities/KBS 2.jpg";
import fotoKbs3 from "../assets/images/facilities/KBS 3.jpg";
import fotoKantin1 from "../assets/images/facilities/Kanti 1.jpg";
import fotoKantin2 from "../assets/images/facilities/Kantin 2.jpg";
import fotoToilet from "../assets/images/facilities/Toilet.jpg";

export type FacilityCategory = "praktik" | "penunjang";

export type Facility = {
    id: string;
    title: string;
    desc: string;
    icon: IconName; // ditampilkan selama belum ada foto
    images: string[]; // foto pertama jadi sampul (dipakai juga di slider beranda), kosongkan kalau belum ada foto
    category: FacilityCategory; // "praktik" = ruang praktik jurusan, "penunjang" = sarana untuk semua siswa
    features: string[]; // isi atau peralatan utama, tampil di halaman /fasilitas
    majors?: string[]; // kode jurusan yang memakai ruang ini, contoh ["RPL", "MM"]
};

// Foto dari src/assets/images/facilities. Ruang praktik diurutkan sesuai urutan jurusan di majors.ts,
// fasilitas yang belum punya foto ditaruh paling akhir di kategorinya.
// TODO: cocokkan deskripsi & daftar isi ruangan dengan kondisi asli, lalu tambahkan foto bengkel otomasi,
// masjid, lab bahasa, dan lab IPA
// Slider beranda menampilkan semua fasilitas yang sudah punya foto, sesuai urutan di sini
export const facilities: Facility[] = [
    {
        id: "lab-multimedia",
        title: "Laboratorium Multimedia",
        desc: "Ruang komputer ber-AC untuk praktik desain grafis, ilustrasi digital, dan editing video.",
        icon: "monitor",
        images: [fotoLabMM1, fotoLabMM2],
        category: "praktik",
        features: ["Komputer untuk praktik desain dan editing", "Software desain grafis dan editing video", "Ruangan ber-AC"],
        majors: ["MM"],
    },
    {
        id: "workshop-multimedia",
        title: "Workshop Multimedia",
        desc: "Studio produksi dengan green screen, kamera, dan lighting untuk praktik foto dan video seperti di rumah produksi.",
        icon: "camera",
        images: [fotoWorkshopMM],
        category: "praktik",
        features: ["Green screen untuk produksi video", "Kamera dan tripod", "Komputer untuk editing hasil rekaman"],
        majors: ["MM"],
    },
    {
        id: "studio-podcast",
        title: "Studio Podcast",
        desc: "Studio rekaman podcast dan video lengkap dengan lighting softbox dan kamera untuk praktik produksi konten.",
        icon: "video",
        images: [fotoPodcast1, fotoPodcast2],
        category: "praktik",
        features: ["Lighting softbox", "Kamera dan tripod untuk rekaman", "Meja siaran untuk podcast"],
        majors: ["MM"],
    },
    {
        id: "lab-rpl",
        title: "Laboratorium RPL",
        desc: "Laboratorium komputer untuk praktik pemrograman web, aplikasi mobile, dan basis data.",
        icon: "code",
        images: [fotoLabRPL],
        category: "praktik",
        features: ["Komputer untuk praktik pemrograman", "Software pengembangan aplikasi", "Akses internet"],
        majors: ["RPL"],
    },
    {
        id: "lab-mikrotik",
        title: "Laboratorium Mikrotik",
        desc: "Laboratorium komputer dengan rak perangkat jaringan untuk praktik konfigurasi router dan switch.",
        icon: "network",
        images: [fotoLabMikrotik],
        category: "praktik",
        features: ["Router dan switch Mikrotik", "Rak perangkat jaringan", "Komputer untuk praktik konfigurasi"],
        majors: ["TKJ"],
    },
    {
        id: "lab-fiber-optik",
        title: "Laboratorium Fiber Optik",
        desc: "Ruang praktik instalasi jaringan fiber optik, lengkap dengan simulasi tiang dan jalur kabel seperti di lapangan.",
        icon: "server",
        images: [fotoFiberOptik1, fotoFiberOptik2],
        category: "praktik",
        features: ["Simulasi tiang dan jalur kabel", "Peralatan instalasi fiber optik", "Rak dan kabinet perangkat jaringan"],
        majors: ["TKJ"],
    },
    {
        id: "workshop-tkj",
        title: "Workshop TKJ",
        desc: "Bengkel perakitan dan perbaikan komputer serta perangkat jaringan, dengan meja kerja dan rak komponen.",
        icon: "cpu",
        images: [fotoWorkshopTKJ1, fotoWorkshopTKJ2, fotoWorkshopTKJ3],
        category: "praktik",
        features: ["Meja kerja perakitan komputer", "Trainer dan komponen elektronika", "Peralatan instalasi kabel jaringan"],
        majors: ["TKJ"],
    },
    {
        id: "bank-mini",
        title: "Bank Mini",
        desc: "Simulasi layanan bank sungguhan untuk praktik teller dan customer service.",
        icon: "bank",
        images: [fotoBankMini1, fotoBankMini2, fotoBankMini3],
        category: "praktik",
        features: ["Meja teller dan customer service", "Ruang tunggu nasabah", "Praktik transaksi tabungan siswa"],
        majors: ["PKM"],
    },
    {
        // TODO: pastikan kepanjangan LPB, di sini dianggap "Layanan Perbankan"
        id: "lab-lpb",
        title: "Laboratorium Layanan Perbankan",
        desc: "Ruang praktik dengan meja layanan untuk latihan melayani nasabah dan administrasi perbankan.",
        icon: "calculator",
        images: [fotoLabLPB],
        category: "praktik",
        features: ["Meja layanan untuk simulasi pelayanan", "Proyektor dan papan tulis", "Muat satu rombongan belajar"],
        majors: ["PKM"],
    },
    {
        id: "bengkel-otomasi",
        title: "Bengkel Otomasi",
        desc: "Trainer PLC, pneumatik, dan panel listrik industri untuk praktik otomasi.",
        icon: "cpu",
        images: [],
        category: "praktik",
        features: ["Trainer PLC", "Rangkaian sensor dan pneumatik", "Panel listrik industri"],
        majors: ["TOI"],
    },
    {
        id: "ruang-kelas",
        title: "Ruang Kelas",
        desc: "Ruang kelas yang lapang dan terang dengan proyektor untuk pembelajaran teori.",
        icon: "users",
        images: [fotoKelas1, fotoKelas2],
        category: "penunjang",
        features: ["32 ruang kelas", "Proyektor dan layar presentasi", "Meja dan kursi siswa"],
    },
    {
        id: "perpustakaan",
        title: "Perpustakaan Digital",
        desc: "Koleksi buku cetak dan e-book, ruang baca yang nyaman, serta akses internet cepat untuk belajar mandiri.",
        icon: "book",
        images: [fotoPerpustakaan],
        category: "penunjang",
        features: ["Buku cetak dan e-book", "Ruang baca", "Akses internet"],
    },
    {
        id: "kantor-bkk-lsp",
        title: "Kantor BKK & LSP",
        desc: "Kantor Bursa Kerja Khusus dan Lembaga Sertifikasi Profesi, tempat siswa dan alumni mencari lowongan kerja, berkonsultasi soal karier, dan mengurus sertifikasi.",
        icon: "briefcase",
        images: [fotoBkk1, fotoBkk2],
        category: "penunjang",
        features: ["Informasi lowongan kerja", "Konsultasi karier", "Ruang tamu untuk mitra industri"],
    },
    {
        id: "ruang-lsp",
        title: "Ruang LSP",
        desc: "Ruang Lembaga Sertifikasi Profesi untuk uji kompetensi, supaya siswa lulus dengan sertifikat keahlian.",
        icon: "award",
        images: [fotoLsp1, fotoLsp2, fotoLsp3],
        category: "penunjang",
        features: ["Pelaksanaan uji kompetensi", "Administrasi sertifikasi", "Arsip dokumen peserta uji"],
    },
    {
        // TODO: pastikan kepanjangan KBS
        id: "kbs",
        title: "KBS (Toko Sekolah)",
        desc: "Toko sekolah ber-AC yang menyediakan makanan ringan, minuman, dan perlengkapan sekolah.",
        icon: "briefcase",
        images: [fotoKbs1, fotoKbs2, fotoKbs3],
        category: "penunjang",
        features: ["Makanan ringan dan minuman", "Perlengkapan sekolah", "Ruangan ber-AC"],
    },
    {
        id: "kantin",
        title: "Kantin",
        desc: "Kantin semi terbuka dengan beberapa kios makanan dan meja makan, tempat siswa beristirahat.",
        icon: "users",
        images: [fotoKantin1, fotoKantin2],
        category: "penunjang",
        features: ["Kios makanan dan minuman", "Meja makan bersama", "Area semi terbuka"],
    },
    {
        id: "toilet",
        title: "Toilet",
        desc: "Toilet yang bersih dan terawat dengan wastafel dan cermin.",
        icon: "check",
        images: [fotoToilet],
        category: "penunjang",
        features: ["Wastafel dan cermin", "Bilik toilet tertutup"],
    },
    {
        id: "masjid",
        title: "Masjid Sekolah",
        desc: "Pusat kegiatan ibadah, kajian rutin, dan pembinaan karakter siswa setiap hari.",
        icon: "mosque",
        images: [],
        category: "penunjang",
        features: ["Salat berjamaah", "Kajian rutin", "Pembinaan karakter"],
    },
    {
        id: "lab-bahasa",
        title: "Laboratorium Bahasa",
        desc: "Ruang belajar bahasa dengan perangkat audio untuk latihan menyimak dan berbicara, dipakai di kelas Bahasa Inggris dan Jepang.",
        icon: "headphones",
        images: [],
        category: "penunjang",
        features: ["Perangkat audio untuk setiap siswa", "Kelas Bahasa Inggris dan Jepang", "Persiapan kerja dan magang luar negeri"],
    },
    {
        id: "lab-ipa",
        title: "Laboratorium IPA",
        desc: "Laboratorium sains untuk praktikum mata pelajaran Projek IPAS, supaya siswa memahami konsep lewat percobaan langsung.",
        icon: "flask",
        images: [],
        category: "penunjang",
        features: ["Alat dan bahan praktikum sains", "Praktikum Projek IPAS"],
    },
];
