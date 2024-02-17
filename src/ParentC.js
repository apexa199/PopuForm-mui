import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { MyForm } from './MyForm';
import DisplayData  from './DisplayData';


export const ParentC = () => {

    const [open, setOpen] = useState(false);

    const [data,setData] = useState([]);

    const[id,setId] = useState(0);

    console.log(data);

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const editd = (id) => {

    setId(id);
    setOpen(true);

  }

  return (
    <>
    
    <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>

      
<MyForm open={open} handleClose={handleClose}

    arraydata={data} arraysetData = {setData} 
    
    setId={setId} id={id}/>


    <DisplayData rows={data} changeArray={setData} setId={editd}/>
</>
    
  )
}
