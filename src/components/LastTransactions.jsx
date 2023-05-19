import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Box } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import LoadingPic from "../assets/img/amalie-steiness.gif"



export default function LastTransaction() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetch("https://fakestoreapi.com/products?limit=5")
      .then((response) => {
        console.log(response.ok)
        if (response.ok) {

          return response.json()
            .then((mydata) => {
              setData(mydata)
              setLoading(false)
            })
        } else {
          document.getElementById("t1").innerHTML = "error 404"
        }
      })





  }, [])

  return (

    <>

      <TableContainer id='t1' component={Paper}  >
        {loading ? <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}> <Avatar sx={{ width: "70px", height: "70px", m: 4 }} src={LoadingPic} /></Box> : <Table sx={{ width: "100%" }} aria-label="simple table" >
          <TableHead>
            <TableRow >
              <TableCell sx={{ color: "inherit" }}>New Product</TableCell>
              <TableCell sx={{ color: "inherit" }} align="center">Category</TableCell>
              <TableCell sx={{ color: "inherit" }} align="center">Price</TableCell>
              <TableCell sx={{ color: "inherit" }} align="center">Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}  >
                <TableCell component="th" scope="row" sx={{ display: "flex", alignItems: "center", color: "inherit" }}> <Avatar src={row.image} sx={{ width: "45px", height: "45px", borderRadius: "50%", objectFit: "cover" }} /> <Box ml={"5px"}>{row.title}</Box> </TableCell>
                <TableCell sx={{ color: "inherit" }} align="right">{row.category}</TableCell>
                <TableCell sx={{ color: "inherit" }} align="right">{row.price}</TableCell>
                <TableCell sx={{ color: "inherit" }} align="right">{function () {
                  if (row.rating.count) {
                    return row.rating.count

                  } else {
                    return "loading..."

                  }
                }()}</TableCell>
              </TableRow>
            ))}


          </TableBody>
        </Table>}

      </TableContainer>
    </>
  );
}