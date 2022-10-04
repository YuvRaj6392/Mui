import React from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { useState } from 'react'
export default function MuiDialog() {
    const [open,setOpen]=useState(false)
  return (
   <>
    <Button onClick={()=>setOpen(true)}>
        Open Dialog
    </Button>

    <Dialog open={open}>
        <DialogTitle>
            Submit the Test
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                Are you sure you want to submit the test?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=>{setOpen(false)}}>
                Cancel
            </Button>

            <Button autoFocus onClick={()=>{setOpen(false)}}>
                Submit
            </Button>
        </DialogActions>
    </Dialog>

   </>
  )
}
