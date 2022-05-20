import {FunctionComponent, useContext} from 'react';
import { 
  Avatar, 
  CircularProgress, 
  Grid, 
  Toolbar 
} from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled, useTheme, Theme} from '@mui/material/styles';
import SearchInput from '../Navigation/SearchInput/SearchInput';
import ThemeButton from '../ThemeButton/ThemeButton';
import MenuListComposition from '../Common/MenuList/MenuList';
import isPropValid from '@emotion/is-prop-valid'
import { User } from '../../ts/types/user';
import { UserContext } from '../Wrapper/Wrapper';


interface AppBarProps extends MuiAppBarProps {
    open?:              boolean;
    drawerOpenWidth:    number
    drawerClosedWidth:  number
  }
  
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: isPropValid
  })<AppBarProps>(({ theme, open, ...prop}) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.common.navigationBackgroundColor,
    backgroundImage: "none",
    boxShadow: 'none',
    marginLeft: prop.drawerClosedWidth,
    width: `calc(100% - ${prop.drawerClosedWidth}px)`,
    ...(open && {
      marginLeft: prop.drawerOpenWidth,
      width: `calc(100% - ${prop.drawerOpenWidth}px)`,
    }),
  }));
  
  interface ToolbarStyledProps {
    theme: Theme;
  };
  
  const ToolbarStyled = styled(Toolbar, { shouldForwardProp: (prop) => true })<ToolbarStyledProps>(({ theme }) => ({
    padding: '4px 12px',
  }));

interface NavBarProps {
    open?:              boolean;
    drawerOpenWidth:    number
    drawerClosedWidth:  number
}
 
const NavBar: FunctionComponent<NavBarProps> = ({
    open,
    drawerOpenWidth,
    drawerClosedWidth,
}) => {
    const theme = useTheme();
    const user = useContext<User | null>(UserContext);
    console.log(user)
    function stringToColor(string: string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }

    function stringAvatar(name: string) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }

    return ( 
        <AppBar 
            position="fixed" 
            open={open}
            drawerOpenWidth={drawerOpenWidth}
            drawerClosedWidth={drawerClosedWidth}
        >
        <ToolbarStyled theme={theme}>
          <Grid container style={{width: '100%', display: 'flex', flexDirection: 'row', paddingBottom: "0.4rem", borderBottom: `1px solid ${theme.palette.common.divider}`}}>
            <Grid item xs={5} lg={4}>
                {/* <SearchInput /> */}
            </Grid>
            <Grid item xs={7} lg={8}>
                <Grid container  sx={{display: 'flex', flexDirection: 'row-reverse'}}>
                    <ThemeButton fontSize="large"/>
                    <MenuListComposition />
                    { !user ? 
                      <CircularProgress /> :
                      (<Avatar 
                        {...stringAvatar(`${user.user_first_name} ${user.user_last_name}`)} 
                      />)
                    }
                </Grid>
            </Grid>
          </Grid>
        </ToolbarStyled>
      </AppBar>
    );
}
 
export default NavBar;
