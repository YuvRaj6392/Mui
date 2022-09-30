import React from 'react'
import { Stack,Avatar,AvatarGroup } from '@mui/material'
export default function MuiAvatar() {
  return (
   <Stack spacing={4}>
    <Stack direction='row' spacing={1}>
    <AvatarGroup >

    
    <Avatar>
        BW
    </Avatar>
    <Avatar>
        CK
    </Avatar>
    <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' alt='jane Doe' />

    </AvatarGroup>
    </Stack>
   </Stack>
  )
}
