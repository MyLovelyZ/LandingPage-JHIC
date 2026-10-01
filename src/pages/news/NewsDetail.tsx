import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroNews from "../../components/news/HeroNews";
import ArticleNews from "../../components/news/ArticleNews";
import MoreNews from "../../components/news/MoreNews";
import NotFound from "../notfound/NotFound";
import { news } from "../../data/news";

const sortedNews = [...news].sort((a, b) => b.date.localeCompare(a.date));

export default function NewsDetail() {
    const { slug } = useParams();
    const item = news.find((n) => n.slug === slug);

    if (!item) return <NotFound />;

    const others = sortedNews.filter((n) => n.slug !== item.slug);
    // Sidebar berisi berita terbaru; bagian bawah mendahulukan kategori yang sama tanpa mengulang isi sidebar
    // (sort bersifat stabil, jadi urutan tanggal tetap terjaga di dalam tiap kelompok)
    const latest = others.slice(0, 4);
    const related = others
        .filter((n) => !latest.includes(n))
        .sort((a, b) => Number(b.category === item.category) - Number(a.category === item.category))
        .slice(0, 3);

    return(
        <>
            <Navbar />
            {/* key: animasi & coretan diulang saat pindah dari satu berita ke berita lain */}
            <main key={item.slug}>
                <HeroNews item={item} />
                <ArticleNews item={item} latest={latest} />
                <MoreNews items={related} />
            </main>
            <Footer />
        </>
    )
}
