import * as React from 'react';
import { styled, useTheme, Theme, CSSObject, SxProps } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
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
const drawerClosedWidth = 76;
const paddingOpen = 24;
const paddingClosed = 16;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerOpenWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
  }>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: 0,
  marginTop: 48,
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
  display: 'flex',
  alignItems: 'center',
  paddingLeft: paddingClosed,
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
  ...(open && {
    marginLeft: '22px',
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
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
  marginLeft: drawerClosedWidth,
  width: `calc(100% - ${drawerClosedWidth}px)`,
  ...(open && {
    marginLeft: drawerOpenWidth,
    width: `calc(100% - ${drawerOpenWidth}px)`,
    // transition: theme.transitions.create(['width', 'margin'], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerOpenWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
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
    // text?: boolean;
    open: boolean;
  }

const DrawerTitle = styled(Typography, {shouldForwardProp: (prop) => true})<DrawerTitleProps>(({theme, open}) => ({
    color: theme.palette.common.secondaryTextColor,
    fontSize: '0.9rem',
    opacity: 0,
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
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader open={open}>
          <ThemeButton open={open} onClick={handleDrawerToggle}/>
        </DrawerHeader>
        <Divider />
        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List> */}
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
                            style={{padding: 0, display: 'flex', flexDirection: 'row',  justifyContent: 'center'}}
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
