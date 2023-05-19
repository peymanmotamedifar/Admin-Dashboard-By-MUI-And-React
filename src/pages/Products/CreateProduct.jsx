import { Box, Button } from "@mui/material"
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { Link } from "react-router-dom";
import { MuiFileInput } from 'mui-file-input'


function CreateProduct() {




  const pey = (value) => {
    alert("upload Done")


  }

  return (
    <>
      <Box component={"p"} display={"flex"} justifyContent={"center"} mt={3} sx={{ width: "100%", minHeight: "40px", fontSize: "30px", color: "gray" }}>
        Create New Product
      </Box>
      <Box boxShadow={6} display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"} mt={3} sx={{ width: "90%", minHeight: "400px" }}>


        <Box sx={{ width: { xs: "100%", md: "50%" }, flexWrap: "wrap", my: "20px", display: "flex", alignContent: "space-evenly" }}>

          <Box sx={{ width: "100%", justifyContent: "center", display: "flex", mt: 2 }}>

            <TextField
              id="outlined-multiline-flexible"
              label="Title"
              multiline
              maxRows={4}
            />
          </Box>
          <Box sx={{ width: "100%", justifyContent: "center", display: "flex", mt: 2 }}>

            <TextField
              id="outlined-multiline-flexible"
              label="Category "
              multiline
              maxRows={4}
            />
          </Box>

          <Box sx={{ width: "100%", justifyContent: "center", display: "flex", mt: 2 }}>

            <TextField
              id="outlined-multiline-flexible"
              label="Price "
              multiline
              maxRows={4}
            />
          </Box>

          <Box sx={{ width: "100%", justifyContent: "center", display: "flex", mt: 2 }}>

            <TextField
              id="outlined-multiline-flexible"
              label="Count"
              multiline
              maxRows={4}
            />
          </Box>
        </Box>

        <Box sx={{ width: { xs: "100%", md: "50%" }, flexWrap: "wrap", my: "20px", display: "flex", alignContent: "space-evenly" }}>

          <Box sx={{ width: "100%", justifyContent: "center", display: "flex", mt: 2 }}>

            <TextField
              id="outlined-multiline-flexible"
              label="Color"
              multiline
              maxRows={4}
            />
          </Box>

          <Box sx={{ width: "100%", justifyContent: "center", display: "flex", mt: 2 }}>

            <TextField
              id="outlined-multiline-flexible"
              label="%Off"
              multiline
              maxRows={4}
            />
          </Box>
          <Box sx={{ width: "100%", justifyContent: "center", display: "flex", mt: 2 }}>

            <MuiFileInput sx={{ width: "200px" }} label={"Upload Image"} value={File} color={"success"} onChange={pey} getInputText={() => 'New Image'} />
          </Box>

          <Box sx={{ width: "100%", justifyContent: "center", display: "flex", mt: 2 }}>

            <Link to={"/allproducts"}>  <Button sx={{ width: { xs: "140px", sm: "160px", md: "190px" }, height: "55px", mt: 1 }} variant="contained" size="medium">Add</Button></Link>
          </Box>

        </Box>

      </Box>
    </>

  )
}


export default CreateProduct