import React from 'react'
import { Tooltip,IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
export default function MuiToolTip() {
  return (
   <Tooltip title='delete' placement='right' arrow>
    <IconButton>
        <DeleteIcon />
    </IconButton>
   </Tooltip>
  )
}
