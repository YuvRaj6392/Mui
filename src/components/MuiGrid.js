import React from 'react'
import { Grid,Box, Paper } from '@mui/material'
export default function MuiGrid() {
  return (
    <Paper sx={{padding:"20px"}} elevation={10}>
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
    </Paper>
  )
}
