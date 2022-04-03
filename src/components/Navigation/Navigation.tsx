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
import { Link } from 'react-router-dom';
import ThemeButton from '../ThemeButton/ThemeButton';
import SvgIcon from '../SvgIcon/SvgIcon';
import SearchInput from './SearchInput/SearchInput';
import NavBar from '../NavBar/NavBar';


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
            {text: "all", slug: "/projects", icon: "projects-all"},
            {text: "new", slug: "/projects/new", icon: "proposal"},
            {text: "stats", slug: "/projects/stats", icon: "stats"},
        ] 
    },
    {
        category: "clients", 
        elements: [
            {text: "all", slug: "/clients", icon: "clients-icon"},
            {text: "briefs", slug: "/clients/briefs", icon: "brief-icon"},
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
const drawerClosedWidth = 90;
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
  paddingLeft: 0,
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'center',
  ...(open && {
    paddingLeft: paddingOpen,
    justifyContent: 'flex-start'
  }),
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
    opacity:  1,
    marginTop: '1rem',
    textAlign: 'center',
    ...(open && {
      textAlign: 'left',
      fontSize: '1rem',
    })
}))

interface LiTextProps extends TypographyProps{
  open?: boolean;
}

const LiText = styled(Typography, {shouldForwardProp: (prop) => true})<LiTextProps>(({open}) => ({
    fontSize: open ? '1.2rem' : '0.8rem',
}));

export default function Navigation(props: any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  


  const handleDrawerToggle = () => {
    setOpen(!open);
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar 
        open={open}
        drawerClosedWidth={drawerClosedWidth}
        drawerOpenWidth={drawerOpenWidth}
      >
      </NavBar>
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
                            style={{padding: 0, paddingLeft: 0, display: 'flex', flexDirection: open ? 'row' : 'column',  justifyContent: open ? 'flex-start' : 'center'}}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                paddingLeft: 0,
                                paddingBottom: 6
                            }}
                            component={Link}
                            to={element.slug}
                            >
                                <SvgIcon variant={element.icon}/>
                                        <LiText>{element.text}</LiText>
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
