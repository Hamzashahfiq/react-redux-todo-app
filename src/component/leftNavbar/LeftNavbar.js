import React from 'react'
import { SideBarData } from '../../constant/SideBarData';
import './LeftNavbar.css'
import Box from '@mui/material/Box';
import { Link, NavLink } from "react-router-dom";


export default function LeftNavbar() {
    return (
        <>
            <Box component='ul' sx={{ mt: 4,p:0,}}>
                {
                    SideBarData.map((item, index) => {
                        return (
                            <NavLink  key={index} to={item.link} className='sideBarLink' activeclassname="active" >
                                <Box component='li' sx={{ listStyleType: 'none', position: 'relative',backgroundColor:'inherit',pt:1,px:{xs:0,sm:1} }}>
                                    <Box component='span' sx={{ position: 'absolute', left:{xs:14,sm:21} }} >
                                        {item.icon}
                                    </Box>
                                    <Box className='sideBarText' component='span' sx={{ mb: 1, typography: 'subtitle2', mx: 6 }}>
                                        {item.name}
                                    </Box>
                                </Box>
                            </NavLink>
                        )
                    })
                }
            </Box>
        </>
    )
}
