import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import * as React from 'react';
import { AccountCircle, Sms, Notifications, Sell, ShoppingBag, LocalShipping, Home, BarChart, Logout, VerifiedUser, FiberNew, Dehaze } from '@mui/icons-material';
import { Link } from "react-router-dom";






let x = 0

function Sidebar() {


  const [active, setActive] = React.useState([1, { xs: "none", md: "flex" }])


  const _close = () =>{
    setActive([1, { xs: "none", md: "flex" }])
    document.getElementById("dis").style.display= "none"
  }




  window.onresize = function () {

    if (x === 0) {
      setActive([1, { xs: "none", md: "flex" }])
     

      x++
    }
  }





  const menubar = () => {

    if (active[0] === 1) {

      document.getElementById("dis").style.display= "flex"

      setActive([2, { xs: "flex", md: "flex" }])
      x = 0
    } else {



      setActive([1, { xs: "none", md: "flex" }])

    }
  }


  return (

    <>

      <Dehaze onClick={menubar} sx={{ cursor: "pointer", fontSize: "30px", position: "fixed", zIndex: "3450", top: { xs: "11px", sm: "20px" }, left: { xs: "6px", sm: "30px" }, display: { xs: "flex", md: "none" } }} />

      
      <Box id={"box1"} fontSize={{ xs: "12px", sm: "14px", md: "16px", lg: "18px" }}  sx={{ backgroundColor: "background.default", position: "relative", display: active[1], flex: { sx:0.6, md:1, lg:0.6}, justifyContent: "center", p: 1, flexWrap: "wrap", mt:"-8px"}}>
        <Box id={"box2"} overflow={"scroll"} width={"240px"} position={"fixed"} left={"0"} zIndex={"1000"} fontSize={{ xs: "14px", sm: "16px", md: "18px", lg: "20px" }} sx={{ backgroundColor: "background.default", display: active[1], justifyContent: "center", p: 1, height: "100%", borderRight: "1px solid gray", flexWrap: "wrap", "&::-webkit-scrollbar": { overflow: "auto", width: "0px", } }}>

          <Typography width={"100%"} sx={{ mt: 0, mb: 0, p: "1", textAlign: "center", color: "white", bgcolor: "#174A7D", borderRadius: "3px" }} fontSize={'inherit'} component="div">
            Main
          </Typography>
          <List sx={{ width: "100%" }}>
            <Link to={"/"}><Listbar icon={<Home />} listText={'Home'} /></Link>
          </List>




          <Typography width={"100%"} sx={{ mt: 0, mb: 0, p: "1", bgcolor: "white", textAlign: "center", color: "white", backgroundColor: "#174A7D", borderRadius: "3px" }} fontSize={'inherit'} component="div">
            Lists
          </Typography>
          <List sx={{ width: "100%" }}>
            <Link to={"/users"}> <Listbar icon={<AccountCircle />} listText={'Users'} /></Link>
            <Link to={"/allproducts"}> <Listbar icon={<Sell />} listText={'All Products'} /></Link>
            <Link to={"/allproducts/lastproducts"}> <Listbar icon={<FiberNew />} listText={'New Products'} /></Link>
            <Link> <Listbar icon={<ShoppingBag />} listText={'Orders'} /></Link>
            <Link> <Listbar icon={<LocalShipping />} listText={'Delivery'} /></Link>
            <Link to={"charts"} > <Listbar icon={<BarChart />} listText={'Charts'} /></Link>
          </List >


          <Typography width={"100%"} sx={{ mt: 0, mb: 0, p: "1", bgcolor: "white", textAlign: "center", color: "white", backgroundColor: "#174A7D", borderRadius: "3px" }} fontSize={'inherit'} component="div">
            Add
          </Typography>
          <List sx={{ width: "100%" }}>
            <Link to={"/users/createuser"}> <Listbar icon={<AccountCircle />} listText={'Add New User'} /></Link>
            <Link to={"/allproducts/createproduct"}> <Listbar icon={<Sell />} listText={'Add New Product'} /></Link>
          </List>


          <Typography width={"100%"} sx={{ mt: 0, mb: 0, p: "0px 1px 0px 1px", bgcolor: "white", textAlign: "center", color: "white", backgroundColor: "#174A7D", borderRadius: "3px" }} fontSize={'inherit'} component="div">
            Personal Info
          </Typography>
          <List sx={{ width: "100%", mt: "0" }}>
            <Listbar icon={<AccountCircle />} listText={'Account'} />
            <Listbar icon={<Sms />} listText={'Massage'} />
            <Listbar icon={<Notifications />} listText={'Notification'} />
            <Listbar icon={<Logout />} listText={'Logeout'} />
            <Listbar icon={<VerifiedUser />} listText={'v5.2023'} />
            <Listbar icon={""} listText={''} />
          </List>




        </Box>
      </Box>
      <Box id={"dis"} display={"none"} width={"100%"} height={"100%"}  position={"absolute"} top={"0"} left={"0"} zIndex={"900"} onClick={_close}>

      </Box>

    </>
  )
}


function Listbar({ icon, listText }) {

  return (
    <>
      <ListItem sx={{ justifyContent: "flex-start", mt: "0", height: "40px", width: "100%", borderBottom: "1px solid gray", '&:hover': { backgroundColor: "#1B94DF", color: "white" } }} >
        <ListItemIcon sx={{ justifyContent: "center", color: "#184e77" }}>
          {icon}
        </ListItemIcon>
        <ListItemText sx={{ cursor: "pointer" }} primary={listText} />
      </ListItem>
    </>
  )
}


export default Sidebar