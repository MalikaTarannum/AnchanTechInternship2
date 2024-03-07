import { BsArrowUpRight } from "react-icons/bs";
import { CustomCard } from "../../../Chakkra/CustomCard";
import {
  HStack,
  Stack,
  Text,
  Icon,
  Button,
  Flex,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const PricingSection = () => {
  const timestamps = ["5:15 PM", "6:15 PM", "7:15 PM", "8:15 PM", "9:15 PM"];

  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>
          </HStack>
          <HStack
            spacing={2}
            flexDirection={{
              base: "column",
              sm: "row",
            }}
            align={{
              base: "flex-start",
              sm: "center",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                $ 112,312.24
              </Text>
              <HStack fontWeight="medium" color="green.500">
                <Icon as={BsArrowUpRight} />
                <Text textStyle="sm" fontWeight="medium">
                  22%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiOutlineMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="enclosed">
        <Flex justify="end">
        <TabList bg="black.5" p="3px">
            {
                ["1H", "1D", "1W", "1M"].map((tab) => (
                    <Tab
                    _selected={{ bg: "white" }}
                     key={tab} fontSize="sm" p="6" borderRadius="4">
                        {tab}
                    </Tab>
                ))
            }
        </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image src="./graph.svg" mt="48px" />
            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PricingSection;
