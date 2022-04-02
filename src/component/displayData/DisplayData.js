import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { CompTask, UnCompTask,TaskDeleteHandler,CompDeleteHandler,UpdateHandler,showRightBarTask} from '../../store/action/InputDataAction';
import './DisplayData.css'
import IconCheckBox from '../iconCheckBox/IconCheckBox';


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


export default function DispalyData({setInputTask,setIsUpadte,setRightBarOpen,setRightBarCheck}) {

    const dispatch = useDispatch();
    const taskData = useSelector((store) => store.InputDataReducer.taskDetail)
    const completedTaskDetail = useSelector((store) => store.InputDataReducer.completedTask)

    const completedHandler = (item) => {
        let completedTask = {
            id: item.id,
            task: item.task
        }
        dispatch(CompTask(completedTask))
        alert("Change to completed")
        setRightBarOpen(false)
    }
    const unCompletedHandler = (item) => {
        let unCompletedTask = {
            id: item.id,
            task: item.task
        }
        dispatch(UnCompTask(unCompletedTask))
        alert("Change to uncompleted task")
        setRightBarOpen(false)
    }
    const deleteHandler = (item) => {
        dispatch(TaskDeleteHandler(item.id))
        alert("Deleted")
        setRightBarOpen(false)
    }
    const compDeleteHandler = (item) => {
        dispatch(CompDeleteHandler(item.id))
        alert("Completed task will be delete")
        setRightBarOpen(false)
    }
    const updateHandler = (item) => {
        dispatch(UpdateHandler(item))
        setInputTask(item.task)
        setIsUpadte(true)
        setRightBarOpen(false)
    }
    const rightBarHandler = (item) => {
        dispatch(showRightBarTask(item))
        setRightBarOpen(true)
        setRightBarCheck(true)
    }
    const rightBarCheckHandler = (item) => {
        dispatch(showRightBarTask(item))
        setRightBarOpen(true)
        setRightBarCheck(false)
    }


    return (
        <div>
            <Box sx={{ px: 4, overflowY: 'auto', }} >
                {taskData.length === 0 ?
                        null :  <Box component='h4' sx={{ my: 1 }}> Tasks  </Box>}
                    { taskData.map((item) => {
                        return (
                            <Grid key={item.id} className='hoverColor' container sx={{ borderBottom: 1, wordWrap: 'break-word', borderColor: '#e0e0e0', minHeight: "fit-content" }}>

                                <Grid item xs={1} sx={{ minWidth: '30px', textAlign: 'right', }}><BootstrapTooltip title="Mark as completed" placement="top"><Checkbox onChange={() => completedHandler(item)} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} /></BootstrapTooltip></Grid>
                                <Grid item xs={6} sm={7} md={9} sx={{ color: 'black', textAlign: 'left' }}>
                                    <Box>
                                        <Button className='hoverColor' onClick={()=>rightBarHandler(item)} sx={{ color: 'black', textTransform: 'none', display: 'inline-block', backgroundColor: 'inherit', border: 0, width: '100%', padding: '7px 7px', textAlign: 'left' }}>{item.task} </Button>
                                    </Box>
                                </Grid>
                                <Grid item xs={4} sm={3} md={2} sx={{ textAlign: 'center' }}>
                                    <Tooltip title="Update" placement="bottom"><IconButton aria-label="delete" color="primary" onClick={()=>updateHandler(item)}> <EditIcon sx={{ fontSize: 20 }} /></IconButton></Tooltip>
                                    <Tooltip title="Delete" placement="bottom"><IconButton aria-label="delete" color="error" onClick={()=>deleteHandler(item)}><DeleteIcon sx={{ fontSize: 20 }} /></IconButton></Tooltip>
                                   {/* <IconCheckBox/> */}
                                </Grid>

                            </Grid>
                        )
                        })
                    }
            
                <Box>
                    {completedTaskDetail.length === 0 ? null: <Box component='h4' sx={{ mb: 1, mt: 2 }}> Completed  </Box>}
                    {
                        completedTaskDetail.map((item) => {
                            return (
                                <Grid key={item.id} className='hoverColor' container sx={{ borderBottom: 1, wordWrap: 'break-word', borderColor: '#e0e0e0', minHeight: "fit-content", }}>
                                    <Grid item xs={1} sx={{ minWidth: '30px', textAlign: 'right', }} ><BootstrapTooltip title="Mark as not completed" placement="top" ><Checkbox onChange={() => unCompletedHandler(item)} defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} /></BootstrapTooltip></Grid>
                                    <Grid item xs={6} sm={7} md={9} sx={{ color: 'black', textAlign: 'left' }}>
                                        <Box>
                                            <Button className='hoverColor' onClick={()=>rightBarCheckHandler(item)} sx={{ display: 'inline-block', textTransform: 'none', backgroundColor: 'inherit', border: 0, color: 'black', width: '100%', padding: '7px 7px', textAlign: 'left' }}><del>{item.task}</del></Button>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4} sm={3} md={2} sx={{ textAlign: 'center' }}>
                                        <Tooltip title="Delete" placement="bottom"><IconButton aria-label="delete" color="error" onClick={()=>compDeleteHandler(item)}><DeleteIcon sx={{ fontSize: 20 }} /></IconButton></Tooltip>
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


