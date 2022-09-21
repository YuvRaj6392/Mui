import React, { useState } from 'react'
import {Stack,Button,IconButton,ButtonGroup,ToggleButton,ToggleButtonGroup } from '@mui/material'
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { FormatBoldSharp } from '@mui/icons-material';
import { FormatItalic } from '@mui/icons-material';
import { FormatUnderlined } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function Muibutton() {

 const [insta,setInsta]=useState(false);
 const [count,setCount]=useState(1)
 const handler=(e)=>{
  if(insta===false)
  {
    setInsta(true);
  }
  else
  {
    setInsta(false)
  }

  colorChange()
 }

 function colorChange()
 {
  if(insta===false)
  {
    document.getElementById("love").style.color="red";
    setCount(count-1);
  }
  else
  {
    document.getElementById("love").style.color="grey";
    setCount(count+1)
  }
  console.log(count)
 }
  return (
    <Stack spacing={4}> 
    <Stack spacing={2} direction='row' >
        <Button variant="text">Text</Button>
        <Button variant="contained" href="https://www.facebook.com">Text</Button>
        <Button variant="outlined">Text</Button>
        <Stack spacing={2} direction="row">
            <Button variant="contained" color="error">Primary</Button>
        </Stack>
    </Stack>
    <Stack display='block' spacing={2} direction="row">
    <Button variant="contained" size="large">Medium</Button>

    </Stack>
    <Stack spacing={2} direction="row">

    <Button variant="contained" startIcon={<AddAPhotoTwoToneIcon />}>Send</Button>
    <Button variant="contained" endIcon={<AddAPhotoTwoToneIcon />}>Send</Button>
    </Stack>

    <IconButton style={{width:"30px",marginLeft:"400px"}} >
    <AddAPhotoTwoToneIcon />
    </IconButton>
    
    <Stack style={{width:"30px",marginLeft:"400px"}}>
    <IconButton>
      <FavoriteIcon id="love" onClick={handler} style={{color:"grey"}} />
    </IconButton>
    </Stack>
    <Stack direction="row">
    <ButtonGroup variant="contained" orientation="vertical" color="secondary" aria-label="alignment button group">
      <Button onClick={()=>{
        alert("the left button was clicked!")
      }} >left</Button>
      <Button >center</Button>
      <Button >right</Button>
      </ButtonGroup>
    </Stack>
    <Stack direction="row" >
      <ToggleButtonGroup aria-label="Text-formatting">
      <ToggleButton value="bold"><FormatBoldSharp/></ToggleButton>

      <ToggleButton value="italic"><FormatItalic/></ToggleButton>

      <ToggleButton value="underlined"><FormatUnderlined/></ToggleButton>

      </ToggleButtonGroup>
    </Stack>

    </Stack>   
  )
}
