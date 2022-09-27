import React from 'react'
import { Box,Breadcrumbs,Link,Typography } from '@mui/material'
export default function MuiBreadCrums() {
  return (
    <Box m={2}  >

    <Breadcrumbs aria-label='breadcrums' separator='>'>
    <Link underline='hover' href='#'>
    Home
    </Link>
    <Link underline='hover' href='#'>
    Catalog
    </Link>
    <Link underline='hover' href='#'>
    Accessories
    </Link>
    <Typography color='text.primary' >Shoes</Typography>
    </Breadcrumbs>

    

    </Box>
  )
}
