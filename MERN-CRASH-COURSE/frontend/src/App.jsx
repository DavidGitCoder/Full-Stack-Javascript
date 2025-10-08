import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/homepage";
import { useColorModeValue } from "./components/ui/color-mode";

function App() {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "cyan.900")}>
        {" "}
        {/** vh=viewport height */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="create" element={<CreatePage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
