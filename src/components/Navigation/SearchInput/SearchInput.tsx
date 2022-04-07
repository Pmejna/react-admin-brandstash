import { IconButton, InputBase, useTheme } from "@mui/material";
import { FunctionComponent } from "react";
import SearchIcon from '@mui/icons-material/Search';

const SearchInput: FunctionComponent = () => {
    const theme = useTheme();
    return ( 
        <>
            <InputBase
                sx={{ 
                    position: "relative", 
                    flex: 1,
                    p: '0 0.5rem',
                    border: `solid 1px ${theme.palette.common.borderSecondary}`,
                }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </>
     );
}
 
export default SearchInput;