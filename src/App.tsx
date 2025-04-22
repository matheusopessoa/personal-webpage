import { Box, Heading, Text, VStack, HStack, Link, Icon, SimpleGrid } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'
import ThreeDCardProjects from './components/3d-card-projects'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)

const projects = [
  {
    title: "Cheersfy",
    description: <>
      SaaS onde o usuário de criar websites personalizados para serem dados como presente. 
      <Text as="span" fontWeight="bold"> Frontend: </Text>
      <Text as="span" fontWeight="bold">NextJS</Text>, 
      <Text as="span" fontWeight="bold">TailwindCSS</Text>, 
      <Text as="span" fontWeight="bold">Aceternity UI</Text>. 
      <Text as="span" fontWeight="bold"> Backend: </Text>
      <Text as="span" fontWeight="bold">NodeJS</Text>, 
      <Text as="span" fontWeight="bold">Express</Text>, 
      <Text as="span" fontWeight="bold">Firebase</Text>. 
      Integração com Stripe e Pagarme para pagamentos e envio de e-mails com Nodemailer.
    </>,
    imageUrl: "/cheersfy.webp",
    projectUrl: "https://cheersfy.com"
  },
  {
    title: "Escolha Meu Filme",
    description: <>
      Engine gratuita para recomendação de filmes baseada em gênero, popularidade e serviço de streaming. Quer parar de perder horas escolhendo filmes e acabar repetindo um antigo? O escolha meu filme é a solução. 
      <Text as="span" fontWeight="bold"> Frontend: </Text>
      <Text as="span" fontWeight="bold">React</Text>, 
      <Text as="span" fontWeight="bold">Styled Components</Text>. 
      <Text as="span" fontWeight="bold"> Backend: </Text>
      <Text as="span" fontWeight="bold">Python</Text>, 
      <Text as="span" fontWeight="bold">Flask</Text>, 
      <Text as="span" fontWeight="bold">PostgreSQL</Text>.
    </>,
    imageUrl: "/escfilme.webp",
    projectUrl: "https://escolhameufilme.com/"
  }
]

function App() {
  return (
    <Box minH="100vh" w="100%" bg="gray.900" p={10}>
      <VStack gap={8} align="stretch" maxW="container.lg" mx="auto">
        <MotionBox 
          textAlign="center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
        >
          <MotionHeading 
            as="h1" 
            size="2xl" 
            mb={4}
            color="white"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Matheus Pessoa
          </MotionHeading>
          <Text fontSize="xl" color="gray.300">
            Desenvolvedor de Software
          </Text>
          <Text color="gray.400">
            Estudante de Sistemas de Informação - UFPE (5º Período)
          </Text>
        </MotionBox>

        <MotionBox
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <MotionHeading 
            as="h2" 
            size="lg" 
            mb={4}
            color="white"
            whileHover={{ color: "#CBD5E0" }}
          >
            Sobre Mim
          </MotionHeading>
          <Text color="gray.300" fontSize="lg" lineHeight="tall">
          Curso Sistemas de Informação na UFPE e aplico no código tudo que aprendo, com foco em clareza, eficiência e propósito.
          Atuo com Node.js, TypeScript, PostgreSQL, Next.js, React, Firebase e Flask, desenvolvendo desde micro SaaS até APIs robustas e escaláveis.
          Além da parte técnica, prezo por empatia, respeito, comunicação clara, escrita objetiva e colaboração. Gosto de discutir ideias e resolver problemas em equipe.
          Busco criar soluções que realmente funcionem, com código limpo, boas decisões de produto e atenção aos detalhes.
          Sou co-autor da segunda edição do livro Sistemas de Informação para Iniciantes, disponível na Amazon Brasil, onde revisei, ampliei e aprimorei o capítulo 5, dedicado ao Desenvolvimento de Sistemas.
          Sigo em constante evolução, sempre buscando aprender mais, contribuir com projetos relevantes e escrever código que faça sentido, para pessoas e para negócios.
          </Text>

        </MotionBox>

        <MotionBox
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <MotionHeading 
            as="h2" 
            size="lg" 
            mb={8}
            color="white"
            whileHover={{ color: "#CBD5E0" }}
          >
            Projetos em Destaque
          </MotionHeading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {projects.map((project, index) => (
              <MotionBox
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: 1.5 + (index * 0.3), 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 120
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <ThreeDCardProjects
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  projectUrl={project.projectUrl}
                />
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>

        <MotionBox
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
        >
          <MotionHeading 
            as="h2" 
            size="lg" 
            mb={4}
            color="white"
            whileHover={{ color: "#CBD5E0" }}
          >
            Me conhça melhor
          </MotionHeading>
          <HStack gap={4}>
            <MotionBox
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.4, type: "spring" }}
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Link href="https://github.com/matheusopessoa" target="_blank">
                <Icon 
                  as={FaGithub} 
                  w={8} 
                  h={8} 
                  color="gray.300" 
                  _hover={{ color: "emerald.400" }}
                  transition="color 0.3s ease"
                />
              </Link>
            </MotionBox>
            <MotionBox
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.4, type: "spring" }}
              whileHover={{ scale: 1.2, rotate: -5 }}
            >
              <Link href="https://linkedin.com/in/matheuspessoadev" target="_blank">
                <Icon 
                  as={FaLinkedin} 
                  w={8} 
                  h={8} 
                  color="gray.300" 
                  _hover={{ color: "emerald.400" }}
                  transition="color 0.3s ease"
                />
              </Link>
            </MotionBox>
          </HStack>
        </MotionBox>
      </VStack>
    </Box>
  )
}

export default App
