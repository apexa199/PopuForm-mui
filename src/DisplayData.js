import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Stack } from '@mui/material';


 const DisplayData = (props) => {

  console.log("hello")

    const columns = [
        { field: 'firstName', headerName: 'First Name', width: 150 },
        { field: 'lastName', headerName: 'Last Name', width: 150 },
        { field: 'address1', headerName: 'Address1', width: 150 },
        { field: 'address2', headerName: 'Address2', width: 150 },
        { field: 'city', headerName: 'City', width: 150 },
        { field: 'state', headerName:'State', width: 150 },
        {
            field: 'action',
            headerName: 'Action',
            width: 180,
            sortable: false,
            disableClickEventBubbling: true,
            
            renderCell: (params) => {

              const onClick = (e) => {

                const currentRow = params.row;
                return alert(JSON.stringify(currentRow,null))
              }

                const deleteRow = (e) => {

                  let d = [...props.rows];

                  const currentRow = params.row;

                  let filterData = d.filter((v) => {

                    return v.id != currentRow.id
                  })
                
              props.changeArray(filterData)
                };
                

                const editData = () => {

                  const currentRow = params.row;

                  props.setId(currentRow.id)

                }
                
                return (
                  <Stack direction="row" spacing={2}>
                    <Button variant="outlined" color="warning" size="small" onClick={editData}>Edit</Button>
                    <Button variant="outlined" color="error" size="small" onClick={deleteRow}>Delete</Button>
                  </Stack>
                );
            },
          }
      ];

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid rows={props.rows} columns={columns} />
    </div>
  )
}

export default React.memo(DisplayData);