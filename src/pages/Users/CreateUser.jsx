

import { Box, Button } from "@mui/material"
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { Link } from "react-router-dom";
import { MuiFileInput } from 'mui-file-input'



function CreateUser() {





  const pey = (value) => {
    alert("upload Done")

  }

  return (
    <>

      <Box component={"p"} display={"flex"} justifyContent={"center"} mt={3} sx={{ width: "100%", minHeight: "40px", fontSize: "30px", color: "gray" }}>
        Create New User
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

            <Link to={"/users"}>  <Button sx={{ width: { xs: "140px", sm: "160px", md: "190px" }, height: "55px", mt: 1 }} variant="contained" size="medium">Add</Button></Link>
          </Box>

        </Box>

      </Box>

    </>

  )
}


export default CreateUser