import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Image,
  Spacer,
  Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonStyles = {
    fontFamily: 'Outfit',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '16px',
    textAlign: 'center',
    width: '134px',
    height: '40px',
    radius: '4px',
    gap: '0px',
    opacity: '0px',
    
  };

  return (
    <Box className='navbar' color={"rgba(255, 255, 255, 1)"} fontFamily="Outfit" position="sticky" top="0" zIndex="1000"  style={{ backdropFilter: 'blur(10px)' }} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between" px={4}>
        <HStack spacing={8} alignItems="center">
          <Box>
            <Text  lineHeight={'25.2px'}
            letterSpacing={'0.5em'}
            textAlign={'left'}
  fontSize={['16px', '20px']} fontWeight="500">A.I.GEN</Text>
          </Box>
          <HStack className='navitem' as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
          <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'purple.600',padding:'8px' }} href={'#'}>Features</Link>
          <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'purple.600',padding:'8px' }} href={'#'}>RoadMap</Link>
          <Link px={2} py={1} rounded={'md'} _hover={{ bg: 'purple.600',padding:'8px' }} href={'#'}>Tokenomics</Link>
        </HStack>
        </HStack>
        <Spacer />
        <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
          <Button background= {'rgba(255, 255, 255, 0.3)'} style={buttonStyles}   as="a" href="#"  color="white" _hover={{ bg: 'purple.600' }}>Whitepaper</Button>
          <Button background={'linear-gradient(90deg, #9E6EE5 0%, #FA75F8 100%)'
} style={buttonStyles} as="a" href="#"  color="white" _hover={{ bg: 'linear-gradient(90deg, #9E6EE5 100%, #FA75F8 0%)' }}>Get Started</Button>
        </HStack>
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200' }} href={'#'}>Features</Link>
            <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200' }} href={'#'}>RoadMap</Link>
            <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200' }} href={'#'}>Tokenomics</Link>
            <Button bg={'rgba(255, 255, 255, 0.3)'} style={buttonStyles} as="a" href="#" variant="outline" >Whitepaper</Button>
            <Button style={buttonStyles} as="a" href="#" bg='linear-gradient(90deg, #9E6EE5 0%, #FA75F8 100%)' color="white" _hover={{ bg: 'linear-gradient(90deg, #9E6EE5 100%, #FA75F8 0%)' }}>Get Started</Button>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
