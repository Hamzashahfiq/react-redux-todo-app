import React,{useState} from 'react'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';


// for input
const ariaLabel = { 'aria-label': 'description' };

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




export default function InputTask() {
    const [inputTask, setInputTask] = useState("")
    console.log(inputTask)
    return (
        <>
            <Box sx={{ width: '100%', backgroundColor: '#EAEAEA', p: 2,pb:0, borderRadius: '5px', boxSizing: 'border-box', }}>
                <Input placeholder="Add a task" value={inputTask} onChange={(e)=>setInputTask(e.target.value)} sx={{ backgroundColor: 'white', width: '100%', p: 1, pb: 0 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ pt:1, px: 1, }}>
                    <IconButton aria-label="" ><BootstrapTooltip title="Add due date" arrow ><Icon sx={{ color: '#797775' }}>calendar_month</Icon></BootstrapTooltip> </IconButton>
                    <IconButton aria-label="" sx={{mx:1}} ><BootstrapTooltip title="Remind me" arrow ><Icon sx={{ color: '#797775'}}>notifications_none</Icon></BootstrapTooltip></IconButton>
                    <IconButton aria-label="" ><BootstrapTooltip title="Repeat" arrow ><Icon sx={{ color: '#797775' }}>event_repeat</Icon></BootstrapTooltip></IconButton>
                    </Box>
                    <Box sx={{ mt: 2, px: 1, }}>
                        <Button variant="text" sx={{ textTransform: 'none' }}>Add</Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
