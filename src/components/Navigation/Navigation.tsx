import * as React from 'react';
import { styled, useTheme, Theme, CSSObject, SxProps } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography, { TypographyProps } from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ThemeButton from '../ThemeButton/ThemeButton';
import SvgIcon from '../SvgIcon/SvgIcon';

interface dummyDataInterface {
    category: string;
    elements: {
        text: string;
        slug: string;
        icon: string;
    }[];
}

const dummyData: dummyDataInterface[] = [
    {
        category: "MAIN", 
        elements: [{text: "dashboard", slug: "/dashboard", icon: "dashboard"}]
    },
    {
        category: "projects", 
        elements: [
            {text: "all", slug: "/projects", icon: "projects-icon"},
            {text: "new proposal", slug: "/projects/new", icon: "proposal-icon"},
            {text: "stats", slug: "/projects/stats", icon: "stats-icon"},
        ]
    },
    {
        category: "clients", 
        elements: [
            {text: "all", slug: "/clients", icon: "clients-icon"},
            {text: "briefs", slug: "/clients/briefs", icon: "briefs-icon"},
            {text: "messages", slug: "/clients/messages", icon: "messages-icon"},
        ]
    },
    {
        category: "useful", 
        elements: [
            {text: "notifications", slug: "/notifications", icon: "notifications-icon"},
            {text: "account stats", slug: "/account-stats", icon: "account-stats-icon"},
        ]
    },
    {
        category: "user", 
        elements: [
            {text: "settings", slug: "/settings", icon: "settings-icon"},
        ]
    },
]

const drawerOpenWidth = 180;
const drawerClosedWidth = 80;
const paddingOpen = 16;
const paddingClosed = 16;

const openedMixin = (theme: Theme): CSSObject => ({
  width:      drawerOpenWidth,
  overflowX:  'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: drawerClosedWidth,
  },
});

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
  }>(({ theme, open }) => ({
  flexGrow:   1,
  padding:    theme.spacing(3),
  marginLeft: 0,
  marginTop:  48,
  ...(open && {
  }),
}));

interface IDrawerHeaderProps {
    open?: boolean;
    sx?: SxProps<Theme>
  }

const DrawerHeader = styled('div',{
    shouldForwardProp: (prop) => prop !== 'open',
  })<IDrawerHeaderProps>(({ theme, open }) => ({
  display:    'flex',
  alignItems: 'center',
  paddingLeft: paddingClosed,
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
  ...(open && {
    paddingLeft: paddingOpen
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.common.navigationBackgroundColor,
  boxShadow: 'none',
  marginLeft: drawerClosedWidth,
  width: `calc(100% - ${drawerClosedWidth}px)`,
  ...(open && {
    marginLeft: drawerOpenWidth,
    width: `calc(100% - ${drawerOpenWidth}px)`,
  }),
}));

interface ToolbarStyledProps {
  theme: Theme;
};

const ToolbarStyled = styled(Toolbar, { shouldForwardProp: (prop) => true })<ToolbarStyledProps>(({ theme }) => ({
  padding: '4px 12px',
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width:        drawerOpenWidth,
    flexShrink:   0,
    whiteSpace:   'nowrap',
    boxSizing:    'border-box',
    borderRight:  `1px solid ${theme.palette.common.divider}`,
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

interface DrawerTitleProps extends TypographyProps {
    open: boolean;
  }

const DrawerTitle = styled(Typography, {shouldForwardProp: (prop) => true})<DrawerTitleProps>(({theme, open}) => ({
    color:    theme.palette.common.secondaryTextColor,
    fontSize: '0.9rem',
    opacity:  0,
    ...(open && {
        opacity: 1
    })
}))

export default function Navigation(props: any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <ToolbarStyled theme={theme}>
          <div style={{width: '100%', borderBottom: `1px solid ${theme.palette.common.divider}`}}>
            <Typography variant="h6" noWrap component="div">
              Mini variant drawer
            </Typography>
          </div>
        </ToolbarStyled>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader open={open}>
          <ThemeButton open={open} onClick={handleDrawerToggle}/>
        </DrawerHeader>
        <div style={{padding: 0}}>
          {dummyData.map((category) => (
            <List style={{padding: 0, paddingLeft: open ? 16 : 0}}>
                    <DrawerTitle theme={theme} open={open}>
                        {category.category.toUpperCase()}
                    </DrawerTitle>
                {
                    category.elements.map((element) => {
                        return (
                            <ListItemButton
                            key={element.text}
                            style={{padding: 0, paddingLeft: open ? 0 : 16, display: 'flex', flexDirection: 'row',  justifyContent: open ? 'center' : 'flex-start'}}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                paddingLeft: 0,
                            }}
                            >
                                <SvgIcon variant={element.icon}/>
                                {
                                    open ? (
                                        <ListItemText primary={element.text} sx={{ opacity: open ? 1 : 0 }} />
                                    ) : null
                                }
                            </ListItemButton>
                        )
                    })
                }
            </List>
          ))}
        </div>
      </Drawer>
        <Main open={open}>
            {props.children ? props.children : null}
        </Main>
    </Box>
  );
}
