import React from 'react'
import { Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab'
export default function MuiLoading() {
  return (
   <Stack direction='row' spacing={2}>
    <LoadingButton  variant='outlined'>Submit</LoadingButton>
    <LoadingButton loading='true'  variant='outlined'>Submit</LoadingButton>
   </Stack>
  )
}
