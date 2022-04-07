import React, {useState, useEffect, useMemo} from 'react';
import { styled, useTheme, Theme, CSSObject, SxProps } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography, { TypographyProps } from '@mui/material/Typography';
import ListItemButton, { ListItemButtonBaseProps } from '@mui/material/ListItemButton';
import isPropValid from '@emotion/is-prop-valid';
import {NavLink } from 'react-router-dom';
import SvgIcon from '../SvgIcon/SvgIcon';
import NavBar from '../NavBar/NavBar';
import MenuButton from './MenuButton/MenuButton';
import axios from 'axios';
import { CircularProgress} from '@mui/material';


const drawerOpenWidth = 180;
const drawerClosedWidth = 90;
const paddingOpen = 16;

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

const DrawerTitle = styled(Typography, {shouldForwardProp: () => true})<DrawerTitleProps>(({theme, open}) => ({
    marginTop:    '1rem',
    marginLeft:   open ? 16 : 0,
    opacity:      1,
    color:        theme.palette.common.secondaryTextColor,
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

type SectionElements = {
  section_icon: string;
  section_id:   number;
  section_name: string;
  section_slug: string;
  section_text: string;
}

type Section = {
  sections:         SectionElements[];
  section_cat_id:   number;
  section_cat_name: string;
}

interface StyledListItemButtonProps extends ListItemButtonBaseProps {
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
  useEffect(() => {
  }, [props.location]);
    
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [navData, setNavData] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);

  useMemo(() => {
    (async () => {
      if (navData.length === 0) {
      await axios.get('/section-category/all')
      .then(res => {
        setNavData(res.data.data);
        setLoading(false);
      }).catch(err => {
          console.log(err);
        });
    }})();
  }, [navData]);
  
  const handleDrawerToggle = () => {
    setOpen(!open);
  }
  
  return (
      loading && navData === [] ? 
      <CircularProgress /> : 
       (
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
              <MenuButton open={open} onClick={handleDrawerToggle} />
            </DrawerHeader>
            <Box style={{padding: 0}}>
              {navData?.map((category) => (
                <List style={{padding: 0}} key={category.section_cat_name+'_li'}>
                  <DrawerTitle theme={theme} open={open} key={category.section_cat_name}>
                      {category.section_cat_name.toUpperCase()}
                  </DrawerTitle>
                  {
                    category.sections.map((element) => {
                      let active = () => props.location.pathname === element.section_slug ? true : false
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
