import {
  Icon,
  Stack,
  Text,
  Flex,
  Box
} from "@chakra-ui/react";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
     gap={6}
     flexDir={{
        base: "column",
        xl: "row",
     }}
     >
      <Stack maxW="380px">
        <Icon as={icon} boxSize={6} color="p.purple" />
        <Text as="h1" fontWeight="medium" textStyle="h1">
          {title}
        </Text>
        <Text color="black.60" fontSize="sm">
          {text}
        </Text>
      </Stack>
      <Box maxW="550px" w="full">
      {leftComponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
