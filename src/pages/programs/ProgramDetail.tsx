import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ArticleProgram from "../../components/programs/ArticleProgram";
import MorePrograms from "../../components/programs/MorePrograms";
import NotFound from "../notfound/NotFound";
import { programs } from "../../data/programs";

export default function ProgramDetail() {
    const { id } = useParams();
    const index = programs.findIndex((p) => p.id === id);
    const program = programs[index];

    if (!program) return <NotFound />;

    // Tiga program setelahnya sesuai urutan di beranda, kembali ke awal setelah program terakhir
    const others = [...programs.slice(index + 1), ...programs.slice(0, index)].slice(0, 3);

    return(
        <>
            <Navbar />
            {/* key: animasi & coretan diulang saat pindah dari satu program ke program lain */}
            <main key={program.id}>
                <ArticleProgram program={program} />
                <MorePrograms items={others} />
            </main>
            <Footer />
        </>
    )
}
