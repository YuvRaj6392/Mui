import React from 'react'
import {Stack, TextField, InputAdornment} from '@mui/material'

export default function MuiTextField() {
  return (
   <Stack spacing={4} direction='row'>
  <TextField label="name" variant="filled" required />
  <TextField label="name" variant="standard" />
  <TextField label="name" variant="outlined"  required helperText='Do not share your  password with anyone' type='password' />
   </Stack>
  )
}
//adornment for prefix an suffix!
