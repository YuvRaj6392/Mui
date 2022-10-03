import React from 'react'
import { Stack, Alert } from '@mui/material'
export default function MuiAlert() {
  return (
    <Stack spacing={2}>
    <Alert severity='error'>
    This is an error alert!
    </Alert>
    <Alert severity='success'>
    This is an success alert!
    </Alert>
    <Alert severity='info'>
    This is an info alert!
    </Alert>

    <Alert variant='outlined'  severity='error'>
    This is an error alert!
    </Alert>
    <Alert variant='outlined' severity='success'>
    This is an success alert!
    </Alert>
    <Alert variant='outlined' severity='info'>
    This is an info alert!variant='outlined' 
    </Alert>

    <Alert variant='filled' severity='error'>
    This is an error alert!
    </Alert>
    <Alert variant='filled' severity='success'>
    This is an success alert!
    </Alert>
    <Alert variant='filled' severity='info'>
    This is an info alert!
    </Alert>
    </Stack>
  )
}
