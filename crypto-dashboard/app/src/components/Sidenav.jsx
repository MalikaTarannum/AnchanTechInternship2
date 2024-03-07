import { Box, Stack, HStack, Icon, Heading } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const location = useLocation();
  const isActiveLink = (link) => {
    return location.pathname == link;
  };

  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transaction",
      link: "/Transactions",
    },
  ];
  return (
    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "256px",
      }}
      h="100vh"
      >
      <Box>
        <Heading
          textAlign="center"
          paddingLeft="5px"
          paddingRight="5px"
          fontSize="20px"
          as="h1"
          pt="56px"
        >
          @PROGRAMMING WORLD
        </Heading>
        <Box mx="3" mt="6">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
            <HStack
              borderRadius="10px"
              py="3"
              px="4"
              bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
              color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
              _hover={{
                color: "#171717",
                bg: "#F3F3F7",
              }}
              
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="medium">
                {nav.text}
              </Text>
            </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mx="3" mt="6" mb="6">
       <Link to="/support">
       <HStack
          borderRadius="10px"
          py="3"
          px="4"
          bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
          color={isActiveLink("/support") ? "#171717" : "#797E82"}
          _hover={{
            color: "#171717",
            bg: "#F3F3F7",
          }}
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px" fontWeight="medium">
            Support
          </Text>
        </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
