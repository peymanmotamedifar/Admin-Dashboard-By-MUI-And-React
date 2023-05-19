import BarChart from "../../components/BarChart"
import LineChart from "../../components/LineChart"
import PieChart1 from "../../components/PieChart"
import { Box, Typography } from "@mui/material"

function Charts() {


  return (
    <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Box boxShadow={8} display={"flex"} flexWrap={"wrap"} mt={3} sx={{ width: "90%", height: "400px" }}>
        <Typography variant="body1" display={"flex"} justifyContent={"center"} width={"100%"}>
          Last Six Month ($) BarChart
        </Typography>
        <BarChart />
      </Box>


      <Box boxShadow={8} display={"flex"} flexWrap={"wrap"} mt={3} sx={{ width: "90%", height: "400px" }}>
        <Typography variant="body1" display={"flex"} justifyContent={"center"} width={"100%"}>
          Last Six Month ($)
        </Typography>
        <PieChart1 />
      </Box>

      <Box boxShadow={8} display={"flex"} flexWrap={"wrap"} mt={3} sx={{ width: "90%", height: "400px" }}>
        <Typography variant="body1" display={"flex"} justifyContent={"center"} width={"100%"}>
          First Six Months ($) AreaChart
        </Typography>
        <LineChart />
      </Box>



    </Box>
  )
}



export default Charts