import React from 'react'
import { Stack, Badge } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
export default function MuiBadge() {
  return (
   <Stack spacing={2} direction='row' style={{marginTop:'20px'}} >
    <Badge badgeContent={45} color='error'>
    <MailIcon />
    </Badge>

    <Badge variant='dot' color='error'>
    <MailIcon />
    </Badge>
   </Stack>
  )
}
