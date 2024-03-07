
import { BsCurrencyRupee } from 'react-icons/bs';
import { CustomCard } from '../../../Chakkra/CustomCard';
import { Flex, Stack, Text, Grid, Icon, Divider, Button } from '@chakra-ui/react';
import { FaBtc } from 'react-icons/fa';
import { Fragment } from 'react';

const Transaction = () => {
    const transactions = [
        {
            id: "1",
            icon: BsCurrencyRupee,
            text: "INR Deposit",
            amount: "$81,123.10",
            timestamp: "2022-06-09 7:06 PM",
        },
        {
            id: "2",
            icon: FaBtc,
            text: "BTC Sell",
            amount: "$81,123.10",
            timestamp: "2022-06-09 7:06 PM",
        },
        {
            id: "3",
            icon: BsCurrencyRupee,
            text: "INR Deposit",
            amount: "$81,123.10",
            timestamp: "2022-06-09 7:06 PM",
        },
    ];

  return (
    <CustomCard h="full">
      <Text mb="6" fontSize="sm" color="black.80">Recent Transactions
      </Text>
      <Stack spacing={4}>
        {transactions.map((transaction, i) => (
            <Fragment key={transaction.id}>
                {i == 0 && <Divider/>}
                <Flex>
                <Grid bg="black.5" placeItems="center" boxSize={10} borderRadius="full">
                    <Icon as={transaction.icon} />
                </Grid>
                <Flex justify="space-between" w="full">
                    <Stack spacing={0}>
                        <Text textStyle="h6">
                            {transaction.text}
                        </Text>
                        <Text fontSize="sm" color="black.40">
                            {transaction.timestamp}
                        </Text>
                    </Stack>
                    <Text textStyle="h6">{transaction.amount}</Text>
                </Flex>
            </Flex>
            </Fragment>
        ))}
      </Stack>
      <Button w="full" mt="6" colorScheme="gray">View All</Button>
    </CustomCard>
  )
}

export default Transaction;
