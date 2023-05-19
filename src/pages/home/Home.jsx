




import Progressbar from "../../components/Progressbar"
import LineChart from "../../components/LineChart"
import { Box, Typography } from "@mui/material"
import Cardmodule from "../../components/Cardmodule"
import BarChart from "../../components/BarChart"
import PieChart1 from "../../components/PieChart"
import LastTransactions from "../../components/LastTransactions"





function Home() {




  return (
    <>


      <Box display={"flex"} flex={3} p={3}>

        <Box width={'100%'} p={1}>

          <Box width={"100%"} >    {/*top */}
            <Cardmodule />
          </Box>


          <Box display={"flex"} flexWrap={"wrap"} gap={1} width={"100%"} mt={1} sx={{ justifyContent: { xs: "center", md: "space-between" } }}>    {/*bottom */}

            <Box sx={{ width: { xs: "325px", lg: "360px", xl: "450px" } }} mt={2} display={"flex"} justifyContent={"flex-start"}>
              <Progressbar />
            </Box>



            <Box boxShadow={8} display={"flex"} flexWrap={"wrap"} mt={2} sx={{ width: { sx: "70%", md: "50%", lg: "60%" } }}>
              <Typography variant="body1" display={"flex"} justifyContent={"center"} width={"100%"}>
                First Six Months ($) AreaChart
              </Typography>
              <LineChart />
            </Box>


          </Box>




          <Box display={"flex"} flexWrap={"wrap"} gap={1} width={"100%"} mt={1} sx={{ justifyContent: { xs: "center", md: "space-between" } }}>    {/*bottom 2 */}


            <Box boxShadow={8} display={"flex"} flexWrap={"wrap"} mt={2} sx={{ width: { sx: "60%", md: "40%", lg: "50%" } }}>
              <Typography variant="body1" display={"flex"} justifyContent={"center"} width={"100%"}>
                Last Six Month ($) BarChart
              </Typography>
              <BarChart />
            </Box>



            <Box boxShadow={8} display={"flex"} flexWrap={"wrap"} mt={2} sx={{ width: { sx: "38%", md: "58%", lg: "48%" } }}>
              <Typography variant="body1" display={"flex"} justifyContent={"center"} width={"100%"}>
                Last Six Month ($)
              </Typography>
              <PieChart1 />
            </Box>


          </Box>


          <Box display={"flex"} flexWrap={"wrap"} width={"100%"} mt={4} sx={{ justifyContent: "center" }}>    {/*bottom 2 */}

            <Box boxShadow={8} width={"90%"} p={4} >
              <Typography width={"100%"} display={"flex"} justifyContent={"center"} mb={3}>
                Last Transactions
              </Typography>

              <LastTransactions />





            </Box>




          </Box>










        </Box>

      </Box>
    </>

  )
}


export default Home