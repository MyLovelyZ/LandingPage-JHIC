import { useState } from "react";
import NewsCard from "./NewsCard";
import { SketchArrow, SketchUnderline } from "./SketchFrame";
import { news, newsCategories, type NewsCategory } from "../data/news";

const sortedNews = [...news].sort((a, b) => b.date.localeCompare(a.date));

// Daftar berita dengan filter kategori & halaman. Dipakai di section berita beranda dan di halaman /berita,
// jadi isi keduanya selalu sama. pageSize = jumlah kartu kecil per halaman, di luar berita terbaru yang tampil besar.
// wide = dipasang di halaman selebar layar, jadi di layar sangat lebar kartunya 4 kolom supaya tidak terlalu besar
export default function NewsBrowser({ pageSize = 6, wide = false, className = "" }: {
    pageSize?: number;
    wide?: boolean;
    className?: string;
}) {
    const [category, setCategory] = useState<NewsCategory | "Semua">("Semua");
    const [page, setPage] = useState(0);

    const filtered = category === "Semua" ? sortedNews : sortedNews.filter((n) => n.category === category);
    // Berita terbaru tampil besar di halaman pertama, sisanya dibagi per pageSize kartu
    const featured = page === 0 ? filtered[0] : undefined;
    const pageCount = Math.max(1, Math.ceil((filtered.length - 1) / pageSize));
    const start = 1 + page * pageSize;
    const items = filtered.slice(start, start + pageSize);

    const selectCategory = (c: NewsCategory | "Semua") => {
        setCategory(c);
        setPage(0);
    };

    return(
        <div className={`grid gap-8 lg:gap-12 lg:grid-cols-[13rem_1fr] ${className}`}>
            {/* Kategori: sidebar di desktop, deretan chip yang bisa digeser di HP */}
            <nav aria-label="Kategori berita" className="min-w-0">
                <h3 className="hidden lg:block font-display text-lg font-bold uppercase tracking-wide">Kategori Berita</h3>
                <ul className="flex lg:flex-col gap-2 lg:gap-1 lg:mt-5 overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0 [scrollbar-width:none]">
                    {(["Semua", ...newsCategories] as const).map((c) => (
                        <li key={c} className="shrink-0">
                            <button
                                type="button"
                                onClick={() => selectCategory(c)}
                                aria-pressed={category === c}
                                // Kategori aktif ditandai coretan bawah; py-2.5 memberi ruang untuk coretannya
                                // (daftar ini overflow-x-auto, jadi yang keluar dari kotaknya ikut terpotong)
                                className={`px-3 py-2.5 lg:px-0 text-sm font-medium transition-colors ${
                                    category === c ? "text-brand-darkred" : "text-brand-ink/70 hover:text-brand-ink"
                                }`}
                            >
                                {category === c ? <SketchUnderline size="sm">{c}</SketchUnderline> : c}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="min-w-0">
                {filtered.length > 0 ? (
                    <div key={`${category}-${page}`} className="grid gap-5 animate-fade-up">
                        {featured && <NewsCard item={featured} featured />}

                        {items.length > 0 && (
                            <div className={`grid gap-5 sm:grid-cols-2 xl:grid-cols-3 ${wide ? "2xl:grid-cols-4" : ""}`}>
                                {items.map((item) => (
                                    <NewsCard key={item.slug} item={item} />
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <p className="py-16 text-center text-brand-ink/60">Belum ada berita di kategori ini.</p>
                )}

                {pageCount > 1 && (
                    <div className="mt-10 flex items-center justify-between gap-4">
                        <PageButton direction="left" disabled={page === 0} onClick={() => setPage(page - 1)} />

                        <div className="flex flex-wrap justify-center gap-3">
                            {Array.from({ length: pageCount }, (_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => setPage(i)}
                                    aria-label={`Halaman ${i + 1}`}
                                    aria-current={i === page ? "page" : undefined}
                                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                        i === page ? "bg-brand-darkred" : "bg-brand-ink/20 hover:bg-brand-ink/40"
                                    }`}
                                />
                            ))}
                        </div>

                        <PageButton direction="right" disabled={page === pageCount - 1} onClick={() => setPage(page + 1)} />
                    </div>
                )}
            </div>
        </div>
    )
}

function PageButton({ direction, disabled, onClick }: { direction: "left" | "right"; disabled: boolean; onClick: () => void }) {
    return(
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-label={direction === "left" ? "Halaman sebelumnya" : "Halaman berikutnya"}
            className="shrink-0 w-12 h-12 rounded-lg bg-brand-darkred text-white flex items-center justify-center transition-colors hover:bg-brand-deepred disabled:bg-brand-darkred/40 disabled:cursor-not-allowed"
        >
            <SketchArrow className={`w-7 h-3.5 ${direction === "left" ? "-scale-x-100" : ""}`} />
        </button>
    )
}
