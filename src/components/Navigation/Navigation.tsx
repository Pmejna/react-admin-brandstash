/* eslint-disable @typescript-eslint/no-explicit-any */
import {useState, useEffect} from 'react';

import { styled, useTheme } from '@mui/material/styles';

import type {Theme, CSSObject, SxProps } from '@mui/material/styles';

import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import type { TypographyProps } from '@mui/material/Typography';

import ListItemButton from '@mui/material/ListItemButton';
import type { ListItemButtonBaseProps } from '@mui/material/ListItemButton';
import isPropValid from '@emotion/is-prop-valid';
import {NavLink } from 'react-router-dom';

import { CircularProgress} from '@mui/material';

import { useNavigation } from '../../lib/fetcher-hooks';
import SvgIcon from '../SvgIcon/SvgIcon';
import NavBar from '../NavBar/NavBar';

import MenuButton from './MenuButton/MenuButton';





const drawerOpenWidth = 180;
const drawerClosedWidth = 90;
const paddingOpen = 16;

const openedMixin = (): CSSObject => ({
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
  backgroundColor: theme.palette.common.sideBarBackgroundColor,
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
    height: '100vh',
    backgroundColor: theme.palette.common.sideBarBackgroundColor,
    ...(open && {
      ...openedMixin(),
      '& .MuiDrawer-paper': openedMixin(),
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

const DrawerTitle = styled(Typography, {shouldForwardProp: () => true})<DrawerTitleProps>(({theme, open}) => ({
    marginTop:    '1rem',
    marginLeft:   open ? 16 : 0,
    opacity:      1,
    color:        theme.palette.common.sideBarTextColor,
    fontSize:     '0.9rem',
    textAlign:    'center',
    ...(open && {
      textAlign: 'left',
      fontSize: '1rem',
    })
}))

interface LiTextProps extends TypographyProps{
  open?: boolean;
  isActive: () => boolean;
}

const LiText = styled(Typography, {shouldForwardProp: isPropValid})<LiTextProps>(({open, isActive}) => ({
    fontSize: open ? '1.2rem' : '0.8rem',
    fontWeight: isActive() ? 'bold' : 'normal',
}));

export interface StyledListItemButtonProps extends ListItemButtonBaseProps {
  component?: React.ElementType;
  theme?:     Theme;
  sx?:        SxProps<Theme>;
  isActive:   () => boolean;
  open?:      boolean;
  to:         string;
}

const StyledListItemButton = styled(ListItemButton)<StyledListItemButtonProps>(({open, isActive, theme}) => ({
  fontSize: open ? '1.2rem' : '0.8rem',
  backgroundColor: isActive() ? theme.palette.common.navActive : theme.palette.common.navInactive,
}));

export default function Navigation(props: any) {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [props.location]);
    
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const {sections, isLoading} = useNavigation();
  
  const handleDrawerToggle = () => {
    setOpen(!open);
  }
  
  return (
      isLoading ? 
      <CircularProgress /> : 
       (
        <Box sx={{ display: 'flex', height: '100vh' }}>
          <CssBaseline />
          <NavBar 
            open={open}
            drawerClosedWidth={drawerClosedWidth}
            drawerOpenWidth={drawerOpenWidth}
          > 
          </NavBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader open={open}>
              <MenuButton open={open} onClick={handleDrawerToggle} />
            </DrawerHeader>
            <Box style={{padding: 0, height: '100%', backgroundColor: theme.palette.common.sideBarBackgroundColor}}>
              {sections.data?.map((category: any) => (
                <List style={{padding: 0}} key={category.section_cat_name+'_li'}>
                  <DrawerTitle theme={theme} open={open} key={category.section_cat_name}>
                      {category.section_cat_name.toUpperCase()}
                  </DrawerTitle>
                  {
                    category.sections.map((element: any) => {
                      const active = () => props.location.pathname === element.section_slug ? true : false
                      return (
                        <StyledListItemButton
                          key={element.section_text}
                          sx={{
                            padding: 0, 
                            paddingLeft: 0, 
                            display: 'flex', 
                            flexDirection: open ? 'row' : 'column', 
                            justifyContent: open ? 'flex-start' : 'center',
                            minHeight: 48,
                          }}
                          component={NavLink}
                          to={element.section_slug}
                          isActive={active}
                        >
                          <SvgIcon variant={element.section_icon} marginLeft={ open ? 16 : 0}/>
                          <LiText isActive={active}>{element.section_text}</LiText>
                        </StyledListItemButton>
                      )
                    })
                  }
                </List>
              ))}
            </Box>
          </Drawer>
            <Main open={open}>
                {props.children ? props.children : null}
            </Main>
        </Box>
    )
  );
}
