import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Flex, Heading, IconButton, Image, Stack, Text } from "@chakra-ui/react";

import './CardChar.css'

interface CardCharProps {
  img_url: string,
  name_char: string,
  race_char: string,


}
export default function CardChar({img_url, name_char, race_char} : CardCharProps){
    return(
        <>
          <Center py={6}>
            <Box
              maxW={'270px'}
              w={'full'}
              boxShadow={'2xl'}
              rounded={'md'}
              overflow={'hidden'}>
              <Image
                h={'223px'}
                w={'223px'}
                src={ img_url }
                objectFit="cover"
                alt="#"
              />
              <Flex justify={'center'} mt={-12}>
                <Box
                  maxH={'55px'}
                  w={'full'}
                  h={'55px'}
                  bgColor={"#1E1E1E"}
                  color={'white'}
                  opacity={'.95'}
                  >
                  <div className="nameCardCharacter" >
                    {name_char}
                    <br/> 
                    <span>{race_char}</span>
                  </div>         
                </Box>
              </Flex>
            </Box>
          </Center>
        </>
        
    )
}