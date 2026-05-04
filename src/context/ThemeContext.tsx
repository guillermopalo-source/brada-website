import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            return (localStorage.getItem('brada-theme') as Theme) || 'dark';
        }
        return 'dark';
    });

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        const root = window.document.documentElement;

        // 1. Congelar todas las transiciones
        root.classList.add('theme-switching');

        // 2. Hacer el swap de clase
        root.classList.remove('light', 'dark');
        root.classList.add(theme);

        // 3. Persistir
        localStorage.setItem('brada-theme', theme);

        // 4. Un frame después, liberar transiciones
        // Así CSS vars + React state quedan en sync antes de que empiece el fade
        const frame = requestAnimationFrame(() => {
            root.classList.remove('theme-switching');
        });

        return () => cancelAnimationFrame(frame);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};