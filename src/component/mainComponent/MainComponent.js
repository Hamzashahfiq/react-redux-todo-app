import React, { useState } from 'react'
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import InputTask from '../inputTask/InputTask'
import LeftNavbar from '../leftNavbar/LeftNavbar';
import { useWindowSize, useWindowWidth, useWindowHeight } from '@react-hook/window-size'
import Modal from '@mui/material/Modal';





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

// for model style
const style = {
  width: '220px',
  height: '100vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  zIndex: 300,
  paddingTop: '60px',
};




// ----------------------------------------------------------------------------------------

export default function MainComponent(props) {
  const { pageName } = props
  const [width, height] = useWindowSize()
  const [open, setOpen] = React.useState(true);  //model State
  const [leftWindowOpen, setleftWindowOpen] = useState(width >= 800 ? true : false)

  // model Function
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setleftWindowOpen(false)
  }

  const leftNavbarHandler = () => {
    setleftWindowOpen(true)
    setOpen(true)
  }

  return (
    <>
      <Box sx={{ height: '100vh', width: '100%', boxSizing: 'border-box', paddingTop: { xs: '54px', sm: '59px' } }}>
        <Box sx={{ height: '100%', boxSizing: 'border-box', display: 'flex' }}>

          {/* left side bar */}
          {leftWindowOpen ?
            width >= 800 ?
              <Box sx={{ minWidth: '220px', bgcolor: '#EAEAEA', pt: 1 }}>
                <Box component='span' sx={{ display: 'inline-block', position: 'absolute', marginLeft: { xs: '3px', sm: '11px' } }}>
                  <IconButton aria-label="delete" size="large" onClick={() => setleftWindowOpen(false)}>
                    <MenuIcon />
                  </IconButton>
                </Box>
                <Box sx={{ pt: 2 }}>
                  <LeftNavbar />
                </Box>
              </Box>
              : <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Box sx={{ height: '100%', minWidth: '220px', bgcolor: '#EAEAEA', pt: 1 }}>
                    <Box component='span' sx={{ display: 'inline-block', position: 'absolute', marginLeft: { xs: '3px', sm: '11px' } }}>
                      <IconButton aria-label="delete" size="large" onClick={() => setleftWindowOpen(false)}>
                        <MenuIcon />
                      </IconButton>
                    </Box>
                    <Box sx={{ pt: 2 }}>
                      <LeftNavbar />
                    </Box>
                  </Box>
                </Box>
              </Modal>
            : null
          }

          {/* center box */}
          <Box sx={{ px: 2, width: '100%', pt: 1 }}>
            <Box>
              {leftWindowOpen ? null :
                <Box component='span' sx={{ display: 'inline-block', border: 1, marginLeft: { xs: '-4px', sm: '3px' } }}>
                  <IconButton aria-label="delete" size="large" sx={{ mb: 2 }} onClick={() => leftNavbarHandler()}>
                    <MenuIcon />
                  </IconButton>
                  <Box component="span" sx={{ typography: 'h5', border: 1, display: 'inline-block', position: 'relative' }}>
                    {pageName}
                    <Box component="span" sx={{ border: 1, display: 'inline-block', position: 'absolute', top: '30px',width:'60px' }}  >
                      <Box component="p" sx={{ typography: 'caption', color: '#797775', marginTop: '5px' }}>
                        {dayName}, {monthName} {currentDate}
                      </Box>
                    </Box>
                  </Box>

                </Box>}

            </Box>
            <Box>
              <InputTask />
            </Box>
          </Box>


          {/* right side bar */}
          <Box sx={{ border: 1, pt: 2, minWidth: '300px' }}>right</Box>

        </Box>
      </Box>
    </>
  )
}
