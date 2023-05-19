import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Topbar from "./pages/side/Topbar";
import AllProducts from "./pages/Products/AllProducts";
import NewProducts from "./pages/Products/NewProducts";
import Sidebar from "./pages/side/Sidebar";
import Charts from "./pages/Charts/Charts";
import EditUser from "./pages/Users/EditUser";
import Login from "./pages/Login/Login";
import Users from "./pages/Users/Users";
import EditProduct from "./pages/Products/EditProduct";
import CreateProduct from "./pages/Products/CreateProduct";
import CreateUser from "./pages/Users/CreateUser";

function App() {
  const [mode, setMode] = useState("light");

  const DarkMode = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={DarkMode}>
      <BrowserRouter>
        <Topbar mode={mode} setMode={setMode} />
        <Box
          display={"flex"}
          width={"100%"}
          minHeight={"100vh"}
          bgcolor={"background.default"}
          color={"text.primary"}
          position={"relative"}
        >
          <Sidebar />

          <Box
            sx={{ flex: 3 }}
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            p={3}
            overflow={"hidden"}
          >
            <Routes>
              <Route path="/">
                <Route index element={<Home />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="charts" element={<Charts />}></Route>
                <Route path="allproducts">
                  <Route index element={<AllProducts />}></Route>
                  <Route path="lastproducts" element={<NewProducts />}></Route>
                  <Route path="editproduct" element={<EditProduct />}></Route>
                  <Route
                    path="createproduct"
                    element={<CreateProduct />}
                  ></Route>
                </Route>
                <Route path="users">
                  <Route index element={<Users />}></Route>
                  <Route path="edit" element={<EditUser />}></Route>
                  <Route path="createuser" element={<CreateUser />}></Route>
                  {/* <Route path="create" element={<SinglePageUserC/>}></Route> */}
                </Route>
              </Route>
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
