import React from 'react'
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';




// custom date set
let date = new Date();
let day = date.getDay();
let dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusrday', 'Friday', 'Saturday'].map((item, index) => {
  return index === day ? item : null;
})
let month = date.getMonth();
let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((item, index) => {
  return index === month ? item : null;
})
let currentDate = date.getDate();
// ----------------------------------------------------------------------------------------

export default function CenterBox() {
  return (
    <Box sx={{ height: '100vh', boxSizing: 'border-box', paddingTop: { xs: '55px', sm: '60px' } }}>
      <Box sx={{ height: '100%', pt: 2, overflow: 'auto', boxSizing: 'border-box', }}>
        <Box component='span' sx={{ display: 'inline-block', marginLeft: { xs: '3px', sm: '11px' } }}>
          <IconButton aria-label="delete" size="large">
            <MenuIcon />
          </IconButton>
          <Box component="span" sx={{ typography: 'h5' }}>
            My Day
            <Box component="p" sx={{ typography: 'subtitle2', fontWeight: 'light', marginTop: '5px' }}>
              {dayName},{monthName} {currentDate}
            </Box>
          </Box>
        </Box>

      </Box>
    </Box>
  )
}
