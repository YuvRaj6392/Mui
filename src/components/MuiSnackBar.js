import React from 'react'
import { Snackbar,Button } from '@mui/material'
import { useState } from 'react'
export default function MuiSnackBar() {
    const [isOpen,setIsOpen]=useState(false)
    const handleClose=(e)=>{
        setIsOpen(false)
    }
  return (
   <>
    <Button onClick={()=>setIsOpen(true)}>Submit </Button>
    <Snackbar message="Message sent successfully" autoHideDuration={4000} open={isOpen} onClose={handleClose}  />
   </>
  )
}
