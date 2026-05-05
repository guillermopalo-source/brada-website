import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BradaLogo from '@/components/custom/BradaLogo';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Mantenemos oculto solo en /proyectos (si es una ruta legacy tuya),
  // pero liberamos los detalles de /work para que el logo SÍ aparezca.
  const isHiddenPage = location.pathname.includes('/proyectos') || /\/work\/.+/.test(location.pathname);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isHiddenPage) return null;

  return (
    <>
      {/* Navigation Bar - Fixed Logo Only */}
      <header
        className={`fixed top-[20px] z-50 transition-all duration-500 ease-expo-out pointer-events-none mix-blend-difference ${isScrolled ? 'opacity-0' : 'opacity-100'} 
          left-0 translate-x-0 w-full
          md:left-1/2 md:-translate-x-1/2 md:max-w-[1440px]`}
      >
        <div className="w-full h-auto pt-[25px] pb-[15px] md:py-[25px] px-[16px] sm:px-[24px] md:px-[30px] flex items-center justify-start md:justify-between">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}
            className="block transition-opacity pointer-events-auto text-[#fcfbed]"
          >
            <BradaLogo className="w-[150px] md:w-[180px] h-auto" />
          </a>
        </div>
      </header>
    </>
  );
};

export default Navigation;