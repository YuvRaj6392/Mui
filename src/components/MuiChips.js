import React from 'react'
import { Stack,Chip,Avatar } from '@mui/material'
export default function MuiChips() {
  return (
    <Stack  direction='row' spacing={1} >
    <Chip label='chip' color='primary'  size='large'/>
    <Chip label='chip' color='secondary'  size='large' variant='outlined' avatar={<Avatar>V</Avatar>}/>
    <Chip label='chip' color='success'  size='large'  avatar={<Avatar>V</Avatar>}/>

   
    </Stack>
  )
}
