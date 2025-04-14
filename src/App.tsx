import { Box, Container, Heading, Text, VStack, HStack, Link, Icon } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function App() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Container maxW="container.md" py={10}>
        <VStack gap={8} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb={4}>
              Matheus Pessoa
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Desenvolvedor de Software
            </Text>
            <Text color="gray.500">
              Estudante de Sistemas de Informação - UFPE (5º Período)
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Sobre Mim
            </Heading>
            <Text>
              Sou um desenvolvedor de software apaixonado por criar soluções inovadoras e impactantes.
              Atualmente cursando o 5º período de Sistemas de Informação na UFPE, busco constantemente
              expandir meus conhecimentos e aplicar o que aprendo em projetos práticos.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Projetos
            </Heading>
            <VStack gap={4} align="stretch">
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
                <Link href="https://escolhameufilme.com" target="_blank">
                  <Heading as="h3" size="md" mb={2}>
                    escolhameufilme.com
                  </Heading>
                </Link>
                <Text>
                  Uma plataforma que ajuda usuários a escolherem filmes baseados em suas preferências.
                </Text>
              </Box>

              <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
                <Link href="https://cheersfy.com" target="_blank">
                  <Heading as="h3" size="md" mb={2}>
                    cheersfy.com
                  </Heading>
                </Link>
                <Text>
                  Uma aplicação que conecta pessoas para momentos de descontração e socialização.
                </Text>
              </Box>
            </VStack>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Contato
            </Heading>
            <HStack gap={4}>
              <Link href="https://github.com/matheusopessoa" target="_blank">
                <Icon as={FaGithub} w={6} h={6} />
              </Link>
              <Link href="https://linkedin.com/in/matheuspessoadev" target="_blank">
                <Icon as={FaLinkedin} w={6} h={6} />
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default App
