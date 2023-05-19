import { Avatar, Box, Button } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import { useEffect, useState } from "react";
import { Delete } from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";
import Loading1 from "../assets/img/amalie-steiness.gif"










export default function AllUsers() {
    const [rows, setRows] = useState(1)
    const [error, setError] = useState(false)
    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        {
            field: 'image', headerName: 'Image', type: 'string', width: 80,

            renderCell: (params) => {
                return (
                    <>
                        <Avatar pic src={params.row.image} />
                    </>
                )
            }

        },
        { field: 'firstName', headerName: 'First name', width: 120 },
        { field: 'lastName', headerName: 'Last name', width: 120 },
        { field: 'email', headerName: 'Email', width: 190, },
        {
            field: 'city', headerName: 'City', width: 100,

            renderCell: (params) => {
                return params.row.address.city
            }
        },

        { field: 'password', headerName: 'Password', width: 150, },



        {
            field: 'action', headerName: 'Action', width: 160, align: 'left',

            renderCell: (params) => {
                return (
                    <>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Delete color="error" />
                            <Button variant="contained" size="small" color="primary" onClick={() => editUser1(params.row)}>Edite</Button>
                        </Box>
                    </>
                )
            }

        },

    ];

    let arr
    const navigate = useNavigate()

    const editUser1 = (self) => {
        arr = []
        arr = [{
            firstName: self.firstName,
            lastName: self.lastName,
            img: self.image,
            email: self.email,
            password: self.password,
        }]

        navigate('edit', { state: arr[0] })


    }




    useEffect(() => {

        axios.get('https://dummyjson.com/users', {
            timeout: 5000
        })
            .then(function (response) {
                setRows(response.data.users)
            })
            .catch(function () {
                setError(true)
            })


    }, [])



    return (
        <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center" }} >
            <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end", p: 3 }}><Link to={"createuser"}><Button variant="contained" size="small" color="success">Create New</Button></Link></Box>
            <div style={{ height: 600, width: "90%" }}>
                {error ? <Box variant={"p"} sx={{ width: "100%", display: "flex", justifyContent: "center", fontSize: { xs: "20px", sm: "25px", md: "40px" }, mt: 4 }}> Please Turn On <span style={{ color: "red" }}>VPN</span></Box> : function () {
                    if (rows === 1) {
                        return (
                            <><Box sx={{ width: "100%", display: "flex", justifyContent: "center", mt: 4 }}>
                                <Avatar src={Loading1} sx={{ width: "70px", height: "70px", m: 4 }} />
                            </Box></>
                        )

                    } else {
                        return (
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 20 },
                                    },
                                }}
                                pageSizeOptions={[50, 10]}
                                checkboxSelection
                            />
                        )
                    }

                }()}
            </div>
        </Box>
    )
}


