import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import { Avatar } from '@mui/material';

export default function InsetList({data}) {
  //  main items component
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >
     { data.map((data,index)=>{
        return(
        <ListItem key={index} disablePadding sx={{mt:2}}>
            <ListItemButton>
            <ListItemIcon>
                <StarIcon />
            </ListItemIcon>
            <ListItemText primary={data.title} />
            </ListItemButton>
            <Avatar src={data.image} variant="rounded" sx={{width: 24, height: 24}}/>
      </ListItem>
        )
     })}
      
    </List>
  );
}