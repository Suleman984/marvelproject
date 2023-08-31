import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'wheat',
      padding:'0 5px',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
  
  const CustomBox = styled(Box)(({ theme }) => ({
    // Add your additional CSS styles for the Box component here
    backgroundColor: '#100C08',
    
    border: '1px solid black',
    textAlign:'center',
    height:'auto'
  }));

  
  export default function Menubar() {
    return (
        <CustomBox>
        {[
          "News",
          "Comics",
          "Characters",
          "Movies",
          "TV Shows",
          "Games",
          "Videos",
          "More"
        ].map((title) => (
          <LightTooltip key={title} title="Add">
            <Button>{title}</Button>
          </LightTooltip>
        ))}
      </CustomBox>
    );
  }
