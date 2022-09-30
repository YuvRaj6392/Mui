import React from 'react'
import { Box,List,ListItem,ListItemText,ListItemIcon,Divider } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
export default function MuiList() {
  return (
    <Box sx={{width:'400px',bgcolor:'#efefef'}}>
    <List>
        <ListItem>
        <ListItemIcon>
            <MailIcon />
        </ListItemIcon>
            <ListItemText primary='list-item 1' secondary='Secondary Text' />  
        </ListItem>
        <Divider />
        <ListItem>
        <ListItemIcon>
            <MailIcon />
        </ListItemIcon>
            <ListItemText primary='list-item 2' secondary='Secondary Text' />  
        </ListItem>
        <Divider />
        <ListItem>
        <ListItemIcon>
            <MailIcon />
        </ListItemIcon>
            <ListItemText primary='list-item 3' secondary='Secondary Text' />  
        </ListItem>
    </List>
    </Box>
  )
}
