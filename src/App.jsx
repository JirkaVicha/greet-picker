import GreetPicker from "./components/GreetPicker"
import { Box } from "@chakra-ui/react"

const App = () => {
  return (
    <Box 
      m={5}
      maxW='xl' 
    >
      <GreetPicker />
    </Box>
  )
}

export default App