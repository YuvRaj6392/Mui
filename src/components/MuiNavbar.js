import React from 'react'
import { AppBar,Toolbar,IconButton, Typography, Stack, Button, Menu, MenuItem} from '@mui/material'
import { CatchingPokemon } from '@mui/icons-material'
import { useState } from 'react'
export default function MuiNavbar() {
    const [anchor,setAnchor]=useState("");
    const open=Boolean(anchor)
    const handleClick=(e)=>{
        setAnchor(e.currentTarget)
    }
    const handleClose=()=>{
        setAnchor(undefined)
    }
  return (
   <AppBar position='static' >
    <Toolbar>
    <IconButton size='large' edge='start' color='inherit' >
        <CatchingPokemon />
    </IconButton>
    <Typography variant='h4' component='div' sx={{flexGrow:1}} >
        Pokemon App
    </Typography>
    <Stack direction='row' spacing={2} >
    <Button color='inherit' >
        Features
    </Button>
    <Button color='inherit'>
        Pricing
    </Button>
    <Button color='inherit'>
        About
    </Button>
    <Button color='inherit' id='resources-button' onClick={handleClick} aria-controls={open?'resource-menu':undefined} aria-haspopup='true' aria-expanded={open?'true':undefined} >
        Resources
    </Button>

    <Button color='inherit'>
        Login
    </Button>

    </Stack>
    <Menu id='resource-menu' anchor={anchor} open={open} MenuListProps={{
        'aria-labelledby':'resources-button'  
    }} onclose={handleClose} >
        <MenuItem onClick={handleClose} >
                Blog
        </MenuItem>
        <MenuItem  onClick={handleClose} >
                Podcast
        </MenuItem>

    </Menu>

    </Toolbar>
   </AppBar>
  )
}
