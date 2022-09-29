import React from 'react'
import { BottomNavigation,BottomNavigationAction } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon  from '@mui/icons-material/Person'

export default function MuiBottomNavigation() {
   
  return (
    <BottomNavigation sx={{width:'100', position:'absolute', bottom:0}} >
    <BottomNavigationAction label='home' icon={<HomeIcon />} />
    <BottomNavigationAction label='favorites' icon={<FavoriteIcon />} />
    <BottomNavigationAction label='person' icon={<PersonIcon />} />

    
    </BottomNavigation>
  )
}
