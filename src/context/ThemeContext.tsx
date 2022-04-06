import { createTheme, ThemeProvider } from "@mui/material";
import React, { createContext, FC, useContext, useMemo, useState } from "react";
import { styleCommonUtils, themeColors } from "../ts/enums/theme";
import "@mui/material/styles/createPalette";


declare module "@mui/material/styles/createPalette" {
    interface CommonColors {
        iconColor: string,
        buttonBackgroundColor: string,
        secondaryButtonBackgroundColor: string,
        buttonColor: string,
        secondaryButtonColor: string,
        secondaryButtonHoverColor: string,
        secondaryTextColor: string,
        navigationBackgroundColor: string,
        divider: string;
        borderSecondary: string;
        navActive: string;
        navInactive: string;
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
                        buttonBackgroundColor: themeColors.buttonColorLight,
                        secondaryButtonBackgroundColor: themeColors.secondaryButtonBgColorLight,
                        buttonColor: themeColors.buttonColorLight,
                        secondaryButtonColor: themeColors.secondaryButtonColorLight,
                        secondaryButtonHoverColor: themeColors.secondaryButtonHoverColorLight,
                        secondaryTextColor: themeColors.secondaryTextColorLight,
                        navigationBackgroundColor: themeColors.navigationBackgroundColorLight,
                        divider: themeColors.dividerColorLight,
                        borderSecondary: themeColors.borderSecondaryLight,
                        navActive: themeColors.navActiveBgColorLight,
                        navInactive: themeColors.navInactiveBgColorLight,
                    },
                    secondary: {
                        main: "#000"
                    },
                    background: {
                        default: themeColors.bgMainLight
                    },
                    text: {
                        primary: themeColors.textColorLight
                    },
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
                        buttonBackgroundColor: themeColors.buttonBgColorDark,
                        secondaryButtonBackgroundColor: themeColors.secondaryButtonBgColorDark,
                        buttonColor: themeColors.buttonColorDark,
                        secondaryButtonColor: themeColors.secondaryButtonColorDark,
                        navigationBackgroundColor: themeColors.navigationBackgroundColorDark,
                        divider: themeColors.dividerColorDark,
                        borderSecondary: themeColors.borderSecondaryDark,
                        navActive: themeColors.navActiveBgColorDark,
                        navInactive: themeColors.navInactiveBgColorDark,
                    },
                    background: {
                        default: themeColors.bgMainDark
                    },
                    text: {
                        primary: themeColors.textColorDark
                    },
                }),
                
            },
            typography: {
                fontFamily: [
                    'Source Sans Pro',
                    'serif',
                ].join(','),
                h3: {
                    
                },
                h4: {
                    
                },
                h5: {
                    color: "#43543"
                },
                body1: {
                    
                },
                body2: {
                    
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