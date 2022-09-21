import React from 'react'
import { Grid,Box } from '@mui/material'
export default function MuiGrid() {
  return (
    <div>
        <Grid container>
            <Grid item xs={6}>
                <Box bgcolor="primary.light" style={{padding:"10px"}} >
                    item1
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box bgcolor="primary.light" style={{padding:"10px"}} >
                    item2
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box bgcolor="primary.light" style={{padding:"10px"}} >
                    item3
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box bgcolor="primary.light" style={{padding:"10px"}} >
                    item4
                </Box>
            </Grid>
        </Grid>
    </div>
  )
}
