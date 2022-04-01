import React from 'react'
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
} from '@react-hook/window-size'
import { useSelector } from 'react-redux';


// for tooltip
const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));

// for model style
const style = {
    float: 'right',
    width: '300px',
    height: '100vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    zIndex:600
};


export default function RightSideBar({rightBarCheck,setRightBarOpen}) {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setRightBarOpen(false)
    };

    const [width, height] = useWindowSize()
    const taskData = useSelector((store)=>store.InputDataReducer.rightBarTaskData)
      console.log(taskData)
    return (
        <>
            {width >= 900 ?
                <Box sx={{ height: '100%', minWidth: '300px',maxWidth: '300px', px: 1, overflowX: 'auto',pt:8, boxSizing: 'border-box', bgcolor: '#EAEAEA', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ flexGrow: 1 }} >
                        <Paper sx={{ my: 1 }} >
                            {rightBarCheck?
                                <Box sx={{border:1,px:1,}}>
                                    <Box  sx={{border:1,}}><BootstrapTooltip title="Mark as Completed" placement='top' ><Checkbox checked={false}  /></BootstrapTooltip> </Box>
                                     <Box sx={{wordWrap: 'break-word',typography: 'subtitle2',overflow:'auto',m:0,p:0,border:1}}>{taskData.task} </Box>
                                </Box>
                                // <Box component='p' sx={{wordWrap: 'break-word',px:1,typography: 'subtitle2',overflow:'auto',m:0,p:0,border:1}}><BootstrapTooltip title="Mark as Completed" placement='top' ><Checkbox checked={false}  /></BootstrapTooltip> {taskData.task} </Box>
                                : <Box component='p'  sx={{wordWrap: 'break-word',px:1}} ><BootstrapTooltip title="Mark as uncompleted" placement='top' ><Checkbox checked={true} /></BootstrapTooltip> <del> {taskData.task}</del></Box>
                            }
                            <Box sx={{ pl: 1, position: 'relative', color: '#757de8' }} > <AddIcon /><Box style={{ position: 'absolute', left: '50px', display: 'inline-Block', }}>Add step</Box></Box>
                        </Paper>
                        <Paper sx={{ my: 2 }} >
                            <Box className='hoverColor' sx={{ px: 1, pt: 2, pb: 1, position: 'relative', color: '#757de8' }} > <LightModeOutlinedIcon /><Box style={{ position: 'absolute', left: '50px', display: 'inline-Block', }}>Add to My Day</Box></Box>

                        </Paper>
                        <Paper sx={{ my: 2 }}>
                            <Box className='hoverColor' sx={{ pl: 1, py: 2, m: 0, borderBottom: 1, borderColor: '#e0e0e0', position: 'relative', color: '#525151' }} > <NotificationsNoneIcon /><Box sx={{ position: 'absolute', left: '50px', display: 'inline-Block', }}>Remind me</Box></Box>
                            <Box className='hoverColor' sx={{ pl: 1, py: 2, m: 0, borderBottom: 1, borderColor: '#e0e0e0', position: 'relative', color: '#525151' }} > <CalendarTodayIcon /><Box sx={{ position: 'absolute', left: '50px', display: 'inline-Block', }}>Add due date</Box></Box>
                            <Box className='hoverColor' sx={{ pl: 1, py: 2, m: 0, position: 'relative', color: '#525151' }} > <EventNoteIcon /><Box sx={{ position: 'absolute', left: '50px', display: 'inline-Block', }}>Reapet</Box></Box>

                        </Paper>
                        <Paper sx={{ my: 2 }} >
                            <Box className='hoverColor' sx={{ px: 1, py: 2, position: 'relative', color: '#525151' }} > <LocalOfferIcon /><Box style={{ position: 'absolute', left: '50px', display: 'inline-Block', }}>Pick a category</Box></Box>
                        </Paper>
                        <Paper sx={{ my: 2 }}>
                            <Box className='hoverColor' sx={{ px: 1, py: 2, position: 'relative', color: '#525151' }} > <AttachFileIcon /><Box style={{ position: 'absolute', left: '50px', display: 'inline-Block', }}>Add File</Box></Box>
                        </Paper>
                        <Paper sx={{ my: 2 }}>
                            <Box sx={{ p: 1, position: 'relative', color: '#525151', height: '60px' }} >Add Note</Box>
                        </Paper>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <BootstrapTooltip title="Click for hide" placement='top'><IconButton aria-label="hide" ><ExitToAppIcon /></IconButton></BootstrapTooltip>
                        {true?
                            <BootstrapTooltip title="Delete selected task" placement='top'><IconButton aria-label="Delete" ><DeleteIcon /></IconButton></BootstrapTooltip>
                            : <BootstrapTooltip title="Delete selected task" placement='top'><IconButton aria-label="Delete"><DeleteIcon /></IconButton></BootstrapTooltip>
                        }
                    </Box>
                </Box> :
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Box sx={{ height: '100vh', width: '300px', px: 1, overflowX: 'auto', pt: 8, boxSizing: 'border-box', bgcolor: '#EAEAEA', display: 'flex', flexDirection: 'column' }}>
                                <Box sx={{ flexGrow: 1 }} >
                                    <Paper sx={{ my: 1 }} >
                                        {rightBarCheck ?
                                            <Box component='h4' sx={{wordWrap: 'break-word',px:1,}} ><BootstrapTooltip title="Mark as Completed" placement='top' ><Checkbox checked={false}  /></BootstrapTooltip>{taskData.task}</Box>
                                            : <Box component='h4' sx={{wordWrap: 'break-word',px:1}} ><BootstrapTooltip title="Mark as uncompleted" placement='top' ><Checkbox checked={true} /></BootstrapTooltip> <del> {taskData.task}</del></Box>
                                        }
                                        <Box sx={{ pl: 1, position: 'relative', color: '#757de8' }} > <AddIcon /><Box style={{ position: 'absolute', left: '50px', display: 'inline-Block', }}>Add step</Box></Box>
                                    </Paper>
                                    <Paper sx={{ my: 2 }} >
                                        <Box className='hoverColor' sx={{ px: 1, pt: 2, pb: 1, position: 'relative', color: '#757de8' }} > <LightModeOutlinedIcon /><Box style={{ position: 'absolute', left: '50px', display: 'inline-Block', }}>Add to My Day</Box></Box>

                                    </Paper>
                                    <Paper sx={{ my: 2 }}>
                                        <Box className='hoverColor' sx={{ pl: 1, py: 2, m: 0, borderBottom: 1, borderColor: '#e0e0e0', position: 'relative', color: '#525151' }} > <NotificationsNoneIcon /><Box sx={{ position: 'absolute', left: '50px', display: 'inline-Block', }}>Remind me</Box></Box>
                                        <Box className='hoverColor' sx={{ pl: 1, py: 2, m: 0, borderBottom: 1, borderColor: '#e0e0e0', position: 'relative', color: '#525151' }} > <CalendarTodayIcon /><Box sx={{ position: 'absolute', left: '50px', display: 'inline-Block', }}>Add due date</Box></Box>
                                        <Box className='hoverColor' sx={{ pl: 1, py: 2, m: 0, position: 'relative', color: '#525151' }} > <EventNoteIcon /><Box sx={{ position: 'absolute', left: '50px', display: 'inline-Block', }}>Reapet</Box></Box>

                                    </Paper>
                                    <Paper sx={{ my: 2 }} >
                                        <Box className='hoverColor' sx={{ px: 1, py: 2, position: 'relative', color: '#525151' }} > <LocalOfferIcon /><Box style={{ position: 'absolute', left: '50px', display: 'inline-Block', }}>Pick a category</Box></Box>
                                    </Paper>
                                    <Paper sx={{ my: 2 }}>
                                        <Box className='hoverColor' sx={{ px: 1, py: 2, position: 'relative', color: '#525151' }} > <AttachFileIcon /><Box style={{ position: 'absolute', left: '50px', display: 'inline-Block', }}>Add File</Box></Box>
                                    </Paper>
                                    <Paper sx={{ my: 2 }}>
                                        <Box sx={{ p: 1, position: 'relative', color: '#525151', height: '60px' }} >Add Note</Box>
                                    </Paper>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <BootstrapTooltip title="Click for hide" placement='top'><IconButton aria-label="hide"><ExitToAppIcon /></IconButton></BootstrapTooltip>
                                    {true?
                                        <BootstrapTooltip title="Delete selected task" placement='top'><IconButton aria-label="Delete" ><DeleteIcon /></IconButton></BootstrapTooltip>
                                        : <BootstrapTooltip title="Delete selected task" placement='top'><IconButton aria-label="Delete"><DeleteIcon /></IconButton></BootstrapTooltip>
                                    }
                                </Box>
                            </Box>
                        </Box>
                    </Modal>
                </div>}
        </>
    )
}
