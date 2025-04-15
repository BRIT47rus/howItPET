import { createContext, ReactNode, useContext, useState } from 'react';

// Определяем тип для значения контекста
type ThemeContextType = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
};

// Определяем тип для пропсов ThemeContextProvider
type TThemeProviderProps = {
    children: ReactNode;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) {
        throw new Error(
            'useTheme должен использоваться внутри ThemeContextProvider'
        );
    }
    return themeContext;
};

export const ThemeContextProvider = ({ children }: TThemeProviderProps) => {
    const [theme, setTheme] = useState<string>('');

    const value: ThemeContextType = {
        theme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
