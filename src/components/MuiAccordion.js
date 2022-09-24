import React from 'react'
import {Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react';
export default function MuiAccordion() {
    const [expanded,setExpanded]=useState("");
const handleChange=(isExpanded,panel)=>{
setExpanded(isExpanded?panel:false)
}
  return (
    <div>
      <Accordion expanded={expanded==='panel1'} onChange={(event,isExpanded)=>{handleChange(isExpanded,'panel1')}} >
        <AccordionSummary id='panel-header1' expandIcon={<ExpandMoreIcon />} >
        <Typography>Accordion1</Typography>
        </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minus unde ipsam officiis blanditiis voluptate! Omnis quae eius architecto! Voluptatum possimus veniam similique, placeat adipisci hic numquam sequi deserunt ipsum.
            </AccordionDetails>
       
      </Accordion>
      <Accordion expanded={expanded==='panel2'} onChange={(event,isExpanded)=>{handleChange(isExpanded,'panel2')}}>
        <AccordionSummary id='panel-header2' expandIcon={<ExpandMoreIcon />} >
        <Typography>Accordion2</Typography>
        </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minus unde ipsam officiis blanditiis voluptate! Omnis quae eius architecto! Voluptatum possimus veniam similique, placeat adipisci hic numquam sequi deserunt ipsum.
            </AccordionDetails>
       
      </Accordion>
      <Accordion expanded={expanded==='panel3'} onChange={(event,isExpanded)=>{handleChange(isExpanded,'panel3')}}>
        <AccordionSummary id='panel-header3' expandIcon={<ExpandMoreIcon />} >
        <Typography>Accordion3</Typography>
        </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minus unde ipsam officiis blanditiis voluptate! Omnis quae eius architecto! Voluptatum possimus veniam similique, placeat adipisci hic numquam sequi deserunt ipsum.
            </AccordionDetails>
       
      </Accordion>
    </div>
  )
}
