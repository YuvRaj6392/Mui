import React from 'react'
import { Box,Tab } from '@mui/material'
import { TabContext,TabList,TabPanel } from '@mui/lab'
import { useState } from 'react'
export default function MuiTabs() {
    const [value,setValue]=useState('1');
   
  return (
    <div>
        <TabContext value={value}>
            <Box sx={{borderBottom:1,borderColor:'divider'}}>
            <TabList onChange={(e)=>setValue(e.target.value)}>
                <Tab label='tab1' value='1' />
                <Tab label='tab2' value='2' />
                <Tab label='tab3' value='3' />
            </TabList>

            </Box>
            <TabPanel value='1'>Panel one</TabPanel>
            <TabPanel value='2'>Panel two</TabPanel>
            <TabPanel value='3'>Panel three</TabPanel>
        </TabContext>
    </div>
  )
}
