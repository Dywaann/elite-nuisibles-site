import { useEffect } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { FileText, Phone } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PestPage from './pages/PestPage';
import Services from './pages/Services';
import Pros from './pages/Pros';
import Tarifs from './pages/Tarifs';
import About from './pages/About';
import Contact from './pages/Contact';
import Devis from './pages/Devis';
import Merci from './pages/Merci';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Cgu from './pages/Cgu';
import NotFound from './pages/NotFound';
import { PESTS } from './data/pests';
import { POSTS_BY_SLUG } from './data/posts';
import { SITE } from './data/site';

function PostRoute() {
  const { slug = '' } = useParams();
  const post = POSTS_BY_SLUG[slug];
  return post ? <BlogPost post={post} /> : <NotFound />;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1.4fr_1fr] gap-2 border-t border-line bg-white/95 p-2.5 shadow-[0_-6px_20px_rgba(15,28,71,.12)] backdrop-blur md:hidden">
      <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 rounded-xl bg-go py-3 text-[15.5px] font-bold text-white">
        <Phone className="h-4 w-4" /> Appeler
      </a>
      <Link to="/demander-un-devis/" className="flex items-center justify-center gap-2 rounded-xl bg-navy py-3 text-[15.5px] font-bold text-white">
        <FileText className="h-4 w-4" /> Devis
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="contenu">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services-lutte-nuisibles-paris" element={<Services />} />
          <Route path="/deratisation-paris" element={<PestPage d={PESTS.deratisation} />} />
          <Route path="/punaises-de-lit" element={<PestPage d={PESTS.punaises} />} />
          <Route path="/desinsectisation-cafards-blattes-idf" element={<PestPage d={PESTS.cafards} />} />
          <Route path="/desinsectisation-fourmis-idf" element={<PestPage d={PESTS.fourmis} />} />
          <Route path="/professionnels-deratisation-paris" element={<Pros />} />
          <Route path="/tarifs-deratisation-desinsectisation-idf" element={<Tarifs />} />
          <Route path="/qui-sommes-nous" element={<About />} />
          <Route path="/contact-elite-nuisibles-idf" element={<Contact />} />
          <Route path="/demander-un-devis" element={<Devis />} />
          <Route path="/page-de-remerciement" element={<Merci />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cgu" element={<Cgu />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/:slug" element={<PostRoute />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
