import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import '../App.css';
import axios from 'axios'

const Add = () => {
    var[inputs,setInputs] = useState({
        name:"",
        des:"",
        author:"",
        
    })
     const inputHandler = (e)=>{
        const {name,value}=e.target
        setInputs((prevData)=>({...prevData,[name]:value}))
        console.log(inputs)
     }
     const addHandler = ()=>{
      console.log("button clicked");
      axios.post("http://localhost:8080/add",inputs)
      .then((response)=>{
        console.log(response.data)
        alert(response.data)
      })
      .catch((err)=>console.log(err))
     }
  return (
    <div style={{margin:'6%'}} className='App' >
    <Typography variant='h4' style={{color:'purple'}}>
      Add blog
      </Typography>
      <br /><br />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <TextField 
          label=' Name' 
          variant='outlined' 
          fullWidth
          name='name'
          value={inputs.ename}
          onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}> 
          <TextField label='Description' 
          variant='outlined' 
          fullWidth
          name='des'
          value={inputs.eage}
          onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}> 
          <TextField 
          label='Name of author'
           variant='outlined' 
           fullWidth
           name='author'
          value={inputs.eposition}
          onChange={inputHandler}
           />
        </Grid>
        
        <Grid item xs={12} sm={12} md={12}> 
        <Button variant='contained' color='secondary' onClick={addHandler}>Submit</Button>
        </Grid>
      </Grid>

    </div>
  )
}

export default Add