import { Avatar, Box, AppBar, Toolbar, Typography, Badge, Menu, MenuItem, InputBase, Switch } from "@mui/material"
import { styled } from '@mui/material/styles';
import { DarkMode, Dehaze, Notifications, Sms } from '@mui/icons-material';
import * as React from 'react';
import person from '../../assets/img/pey2.png'
// import Stack from '@mui/material/Stack';
import { useState } from "react";
import { Link } from "react-router-dom";



function Topbar({ mode, setMode }) {
    const [anchor, setAnchor] = useState(null)
    const [open, setOpen] = useState(false)
    function peyman(e) {
        setAnchor(e.target)
        setOpen(true)
    }



    const Search = styled("div")({

        borderRadius: '10px',
        backgroundColor: 'white',
        padding: '2px 10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center"

    })


    const darkmode = () => {

        setMode(mode === "dark" ? "light" : "dark")

    }




    return (

        <>
            <AppBar position="sticky" color="primary" >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6" component={'div'} display={{ xs: "none", md: "flex" }}>
                        <Link to={"/"}> Admin Dashboard </Link>
                    </Typography>
                    <Dehaze sx={{ opacity: "0", display: { xs: "flex", md: "none" } }} />
                    <Search sx={{ width: { xs: "50%", sm: "40%", md: "35%" } , height:{xs:"30px", md:"35px"}}}>
                        <InputBase outline={'none'} type="search" placeholder="Search..." sx={{ color: "gray", width: "90%", height: "100%", border: "none", outline: "none" }} />
                    </Search>
                    <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center", gap: { xs: '9px', sm: '20px', md: "50px" } }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Switch onChange={darkmode} size="small" color="default" />
                            <DarkMode />
                        </Box>
                        <Badge sx={{ fontSize:"20px", '&:hover': { cursor: 'pointer', } , display:{xs:"none", md:"flex"}}} badgeContent={1} color="error">
                            <Notifications />
                        </Badge>
                        <Badge  sx={{ width:{xs:"20px", sm:"30px", md:"35px"},fontSize:"20px", '&:hover': { cursor: 'pointer', } }} badgeContent={3} color="error">
                            <Sms sx={{width:{xs:"20px", sm:"30px", md:"35px"}}} />
                        </Badge>
                        <Box  >
                            <Avatar src={person} sx={{ border: '1px solid white', width:{xs:"40px", sm:"45px"} , height:{xs:"40px", md:"45px"} }} onClick={peyman} />
                            <UserMenu anchor={anchor} open={open} setOpen={setOpen} />

                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>


    )
}




function UserMenu({ anchor, open, setOpen }) {
    function closeMenu() {
        setOpen(false)
    }
    return (
        <>
            <Menu anchorEl={anchor} open={open} onClose={closeMenu} anchorPosition={{ vertical: 'bottom', horizontal: 'right', }}>
                <MenuItem>Profile</MenuItem>
                <MenuItem>My Account</MenuItem>
                <MenuItem>Massage</MenuItem>
                <MenuItem>LogOut</MenuItem>
            </Menu>
        </>
    )
}





export default Topbar