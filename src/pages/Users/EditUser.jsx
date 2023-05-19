import { Box, Typography, Button, Avatar } from "@mui/material"
import TextField from '@mui/material/TextField';
import { MuiFileInput } from "mui-file-input";
import * as React from 'react';
import { useLocation } from "react-router-dom";
import Line from "../../components/LineChart"

function EditUser() {


  const location = useLocation()

  const pey = (value) => {
    alert("upload Done")


  }


  return (

    <Box sx={{ width: "90%", mt: "100px", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      <Typography variant="h4" sx={{ width: "100%", display: "flex", justifyContent: "center", color: "gray", marginBottom: "25px" }}>Edite User</Typography>
      <Box sx={{ flex: 1, display: "flex", justifyContent: { xs: "center", xl: "flex-start" }, height: "300px", mt: 3 }}>
        <Box boxShadow={6} display={"flex"} justifyContent={"center"}>
          <Box sx={{ display: "flex", width: { xs: "130px", sm: "140px", md: "190px" }, justifyContent: "center", alignItems: "center" }}>
            <Avatar sx={{ width: "85%", height: "80%", borderRadius: "0", mb: 3 }} src={location.state.img} />
          </Box>

          <Box sx={{ display: "flex", width: { xs: "210px", sm: "240px", md: "270px" }, flexWrap: "wrap", alignContent: "center" }}>
            <Typography variant="h6" sx={{ width: "100%", display: "flex", justifyContent: "center" }}>Name : </Typography>
            <Typography variant="body1" sx={{ width: "100%", display: "flex", justifyContent: "center" }}>{location.state.firstName}</Typography>
            <Typography variant="h6" sx={{ width: "100%", mt: "2px", display: "flex", justifyContent: "center" }}>Last Name : </Typography>
            <Typography variant="body1" sx={{ width: "100%", display: "flex", justifyContent: "center" }}>{location.state.lastName}</Typography>
            <Typography variant="h6" sx={{ width: "100%", mt: "2px", display: "flex", justifyContent: "center" }}>Email : </Typography>
            <Typography variant="body1" sx={{ width: "100%", display: "flex", justifyContent: "center" }}>{location.state.email}</Typography>
            <Typography variant="h6" sx={{ width: "100%", mt: "2px", display: "flex", justifyContent: "center" }}>Password : </Typography>
            <Typography variant="body1" sx={{ width: "100%", display: "flex", justifyContent: "center" }}>{location.state.password}</Typography>
          </Box>
        </Box>
      </Box>


      {/* <Button variant="contained" size="small" color="success" onClick={()=>peyman()}>click</Button> */}

      <Box component="form" boxShadow={6} sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, width: "600px", mt: 3, p: 2, justifyContent: "center" }} noValidate autoComplete="off" >


        <Typography variant="body1" color={"#184e77"} display={"flex"} justifyContent={"center"} width={"100%"}>
          Last Six Months Spend By User ($) AreaChart
        </Typography>
        <Line />

      </Box>


      <Box boxShadow={6} display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"} mt={3} sx={{ width: "90%", minHeight: "400px" }}>


        <Box sx={{ width: { xs: "100%", md: "50%" }, flexWrap: "wrap", my: "20px", display: "flex", alignContent: "space-evenly" }}>

          <Box sx={{ width: "100%", justifyContent: "center", display: "flex", mt: 2 }}>

            <TextField
              id="outlined-multiline-flexible"
              label="Name"
              multiline
              maxRows={4}
            />
          </Box>
          <Box sx={{ width: "100%", justifyContent: "center", display: "flex", mt: 2 }}>

            <TextField
              id="outlined-multiline-flexible"
              label="Last Name "
              multiline
              maxRows={4}
            />
          </Box>

          <Box sx={{ width: "100%", justifyContent: "center", display: "flex", mt: 2 }}>

            <TextField
              id="outlined-multiline-flexible"
              label="Last Name "
              multiline
              maxRows={4}
            />
          </Box>

          <Box sx={{ width: "100%", justifyContent: "center", display: "flex", mt: 2 }}>

            <TextField
              id="outlined-multiline-flexible"
              label="City"
              multiline
              maxRows={4}
            />
          </Box>
        </Box>

        <Box sx={{ width: { xs: "100%", md: "50%" }, flexWrap: "wrap", my: "20px", display: "flex", alignContent: "space-evenly" }}>

          <Box sx={{ width: "100%", justifyContent: "center", display: "flex", mt: 2 }}>

            <TextField
              id="outlined-multiline-flexible"
              label="Email"
              multiline
              maxRows={4}
            />
          </Box>

          <Box sx={{ width: "100%", justifyContent: "center", display: "flex", mt: 2 }}>

            <TextField
              id="outlined-multiline-flexible"
              label="Password"
              multiline
              maxRows={4}
            />
          </Box>
          <Box sx={{ width: "100%", justifyContent: "center", display: "flex", mt: 2 }}>

            <MuiFileInput sx={{ width: "200px" }} label={"Upload Image"} value={File} color={"success"} onChange={pey} getInputText={() => 'New Image'} />
          </Box>

          <Box sx={{ width: "100%", justifyContent: "center", display: "flex", mt: 2 }}>

            <Button sx={{ width: "40%", height: "50px", mt: 1 }} variant="contained" size="medium">Edit</Button>
          </Box>

        </Box>

      </Box>
    </Box>




  )
}


export default EditUser