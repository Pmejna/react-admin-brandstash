import { ListItemButtonBaseProps } from "@mui/material";
import {SxProps, Theme} from '@mui/material/styles';

export type SectionElements = {
    section_icon: string;
    section_id:   number;
    section_name: string;
    section_slug: string;
    section_text: string;
  }
  
export type Section = {
    sections:         SectionElements[];
    section_cat_id:   number;
    section_cat_name: string;
  }

  export type Sections = {
      data: Section[] | [];
      meta: {
        last_page: number;
        current_page: number;
        total: number;
      }
  } | [];
  
