import React from 'react'
import { Timeline,TimelineItem,TimelineSeparator,TimelineConnector,TimelineContent,TimelineDot } from '@mui/lab'
export default function MuiTimeline() {
  return (
   <Timeline>
    <TimelineItem>
        <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            City A
        </TimelineContent>
        
    </TimelineItem>
    <TimelineItem>
        <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            City B
        </TimelineContent>
        
    </TimelineItem>
    <TimelineItem>
        <TimelineSeparator>
            <TimelineDot />
           
        </TimelineSeparator>
        <TimelineContent>
            City C
        </TimelineContent>
        
    </TimelineItem>
   </Timeline>
   
  )
}
