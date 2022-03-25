import { createTheme, ThemeProvider } from "@mui/material";
import React, { createContext, FC, useContext, useMemo, useState } from "react";
import { styleCommonUtils, themeColors } from "../ts/enums/theme";
import "@mui/material/styles/createPalette";


declare module "@mui/material/styles/createPalette" {
    interface CommonColors {
        iconColor: string,
        buttonBackgroundColor: string
    }
}

interface IThemeContext {
    toggleTheme: () => void,
    mode: "dark" | "light"
}
interface ThemeContextProviderProps {
    // any upcoming props here   
    // children: React.ReactNode
}

export const ThemeContext = createContext<IThemeContext>({
    toggleTheme: () => {},
    mode: "light"
})


 
export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({children}) => {
    const [mode, setMode] = useState<IThemeContext["mode"]>("light");
    const selectedTheme = useMemo(
        () => ({
            toggleTheme: () => {
                setMode((prevTheme) => (prevTheme === "light" ? "dark": "light"))
            },mode
        }),
        [mode]
    );

    const currentTheme = useMemo( () => (
        createTheme({
            palette: {
                mode,
                ...(mode === "light" ? {
                    primary: {
                        // main: themeColors.textLight,
                        main: themeColors.textColorLight,
                        contrastText: '#fff',
                    },
                    common: {
                        iconColor: themeColors.iconColorLight,
                        buttonBackgroundColor: themeColors.buttonColorLight
                    },
                    secondary: {
                        main: "#000"
                    },
                    background: {
                        default: themeColors.bgMainLight
                    },
                    text: {
                        primary: themeColors.textColorLight
                    }
                } : {
                    primary: {
                        main: '#FCFBFF',
                        contrastText: '#fff'
                    },
                    secondary: {
                        main: "#000"
                    },
                    common: {
                        iconColor: themeColors.iconColorDark,
                        buttonBackgroundColor: themeColors.buttonColorDark
                    },
                    background: {
                        default: themeColors.bgMainDark
                    },
                    text: {
                        primary: themeColors.textColorDark
                    }
                }),
                
            },
            typography: {
                h3: {
                    fontFamily: "roboto",
                },
                h4: {
                    fontFamily: "roboto"
                },
                h5: {
                    color: "#43543"
                },
            },
            components: {
                MuiPaper: {
                    styleOverrides: {
                        elevation1: {
                            boxShadow: styleCommonUtils.boxShadowLight
                        },
                        rounded: {
                            borderRadius: 12,
                        },
                    },
                },
            },
        })
    ), [mode])

    return ( 
        <ThemeContext.Provider value={selectedTheme}>
            <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
     );
}
 
export const useThemeMode = () => useContext(ThemeContext);