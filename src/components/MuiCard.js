import React from 'react'
import { Box, Card, CardContent,Typography,CardActions, Button, CardMedia} from '@mui/material'
export default function MuiCard() {
  return (
    <Box width='300px' sx={{marginTop:"20px"}}>

    <Card>
        <CardMedia component='img' height='160' image='https://images.unsplash.com/photo-1639020715359-f03b05835829?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVuc3BhbHNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' alt='burgerImage'  />

        
        <CardContent>

            <Typography variant='h5' component='div' gutterBottom>
                    React
            </Typography>
            <Typography variant='body2' color='text.secondary' gutterBottom>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id velit non eum labore culpa quaerat reprehenderit, ipsam earum voluptates corrupti vel cumque amet, doloremque voluptas. Architecto, ducimus. Quisquam corrupti dolores beatae totam facere aperiam? Laborum fuga nesciunt neque sequi?
            </Typography>
            
        </CardContent>
    <CardActions>
        <Button variant='text'>
            Share
        </Button>
        <Button>
            Learn more!
        </Button>
    </CardActions>
    </Card>
      
    </Box>
  )
}
