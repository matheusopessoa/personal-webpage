import { motion } from "framer-motion";
import { Box, Text, VStack, HStack, Image, Center } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box
      as="section"
      id="home"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.900"
      color="white"
      px={4}
    >
      <Center>
        <VStack spacing={8} textAlign="center" maxW="800px">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HStack spacing={6} align="center" justify="center">
              <Box
                position="relative"
                borderRadius="full"
                overflow="hidden"
                boxSize={{ base: "100px", md: "120px" }}
                border="4px solid"
                borderColor="blue.500"
                boxShadow="0 0 20px rgba(66, 153, 225, 0.5)"
              >
                <Image
                  src="/eu.webp"
                  alt="Matheus Pessoa"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  fallbackSrc="https://via.placeholder.com/120"
                />
              </Box>
              <Text
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="bold"
                bgGradient="linear(to-r, blue.400, blue.600)"
                bgClip="text"
              >
                Matheus Pessoa
              </Text>
            </HStack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Text fontSize={{ base: "xl", md: "2xl" }} color="gray.300">
              Desenvolvedor Full Stack
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.400" maxW="600px">
              Transformando ideias em soluções digitais inovadoras através do código
            </Text>
          </motion.div>
        </VStack>
      </Center>
    </Box>
  );
};

export default HeroSection; 