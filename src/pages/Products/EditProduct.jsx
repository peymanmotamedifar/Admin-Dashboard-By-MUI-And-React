import { Box, Typography, Button, Avatar } from "@mui/material"
import TextField from '@mui/material/TextField';
import * as React from 'react';
import {  useLocation } from "react-router-dom";
import { MuiFileInput } from 'mui-file-input'
import Line from "../../components/LineChart"

function EditProduct() {

  const location = useLocation()





  const pey = (value) => {
    alert("upload Done")


  }

  return (

    <Box sx={{ width: "90%", mt: "100px", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      <Typography variant="h6" sx={{ width: "100%", display: "flex", justifyContent: "center", color: "gray" }}>Edit Product</Typography>
      <Box sx={{ flex: 1, display: "flex", height: "300px", mt: 3 }}>
        <Box boxShadow={8} display={"flex"}>
          <Box sx={{ display: "flex", width: "195px", justifyContent: "center", alignItems: "center", borderRight: "1px solid gray" }}>
            <Avatar sx={{ width: "85%", height: "75%", borderRadius: "0" }} src={location.state.img} />
          </Box>

          <Box sx={{ display: "flex", width: "280px", flexWrap: "wrap", alignContent: "center", justifyContent: "center" }}>
            <Typography variant="h6" sx={{ width: "100%", display: "flex", justifyContent: "center" }}>Title : </Typography>
            <Typography variant="body1" sx={{ width: "100%", display: "flex", justifyContent: "center", color: "gray", textAlign: "center" }}>{location.state.name}</Typography>
            <Typography variant="h6" sx={{ width: "100%", mt: "2px", display: "flex", justifyContent: "center" }}>Category : </Typography>
            <Typography variant="body1" sx={{ width: "100%", display: "flex", justifyContent: "center", color: "gray" }}>{location.state.category}</Typography>
            <Typography variant="h6" sx={{ width: "100%", mt: "2px", display: "flex", justifyContent: "center" }}>Price : </Typography>
            <Typography variant="body1" sx={{ width: "100%", display: "flex", justifyContent: "center", color: "gray" }}>{location.state.price}</Typography>
            <Typography variant="h6" sx={{ width: "100%", mt: "2px", display: "flex", justifyContent: "center" }}>Count : </Typography>
            <Typography variant="body1" sx={{ width: "100%", display: "flex", justifyContent: "center", color: "gray" }}>{location.state.count}</Typography>
          </Box>
        </Box>
      </Box>


      {/* <Button variant="contained" size="small" color="success" onClick={()=>peyman()}>click</Button> */}

      <Box component="form" boxShadow={6} sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, width: "600px", mt: 3, p: 2, justifyContent: "center" }} noValidate autoComplete="off" >


        <Typography variant="body1" display={"flex"} justifyContent={"center"} width={"100%"}>
          Last Six Months Sale ($) AreaChart
        </Typography>
        <Line />

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

            <Button sx={{ width: "40%", height: "50px", mt: 1 }} variant="contained" size="medium">Edit</Button>
          </Box>

        </Box>

      </Box>
    </Box>



  )
}


export default EditProduct