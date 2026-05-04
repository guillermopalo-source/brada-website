import { BrowserRouter, Routes, Route, Navigate, Outlet, useParams } from 'react-router-dom';
import ScrollToTop from './components/custom/ScrollToTop';
import { ReactLenis, useLenis } from 'lenis/react';
import { lazy, Suspense } from 'react';
import RootLayout from './layouts/RootLayout';

const MainAgencyHub = lazy(() => import('./pages/MainAgencyHub'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const WorkDetailPage = lazy(() => import('./pages/WorkDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
import { ThemeProvider } from './context/ThemeContext';
import { HeaderProvider } from './context/HeaderContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Language guard wrapper
const LanguageLayout = () => {
  const { lang } = useParams();
  if (lang !== 'es' && lang !== 'en') {
    return <Navigate to="/es" replace />;
  }
  return <Outlet />;
};

function PageLoader() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-transparent"></div>
  );
}



function App() {
  // Sync Lenis scroll position with GSAP ScrollTrigger on every frame
  useLenis(() => {
    ScrollTrigger.update();
  });

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <ThemeProvider>
        <HeaderProvider>
          {/* Capa Externa: Fondo Infinito */}
          <div className="w-full bg-background text-foreground transition-colors duration-500">
            <BrowserRouter>
              <ScrollToTop />
              {/* Capa Interna: Contenedor Centrado (Transparente) */}
              <div className="w-full max-w-[1440px] mx-auto px-[16px] py-[16px] sm:px-[24px] sm:py-[24px] md:p-[30px] flex flex-col bg-transparent">
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Navigate to="/es" replace />} />
                    <Route path="/:lang" element={<LanguageLayout />}>
                      {/* Root Layout wraps all routes with persistent navigation, menu, and footer */}
                      <Route element={<RootLayout />}>
                        <Route index element={<MainAgencyHub />} />
                        <Route path="work" element={<WorkPage />} />
                        <Route path="work/:id" element={<WorkDetailPage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="proyectos/:id" element={<WorkDetailPage />} />
                        <Route path="project/:id" element={<WorkDetailPage />} />
                        {/* Catch all for this specific lang prefix if needed */}
                        <Route path="*" element={<Navigate to="." replace />} />
                      </Route>
                    </Route>
                    {/* Global catch all */}
                    <Route path="*" element={<Navigate to="/es" replace />} />
                  </Routes>
                </Suspense>
              </div>
            </BrowserRouter>
          </div>
        </HeaderProvider>
      </ThemeProvider>
    </ReactLenis>
  );
}

export default App;
