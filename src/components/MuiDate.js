import React from 'react'
import { LocalizationProvider,DatePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

import { Stack,TextField} from '@mui/material'
import { useState } from 'react'
export default function MuiDate() {
    const [selectedDate,setSelectedDate]=useState("")
  return (
    <LocalizationProvider dateAdapter={<AdapterDateFns />}>
    <Stack spacing={4}>
    <DatePicker label='Date Picker' renderInput={(params)=><TextField {...params} />} value={selectedDate} onChange={(e)=>setSelectedDate(e.target.value)} />
    </Stack>
    </LocalizationProvider>
  )
}
