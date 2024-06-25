import { Container, VStack, Text, Box, Image, Button, HStack } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box boxSize="200px">
          <Image src="/images/album-cover.jpg" alt="Album Cover" boxSize="100%" objectFit="cover" borderRadius="md" />
        </Box>
        <Text fontSize="2xl" fontWeight="bold">Song Title</Text>
        <Text fontSize="lg" color="gray.500">Artist Name</Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaBackward />} colorScheme="teal" variant="outline">Prev</Button>
          <Button leftIcon={<FaPlay />} colorScheme="teal">Play</Button>
          <Button leftIcon={<FaPause />} colorScheme="teal" variant="outline">Pause</Button>
          <Button leftIcon={<FaForward />} colorScheme="teal" variant="outline">Next</Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;