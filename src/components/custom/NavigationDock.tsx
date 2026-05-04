import { useTheme } from '@/context/ThemeContext';
import { Menu, X } from 'lucide-react';

interface NavigationDockProps {
    isOpen: boolean;
    onMenuClick: () => void;
}

const NavigationDock = ({ isOpen, onMenuClick }: NavigationDockProps) => {
    const { toggleTheme } = useTheme();

    return (
        <div className="flex items-center gap-1 bg-black dark:bg-brada-light border border-brada-light/10 dark:border-black/5 rounded-[6px] p-1 shadow-2xl transition-colors duration-500">
            {/* Toggle Menu Button (Square Box) - Hover revealed border only */}
            <button
                onClick={onMenuClick}
                className="flex items-center justify-center w-10 h-10 rounded-[4px] border border-transparent hover:border-brada-light/20 dark:hover:border-black/10 text-brada-light dark:text-black transition-all duration-500 ease-out"
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                {isOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
            </button>

            {/* Theme Toggle Button (Square Box) - Hover revealed border only */}
            <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-10 h-10 rounded-[4px] border border-transparent hover:border-brada-light/20 dark:hover:border-black/10 text-brada-light dark:text-black transition-all duration-500 ease-out"
                aria-label="Toggle theme"
            >
                <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current stroke-current"
                    style={{ strokeWidth: '1.5px' }}
                >
                    <circle cx="12" cy="12" r="9" fill="none" />
                    <path d="M12 3a9 9 0 0 1 0 18V3z" />
                </svg>
            </button>
        </div>
    );
};

export default NavigationDock;
