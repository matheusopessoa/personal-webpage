import { Box, Heading, Text, Flex } from '@chakra-ui/react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import { ReactNode } from 'react'

interface ProjectCardProps {
  title: string
  description: ReactNode
  imageUrl: string
  projectUrl?: string
}

export default function ThreeDCardProjects({
  title,
  description,
  imageUrl,
  projectUrl
}: ProjectCardProps) {
  return (
    <Box 
      width={{base: "100%", md: "100%"}}
      mx="auto" 
      border="2px" 
      borderColor="gray.600" 
      borderRadius="xl" 
      p={2} 
      bg="gray.900/20"
      boxShadow="lg"
    >
      <CardContainer className="inter-var">
        <CardBody className="relative group/card w-full h-auto rounded-xl p-4 border border-white/20 shadow-2xl">
          <div className="flex flex-col h-full">
            {/* Cabeçalho com informações do projeto */}
            <div className="text-center">
              {/* Título */}
              <CardItem
                translateZ="50"
                className="text-xl font-bold"
              >
                <Heading as="h3" size="md" color="white">
                  {title}
                </Heading>
              </CardItem>
              
              {/* Descrição */}
              <CardItem
                as="p"
                translateZ="60"
                className="text-sm mt-2"
              >
                <Text color="gray.200">
                  {description}
                </Text>
              </CardItem>
            </div>
            
            {/* Imagem (centralizada horizontalmente, no meio do card) */}
            <Flex w="100%" justifyContent="center" my={6}>
              <CardItem 
                translateZ="100" 
                className="flex justify-center items-center"
              >
                {projectUrl ? (
                  <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                    <img
                      src={imageUrl}
                      className="h-40 max-w-full object-contain bg-white/5 rounded-xl group-hover/card:shadow-xl cursor-pointer hover:opacity-90 transition-opacity"
                      alt={`Imagem do projeto ${title}`}
                    />
                  </a>
                ) : (
                  <img
                    src={imageUrl}
                    className="h-40 max-w-full object-contain bg-white/5 rounded-xl group-hover/card:shadow-xl"
                    alt={`Imagem do projeto ${title}`}
                  />
                )}
              </CardItem>
            </Flex>
            
            {/* Botão para ver o projeto */}
            <div className="flex justify-center items-center mt-auto">
              {projectUrl && (
                <CardItem
                  translateZ={20}
                  as="a"
                  href={projectUrl}
                  target="_blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal"
                >
                  <Text 
                    color="gray.200" 
                    _hover={{ color: "white" }} 
                    transition="color 0.2s"
                    fontWeight="medium"
                  >
                    Ver mais →
                  </Text>
                </CardItem>
              )}
            </div>
          </div>
        </CardBody>
      </CardContainer>
    </Box>
  )
} 