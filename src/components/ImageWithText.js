import React from 'react';
import { Box, Flex, Heading, Image, Button, Text } from '@chakra-ui/react';

function ImageWithText({ reverse, image, heading, text }) {
  //Wenn True, dann wird die Section umgedreht dargestellt,
  //oder als normales "Row"
  const reverseSection = reverse ? 'row-reverse' : 'row';

  return (
    <Box>
      <Flex flexDir={['column', reverseSection]} w='100%'>
        <Image src={image} objectFit='cover' w={['100%', '50%']} />
        <Flex
          flexDir='column'
          justifyContent='center'
          alignItems='center'
          p='2rem'
          w={['100%', '50%']}>
          <Heading p='2rem'>{heading && heading}</Heading>
          <Text p='2rem'>{text && text}</Text>
          <Button
            w='10rem'
            backgroundColor='#FF38BD'
            color='white'
            _hover={{ opacity: '70%' }}>
            Buy Now
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default ImageWithText;
