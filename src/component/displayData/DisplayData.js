import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';



// BootstrapTooltip code
const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.white,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));


export default function DispalyData() {
  const taskData = useSelector((store)=>store.InputDataReducer)
   console.log(taskData)
    return (
        <div>
            <Box sx={{ px: 4, overflowY: 'auto',}} >
                {true ? <Box component='h4' sx={{ my: 1 }}> Tasks  </Box> : null}
                {
                 taskData.map((item) => {
                        return (
                            <Grid key={item.id} className='hoverColor' container sx={{ borderBottom: 1, wordWrap: 'break-word', borderColor: '#e0e0e0', minHeight: "fit-content" }}>

                                <Grid item xs={1} sx={{ minWidth: '30px', textAlign: 'right', }}><BootstrapTooltip title="Mark as completed" placement="top"><Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/></BootstrapTooltip></Grid>
                                <Grid item xs={6} sm={7} md={9} sx={{ color: 'black', textAlign: 'left' }}>
                                    <Box>
                                        <Button className='hoverColor' sx={{ color: 'black', textTransform: 'none', display: 'inline-block', backgroundColor: 'inherit', border: 0, width: '100%', padding: '7px 7px', textAlign: 'left' }}>{taskData} </Button>
                                    </Box>
                                </Grid>
                                <Grid item xs={4} sm={3} md={2} sx={{ textAlign: 'center' }}>
                                    <Tooltip title="Update" placement="bottom"><IconButton aria-label="delete" color="primary"> <EditIcon sx={{ fontSize: 20 }} /></IconButton></Tooltip>
                                    <Tooltip title="Delete" placement="bottom"><IconButton aria-label="delete" color="error"><DeleteIcon sx={{ fontSize: 20 }} /></IconButton></Tooltip>
                                </Grid>

                            </Grid>
                        )
                    })  
                }
                <Box sx={{}}>
                    { true? <Box component='h4' sx={{ mb: 1, mt: 2 }}> Completed  </Box> : null}
                    {
                        taskData.map((item) => {
                            return (
                                <Grid key={item.id} className='hoverColor' container sx={{ borderBottom: 1, wordWrap: 'break-word', borderColor: '#e0e0e0', minHeight: "fit-content", }}>
                                    <Grid item xs={1} sx={{ minWidth: '30px', textAlign: 'right', }} ><BootstrapTooltip title="Mark as not completed" placement="top" ><Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} /></BootstrapTooltip></Grid>
                                    <Grid item xs={6} sm={7} md={9} sx={{ color: 'black', textAlign: 'left' }}>
                                        <Box>
                                            <Button className='hoverColor' sx={{ display: 'inline-block', textTransform: 'none', backgroundColor: 'inherit', border: 0, color: 'black', width: '100%', padding: '7px 7px', textAlign: 'left' }}><del>{item.taskDetail}</del></Button>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4} sm={3} md={2} sx={{ textAlign: 'center' }}>
                                        <Tooltip title="Delete" placement="bottom"><IconButton aria-label="delete" color="error"><DeleteIcon sx={{ fontSize: 20 }} /></IconButton></Tooltip>
                                    </Grid>
                                </Grid>
                            )
                        })
                    }

                </Box>
            </Box>
        </div>
    )
}


