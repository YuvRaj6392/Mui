import React from 'react'
import {Stack, Autocomplete, TextField} from '@mui/material'
import { useState } from 'react'
export default function MuiAutocomplete() {
    const skills=["Java","c++","python","c","c#"]
   const [value,setValue]=useState("");
    const [presentValue,setPresentValue]=useState("");
    console.log(presentValue);
    const handler=(e)=>{
        console.log(e.target.value)
        setValue(e.target.value);
        if(value===0)
        {
            setPresentValue("java")
        }
        else if(value===1)
        {
            setPresentValue("c++")
        }
    }

  return (
 <Stack spacing={2} style={{marginTop:"20px"}} >
    <Autocomplete  options={skills} onChange={handler}  renderInput={(params)=><TextField  {...params} label="skills" />} />
 </Stack>
  )
}
