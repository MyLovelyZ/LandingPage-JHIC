import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import MajorDetail from "../pages/majors/MajorDetail";
import Teachers from "../pages/teachers/Teachers";
import TeacherDetail from "../pages/teachers/TeacherDetail";
import Facilities from "../pages/facilities/Facilities";
import News from "../pages/news/News";
import NewsDetail from "../pages/news/NewsDetail";
import ProgramDetail from "../pages/programs/ProgramDetail";
import NotFound from "../pages/notfound/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tentang" element={<About />} />
      <Route path="/profil-guru" element={<Teachers />} />
      <Route path="/profil-guru/:id" element={<TeacherDetail />} />
      <Route path="/fasilitas" element={<Facilities />} />
      <Route path="/jurusan/:slug" element={<MajorDetail />} />
      <Route path="/berita" element={<News />} />
      <Route path="/berita/:slug" element={<NewsDetail />} />
      <Route path="/program/:id" element={<ProgramDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
