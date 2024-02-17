import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const MyForm = (props) => {

  const[form,setForm] = useState({
 
       firstName: "",
       lastName: "",
       address1: "",
       address2: "",
       city: "",
       state:""
       
  })

  useEffect(() => {

    if(props.id)
    {

    let p = props.arraydata.find((v) => {

      return v.id == props.id;
    });

    setForm(p)
  }

  },[])
  
   const handleChange = (e) => {
 
       setForm({ ...form, [e.target.name]: e.target.value });
   
 };
 
 
   const handleSave = (e) => {

  props.handleClose();

  let d = [...props.arraydata];


  if(props.id > 0)
  {
    let p = d.map((v) => {

      if(v.id == props.id)
      {
        return{...form,id : v.id}
      }
      else
      {
        return v;
      }
    });

  props.arraysetData(p);  
  }
  else
  {

    d.push({...form, id: d.length +1});
    props.arraysetData(d);  
  } 
  
 }
 
  return (
    <React.Fragment>
   
      <Dialog open={props.open} onClose={props.handleClose} >
        <DialogTitle>Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your detail.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="first Name"
            name='firstName'
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
            value={form.firstName}
            onChange={handleChange}
          />
           <TextField
            autoFocus
            margin="dense"
            id="last Name"
            name='lastName'
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={form.lastName}
          />
           <TextField
            autoFocus
            margin="dense"
            id="middle Name"
            name='middleName'
            label="Middle Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={form.middleName}
          />
           <TextField
            autoFocus
            margin="dense"
            id="address1"
            name='address1'
            label="Address1"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={form.address1}
          />
           <TextField
            autoFocus
            margin="dense"
            id="address2"
            name='address2'
            label="Address2"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={form.address2}
          />
           <TextField
            autoFocus
            margin="dense"
            id="city"
            name='city'
            label="City"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={form.city}
          />
            <TextField
            autoFocus
            margin="dense"
            id="state"
            name='state'
            label="State"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={form.state}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save Data</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>


  )
}