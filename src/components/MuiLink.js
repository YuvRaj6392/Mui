import React from 'react'
import { Stack,Link } from '@mui/material'
export default function MuiLink() {
  return (
    <Stack direction='row' spacing={2} >
    <Link href="#" variant='body2'>
    Link
    </Link>
    <Link href='#' color='secondary' underline='hover' variant='h6' >
        link
    </Link>
    </Stack>
  )
}
