import React from 'react'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const ariaLabel = { 'aria-label': 'description' };

export default function InputTask() {
    return (
        <>
            <Box>
                <Input placeholder="Add a task" />
            </Box>



            {/* <Grid container justifyContent="center" sx={{backgroundColor: '#EAEAEA',borderRadius: '5px',boxSizing: 'border-box',minWidth:'fit-content'}}>
                    <Grid item xs={10}>
                        <Input placeholder="Add a task" onChange={(e)=>setInputTask(e.target.value)} value={inputTask} inputProps={ariaLabel}
                            sx={{
                                m:1,p: 1, backgroundColor: 'white', width: '100%',boxSizing: 'border-box'
                            }} />
                    </Grid>
                    <Grid item xs={11} md={1}  sx={{textAlign: 'center', p:'5px',m:1,boxSizing: 'border-box' }}>
                     {updateIs?
                        <Button onClick={onSubmitHandler} variant="outlined" >Add</Button>:
                        <Button onClick={updateHandler} variant="outlined" >Update</Button>
                     }
                    </Grid>
                </Grid> */}
        </>
    )
}
