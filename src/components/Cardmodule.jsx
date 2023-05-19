import React from 'react'
import { AddShoppingCart, CurrencyExchange, KeyboardArrowDown, KeyboardArrowUp, PeopleAlt, Storefront } from "@mui/icons-material"
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material"


export default function Cardmodule() {
  return (



    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: { xs: "center", sm: "space-between" } }}>
      <Card elevation={5} sx={{ width: "260px", height: "180px", mt: 1 }}>
        <CardContent sx={{ display: "flex", justifyContent: "space-between", height: "100%" }}>


          <Box display={"flex"} height={"100%"} flexWrap={"wrap"} alignContent={"space-between"} justifyContent={"flex-start"}>
            <Typography sx={{ fontSize: 18, width: "100%" }} color="#184e77" gutterBottom>
              Users
            </Typography>
            <Typography variant="h5" width={100} component="div">
              1024
            </Typography>
            <CardActions sx={{ width: "100%", p: "0" }}>
              <Button sx={{ p: "0", m: "0" }}>See All</Button>
            </CardActions>
          </Box>

          <Box display={"flex"} height={"100%"} flexWrap={"wrap"} justifyContent={"center"} alignContent={"space-between"}>
            <Box color={"green"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <KeyboardArrowUp />
              <Typography variant="body4" component={'span'}>
                +10 %
              </Typography>
            </Box>
            <PeopleAlt sx={{ color: "#d90429" }} />
          </Box>
        </CardContent>
      </Card>




      <Card elevation={5} sx={{ width: "260px", height: "180px", mt: 1 }}>
        <CardContent sx={{ display: "flex", justifyContent: "space-between", height: "100%" }}>


          <Box display={"flex"} height={"100%"} flexWrap={"wrap"} alignContent={"space-between"} justifyContent={"flex-start"}>
            <Typography sx={{ fontSize: 18, width: "100%" }} color="#184e77" gutterBottom>
              Products
            </Typography>
            <Typography variant="h5" width={100} component="div">
              4568
            </Typography>
            <CardActions sx={{ width: "100%", p: "0" }}>
              <Button sx={{ p: "0", m: "0" }}>See All</Button>
            </CardActions>
          </Box>

          <Box display={"flex"} height={"100%"} flexWrap={"wrap"} justifyContent={"center"} alignContent={"space-between"}>
            <Box color={"green"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <KeyboardArrowUp />
              <Typography variant="body4" component={'span'}>
                +3 %
              </Typography>
            </Box>
            <Storefront sx={{ color: "#168aad" }} />
          </Box>
        </CardContent>
      </Card>






      <Card elevation={5} sx={{ width: "260px", height: "180px", mt: 1 }}>
        <CardContent sx={{ display: "flex", justifyContent: "space-between", height: "100%" }}>


          <Box display={"flex"} height={"100%"} flexWrap={"wrap"} alignContent={"space-between"} justifyContent={"flex-start"}>
            <Typography sx={{ fontSize: 18, width: "100%" }} color="#184e77" gutterBottom>
              Orders
            </Typography>
            <Typography variant="h5" width={100} component="div">
              305
            </Typography>
            <CardActions sx={{ width: "100%", p: "0" }}>
              <Button sx={{ p: "0", m: "0" }}>See All</Button>
            </CardActions>
          </Box>

          <Box display={"flex"} height={"100%"} flexWrap={"wrap"} justifyContent={"center"} alignContent={"space-between"}>
            <Box color={"red"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <KeyboardArrowDown />
              <Typography variant="body4" component={'span'}>
                -3 %
              </Typography>
            </Box>
            <AddShoppingCart sx={{ color: "#1e6091" }} />
          </Box>
        </CardContent>
      </Card>


      <Card elevation={5} sx={{ width: "260px", height: "180px", mt: 1 }}>
        <CardContent sx={{ display: "flex", justifyContent: "space-between", height: "100%" }}>


          <Box display={"flex"} height={"100%"} flexWrap={"wrap"} alignContent={"space-between"} justifyContent={"flex-start"}>
            <Typography sx={{ fontSize: 18, width: "100%" }} color="#184e77" gutterBottom>
              Balance
            </Typography>
            <Typography variant="h5" width={100} component="div">
              $ 6.2 K
            </Typography>
            <CardActions sx={{ width: "100%", p: "0" }}>
              <Button sx={{ p: "0", m: "0" }}>See All</Button>
            </CardActions>
          </Box>

          <Box display={"flex"} height={"100%"} flexWrap={"wrap"} justifyContent={"center"} alignContent={"space-between"}>
            <Box color={"green"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <KeyboardArrowUp />
              <Typography variant="body4" component={'span'}>
                +8 %
              </Typography>
            </Box>
            <CurrencyExchange sx={{ color: "#76c893" }} />
          </Box>
        </CardContent>
      </Card>
    </Box>

  )
}
