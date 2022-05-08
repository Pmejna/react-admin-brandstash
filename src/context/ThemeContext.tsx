import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, FC, useContext, useMemo, useState } from "react";
import { styleCommonUtils, themeColors } from "../ts/enums/theme";
import "@mui/material/styles/createPalette";


declare module "@mui/material/styles/createPalette" {
    interface CommonColors {
        backgroundPrimary: string,
        iconColor: string,
        buttonBackgroundColor: string,
        buttonBackgroundColorHovered: string,
        secondaryButtonBackgroundColor: string,
        buttonColor: string,
        secondaryButtonColor: string,
        secondaryButtonHoverColor: string,
        secondaryTextColor: string,
        navigationBackgroundColor: string,
        sideBarBackgroundColor: string,
        sideBarTextColor: string,
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
                        buttonBackgroundColor: themeColors.buttonBgColorLight,
                        buttonBackgroundColorHovered: themeColors.buttonBgColorHoverLight,
                        secondaryButtonBackgroundColor: themeColors.secondaryButtonBgColorLight,
                        buttonColor: themeColors.buttonColorLight,
                        secondaryButtonColor: themeColors.secondaryButtonColorLight,
                        secondaryButtonHoverColor: themeColors.secondaryButtonHoverColorLight,
                        secondaryTextColor: themeColors.secondaryTextColorLight,
                        navigationBackgroundColor: themeColors.navigationBackgroundColorLight,
                        sideBarBackgroundColor: themeColors.sideBarBackgroundColorLight,
                        sideBarTextColor: themeColors.sideBarTextColorLight,
                        divider: themeColors.dividerColorLight,
                        borderSecondary: themeColors.borderSecondaryLight,
                        navActive: themeColors.navActiveBgColorLight,
                        navInactive: themeColors.navInactiveBgColorLight,
                        backgroundPrimary: themeColors.bgMainLight,
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
                        buttonBackgroundColorHovered: themeColors.buttonBgColorHoverDark,
                        secondaryButtonBackgroundColor: themeColors.secondaryButtonBgColorDark,
                        buttonColor: themeColors.buttonColorDark,
                        secondaryButtonColor: themeColors.secondaryButtonColorDark,
                        navigationBackgroundColor: themeColors.navigationBackgroundColorDark,
                        sideBarBackgroundColor: themeColors.sideBarBackgroundColorDark,
                        sideBarTextColor: themeColors.sideBarTextColorDark,
                        divider: themeColors.dividerColorDark,
                        borderSecondary: themeColors.borderSecondaryDark,
                        navActive: themeColors.navActiveBgColorDark,
                        navInactive: themeColors.navInactiveBgColorDark,
                        backgroundPrimary: themeColors.bgMainDark,

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
                            boxShadow: "none",
                            border: "1px solid",
                            borderColor: `${mode === "light" ? themeColors.borderSecondaryLight : themeColors.borderSecondaryDark}`,
                            backgroundColor: `${mode === "light" ? themeColors.cardBgLight : themeColors.cardBgDark}`,
                            backgroundImage: "none"
                        },
                        rounded: {
                            borderRadius: 12,
                        },
                    },
                },
                MuiDialog: {
                    styleOverrides: {
                        paper: {
                            backgroundColor: `${mode === "light" ? themeColors.cardBgLight : themeColors.cardBgDark}`,
                            color: "#090b14",
                        },
                    }
                },
                MuiDialogTitle: {
                    styleOverrides: {
                        root: {
                            color: `${mode === "light" ? "#090b14" : "#fff"}`,
                            fontSize: "1.5rem",
                        }
                    }
                },
                MuiDialogContentText: {
                    styleOverrides: {
                        root: {
                            color: "#3d3d3d"
                        }
                    }
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