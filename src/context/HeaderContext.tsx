import React, { createContext, useContext, useState } from 'react';

export type HeaderState = 'default' | 'hidden' | 'visible';

interface HeaderContextType {
    headerState: HeaderState;
    setHeaderState: (state: HeaderState) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
    // Default so normal pages keep footer logic
    const [headerState, setHeaderState] = useState<HeaderState>('default');

    return (
        <HeaderContext.Provider value={{ headerState, setHeaderState }}>
            {children}
        </HeaderContext.Provider>
    );
};

export const useHeaderContext = () => {
    const context = useContext(HeaderContext);
    if (context === undefined) {
        throw new Error('useHeaderContext must be used within a HeaderProvider');
    }
    return context;
};
