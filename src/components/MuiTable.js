import React from 'react'
import { TableContainer,Table,TableHead,TableRow,TableCell,TableBody,Paper } from '@mui/material'
export default function MuiTable() {
  return (
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
    <Table stickyHeader>
       <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
            </TableRow>
       </TableHead> 
       <TableBody>
{
    tableData.map(row=>(
        <TableRow key={row.id}>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.first_name}</TableCell>
        <TableCell>{row.last_name}</TableCell>
        <TableCell>{row.email}</TableCell>
        </TableRow>
    ))
}
       </TableBody>
    </Table>

    </TableContainer>
  )
}
const tableData=[{
    "id": 1,
    "first_name": "Idalina",
    "last_name": "Bonelle",
    "email": "ibonelle0@bigcartel.com",
    "gender": "Female",
    "ip_address": "181.164.24.53"
  }, {
    "id": 2,
    "first_name": "Everett",
    "last_name": "O'Devey",
    "email": "eodevey1@yellowpages.com",
    "gender": "Male",
    "ip_address": "189.176.162.69"
  }, {
    "id": 3,
    "first_name": "Kelli",
    "last_name": "Vanyukov",
    "email": "kvanyukov2@acquirethisname.com",
    "gender": "Female",
    "ip_address": "137.5.88.21"
  }, {
    "id": 4,
    "first_name": "Jessee",
    "last_name": "Faust",
    "email": "jfaust3@youtu.be",
    "gender": "Male",
    "ip_address": "183.88.254.113"
  }, {
    "id": 5,
    "first_name": "Daren",
    "last_name": "Kingswoode",
    "email": "dkingswoode4@dmoz.org",
    "gender": "Male",
    "ip_address": "206.26.205.65"
  }, {
    "id": 6,
    "first_name": "Cordie",
    "last_name": "Painter",
    "email": "cpainter5@mapy.cz",
    "gender": "Female",
    "ip_address": "241.251.100.229"
  }, {
    "id": 7,
    "first_name": "Kissie",
    "last_name": "Hazle",
    "email": "khazle6@mapy.cz",
    "gender": "Female",
    "ip_address": "135.60.237.48"
  }, {
    "id": 8,
    "first_name": "Courtenay",
    "last_name": "Otson",
    "email": "cotson7@blogspot.com",
    "gender": "Female",
    "ip_address": "99.115.17.59"
  }, {
    "id": 9,
    "first_name": "Bourke",
    "last_name": "Capozzi",
    "email": "bcapozzi8@networksolutions.com",
    "gender": "Male",
    "ip_address": "16.186.114.107"
  }, {
    "id": 10,
    "first_name": "Dominik",
    "last_name": "Deamer",
    "email": "ddeamer9@a8.net",
    "gender": "Male",
    "ip_address": "32.200.168.151"
  }]
  
