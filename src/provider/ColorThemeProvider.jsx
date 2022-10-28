import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createContext, React, useContext, useMemo, useState } from 'react';

export const ColorModeContext = createContext({
    toggleMode: () => {},
    mode: 'light',
});

export const ColorContextProvider = ({ children }) => {
    const [mode, setMode] = useState('dark');

    const colorMode = useMemo(
        () => ({
            toggleMode: () =>
                setMode((prevMode) =>
                    prevMode === 'light' ? 'dark' : 'light'
                ),
            mode,
        }),
        [mode]
    );

    const theme = createTheme({
        palette: {
            mode: mode,
            primary: {
                main: mode === 'dark' ? '#fff' : '#000',
            },
            background: {
                default: mode === 'dark' ? '#232529' : '#fff',
            },
            icon: {
                main: '#4E7465',
            },
        },
    });

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};
