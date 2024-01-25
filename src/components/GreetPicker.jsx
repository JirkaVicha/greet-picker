import greetings from '../greetData'
import { useState } from 'react'
import { Button, Heading, Text, Box } from '@chakra-ui/react'

const GreetPicker = () => {
  const [greet, setGreet] = useState('Hi! Choose language.')

  return (
    <Box>
      <Box p={4}>
        <Heading>How to greet in many languages?</Heading>
      </Box>
      
      <Box p={2} bg='tomato' borderRadius={5} mb={8} maxW='300px'>
       <Text 
        fontSize='4xl'
        color='white'
        align='center'
        fontWeight='bold'
      >
          '{greet}'</Text> 
      </Box>
      
      {Object.keys(greetings).map((language, index) => (
        <Button 
          key={index} 
          onClick={() => setGreet(greetings[language])}
          m={1}
          colorScheme='orange'
        >
          {language}
        </Button>
      ))}
    </Box>
  )
}

export default GreetPicker