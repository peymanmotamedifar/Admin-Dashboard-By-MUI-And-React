import styled from "@emotion/styled"
import { KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Progressbar() {


  const TopBox = styled('div')({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: " 2px 5px 2px 5px",
    width: "100%",
    color: "#184e77",
  })

  let prog = 80




  return (
    <Box boxShadow={8} sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      <TopBox>
        <Typography variant="h6" component={'div'} >
          Total Revenu
        </Typography>
        <MoreHoriz sx={{ fontSize: "20px", cursor: "pointer" }} />
      </TopBox>

      <Box sx={{ width: "150px", height: "150px", mt: 4 }}>
        <CircularProgressbar value={prog} maxValue={100} text={prog + "%"} strokeWidth={4} styles={buildStyles({ pathColor: `#184e77`, textColor: '#168aad', trailColor: '#d6d6d6' })} />
      </Box>



      <Typography variant="body1" mt={2} color={"#184e77"} component={"p"} display={"flex"} width={"100%"} justifyContent={"center"}>
        Total Sales Today
      </Typography>


      <Box sx={{ width: "100%" }}>

        <Typography variant="h5" component={"div"} mt={1} display={"flex"} justifyContent={"center"}>
          1028 $
        </Typography>
        <Typography variant="body2" color={"#184e77"} component={"p"} display={"flex"} width={"100%"} justifyContent={"center"} mt={2}>
          Last Payments May Not Be Included
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-evenly", width: "100%", mt: 2 }}>

          <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"}>
            <Typography width={"100%"} display={"flex"} justifyContent={"center"} color={"#184e77"}>Target</Typography>
            <Box display={"flex"} alignItems={"center"} color={"#bf0603"}>
              <KeyboardArrowDown />
              <Typography mt={1} mb={2}>$ 150</Typography>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"} >
            <Typography width={"100%"} display={"flex"} justifyContent={"center"} color={"#184e77"}>Last Week</Typography>
            <Box display={"flex"} alignItems={"center"} color={"#bf0603"}>
              <KeyboardArrowDown />
              <Typography mt={1} mb={2}>$ 80</Typography>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"}>
            <Typography width={"100%"} display={"flex"} justifyContent={"center"} color={"#184e77"}>Last Month</Typography>
            <Box display={"flex"} alignItems={"center"} color={"#52b788"}>
              <KeyboardArrowUp />
              <Typography mt={1} mb={2}>$ 850</Typography>
            </Box>
          </Box>
        </Box>


      </Box>




    </Box>
  )
}



export default Progressbar