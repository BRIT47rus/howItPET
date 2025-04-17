import { createContext, ReactNode, useContext, useState } from 'react';

// Определяем тип для значения контекста
type ThemeContextType = {
    theme: string;
    changeTheme: () => void;
};

// Определяем тип для пропсов ThemeContextProvider
type TThemeProviderProps = {
    children: ReactNode;
};
export enum THEME {
    LIGHT = 'lightTheme',
    DARK = 'darkTheme',
}

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
    const [theme, setTheme] = useState<string>(THEME.LIGHT);
    const changeTheme = () => {
        if (theme === THEME.DARK) {
            setTheme(THEME.LIGHT);
        } else {
            setTheme(THEME.DARK);
        }
    };

    const value: ThemeContextType = {
        theme,
        changeTheme,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
