import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import Logo from '@components/Logo';
import { Link as GatsbyLink } from "gatsby";

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const menus = [
    {
      link: '/',
      text: 'Home'
    },
    {
      link: '/recipes',
      text: 'Recipes'
    },
    {
      link: '/tags',
      text: 'Tags'
    },
    {
      link: '/about',
      text: 'About'
    }
  ];

  return (
    <Box as="header" p="4">
      <Box as="nav">
        <HStack spacing="10" minH="80px" justify="space-between">
          <Logo />
          {isDesktop ? (
            <Flex justify="space-between" flex="1">
              <HStack spacing="8">
                {menus.map(({ link, text }, idx) => (
                  <Link
                    as={GatsbyLink}
                    fontSize="lg"
                    to={link}
                    key={idx}>
                      {text}
                  </Link>
                ))}
              </HStack>
              <HStack spacing="3">
                <Button
                  as={GatsbyLink}
                  fontFamily="Source Sans Pro"
                  size="lg"
                  to="mailto:radenadriep@gmail.com"
                  variant="primary">Contact</Button>
              </HStack>
            </Flex>
          ) : (
            <Menu>
              <MenuButton as={IconButton} fontSize="1.25rem" aria-label="Open Menu" icon={<FiMenu />} variant="primary" />
              <MenuList>
                {menus.map(({ link, text }, idx) => (<MenuItem as={GatsbyLink} to={link} key={idx}>{text}</MenuItem>))}
              </MenuList>
            </Menu>
          )}
        </HStack>
      </Box>
    </Box>
  );
}

export default Header;