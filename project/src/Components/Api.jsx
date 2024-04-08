import { Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Api = () => {
    var[user,setuser]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response)
            setuser(response.data)
        })
    })
   
  return (
    <div>
        <br /><br /><br /><br /><br /><br />
         <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>title</TableCell>
                        
                    </TableRow>
                </TableHead>
                {user.map((val,i)=>{
                    return(
                        <TableRow>
                           
                            <TableCell>{val.id}</TableCell>
                            <TableCell>{val.body}</TableCell>
                        </TableRow>
                    )})}

            </Table>
         </TableContainer>
    </div>
  )
}

export default Api