import { Box, Button, Flex, Grid, Progress, SimpleGrid, Stat, StatLabel, StatNumber, Table, Tbody, Td, Text, Th, Thead, Tr, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
import { CartIcon, DocumentIcon, GlobeIcon, WalletIcon } from "components/Icons/Icons.js";
import React, { useEffect, useState } from "react";
import { lineChartData, lineChartOptions, barChartData, barChartOptions } from "variables/charts";
import { pageVisits, socialTraffic } from "variables/general";
import { fetchUsers } from "../../redux/userSlicer";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../redux/orderSlicer";
import { fetchPharmacies } from "redux/pharmacySlicer";
import { Line } from "react-chartjs-2";

export default function Dashboard() {
  const iconBlue = useColorModeValue("blue.500", "blue.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const [showAllPharmacies, setShowAllPharmacies] = useState(false);
  const maxPharmaciesToShow = 2;

  const users = useSelector((state) => state.user.data);
  const orders = useSelector((state) => state.orders.data);
  const pharmacies = useSelector((state) => state.pharmacy.data);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchOrders());
    dispatch(fetchPharmacies());
  }, [dispatch]);

  const userRegistrationData = users.reduce((acc, user) => {
    if (user.createdAt) {
      const registrationcreatedAt = user.createdAt.split('T')[0];
      acc[registrationcreatedAt] = (acc[registrationcreatedAt] || 0) + 1;
    }
    return acc;
  }, {});

  const doctorRegistrationData = users.reduce((acc, user) => {
    if (user.type === "doctor" && user.createdAt) {
      const registrationcreatedAt = user.createdAt.split('T')[0];
      acc[registrationcreatedAt] = (acc[registrationcreatedAt] || 0) + 1;
    }
    return acc;
  }, {});

  const pharmacyRegistrationData = users.reduce((acc, user) => {
    if (user.type === "pharmacy" && user.createdAt) {
      const registrationcreatedAt = user.createdAt.split('T')[0];
      acc[registrationcreatedAt] = (acc[registrationcreatedAt] || 0) + 1;
    }
    return acc;
  }, {});

  const normalUserRegistrationData = users.reduce((acc, user) => {
    if (user.type === "user" && user.createdAt) {
      const registrationcreatedAt = user.createdAt.split('T')[0];
      acc[registrationcreatedAt] = (acc[registrationcreatedAt] || 0) + 1;
    }
    return acc;
  }, {});

  const highestRatedPharmacyy = pharmacies.reduce((maxPharmacy, pharmacy) => {
    return !maxPharmacy || pharmacy.Pharmacy.rating > maxPharmacy.Pharmacy.rating ? pharmacy : maxPharmacy;
  }, null);

  const highestRatedPharmacies = [...pharmacies].sort((a, b) => {
    return b.Pharmacy.rating - a.Pharmacy.rating;
  });

  const highestRatedPharmacy = highestRatedPharmacies[0];

  const registrationDates = Object.keys(userRegistrationData);
  const registrationCounts = Object.values(userRegistrationData);

  const orderData = orders.reduce((acc, order) => {
    if (order.createdAt) {
      const orderDate = order.createdAt.split('T')[0];
      acc[orderDate] = (acc[orderDate] || 0) + 1;
    }
    return acc;
  }, {});

  const dailyOrderDates = Object.keys(orderData);
  const dailyOrderCounts = Object.values(orderData);



 

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px' mb='20px'>
      <Card minH='125px'>
          <Flex direction='column'>
            <Flex flexDirection='row' align='center' justify='center' w='100%' mb='25px'>
              <Stat me='auto'>
                <StatLabel fontSize='xs' color='gray.400' fontWeight='bold' textTransform='uppercase'>
                  ALL User's Registrations
                </StatLabel>
                <Flex>
                  <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
                    {registrationCounts.reduce((sum, count) => sum + count, 0)}
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox borderRadius='50%' as='box' h={"45px"} w={"45px"} bg={iconBlue}>
                <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color='gray.400' fontSize='sm'>
              {registrationDates.length > 0 && (
                <>
                  <Text as='span' color='green.400' fontWeight='bold'>
                    +{registrationCounts[registrationCounts.length - 1] || 0}{" "}
                  </Text>
                  Since yesterday
                </>
              )}
            </Text>
          </Flex>
        </Card>
        <Card minH='125px'>
  <Flex direction='column'>
    <Flex
      flexDirection='row'
      align='center'
      justify='center'
      w='100%'
      mb='25px'>
      <Stat me='auto'>
        <StatLabel
          fontSize='xs'
          color='gray.400'
          fontWeight='bold'
          textTransform='uppercase'>
          Doctors Registered Today
        </StatLabel>
        <Flex>
          <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
            {doctorRegistrationData[registrationDates[registrationDates.length - 1]] || 0}
          </StatNumber>
        </Flex>
      </Stat>
      <IconBox borderRadius='50%' as='box' h={"45px"} w={"45px"} bg={iconBlue}>
  <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
</IconBox>

    </Flex>
    <Text color='gray.400' fontSize='sm'>
      {registrationDates.length > 0 && (
        <>
          <Text as='span' color='green.400' fontWeight='bold'>
            +{doctorRegistrationData[registrationDates[registrationDates.length - 1]] || 0}{" "}
          </Text>
          Since yesterday
        </>
      )}
    </Text>
  </Flex>
</Card>
<Card minH='125px'>
  <Flex direction='column'>
    <Flex
      flexDirection='row'
      align='center'
      justify='center'
      w='100%'
      mb='25px'>
      <Stat me='auto'>
        <StatLabel
          fontSize='xs'
          color='gray.400'
          fontWeight='bold'
          textTransform='uppercase'>
          Pharmacies Registered Today
        </StatLabel>
        <Flex>
          <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
            {pharmacyRegistrationData[registrationDates[registrationDates.length - 1]] || 0}
          </StatNumber>
        </Flex>
      </Stat>
      <IconBox borderRadius='50%' as='box' h={"45px"} w={"45px"} bg={iconBlue}>
  <DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />
</IconBox>
    </Flex>
    <Text color='gray.400' fontSize='sm'>
      {registrationDates.length > 0 && (
        <>
          <Text as='span' color='green.400' fontWeight='bold'>
            +{pharmacyRegistrationData[registrationDates[registrationDates.length - 1]] || 0}{" "}
          </Text>
          Since yesterday
        </>
      )}
    </Text>
  </Flex>
</Card>
<Card minH='125px'>
  <Flex direction='column'>
    <Flex
      flexDirection='row'
      align='center'
      justify='center'
      w='100%'
      mb='25px'>
      <Stat me='auto'>
        <StatLabel
          fontSize='xs'
          color='gray.400'
          fontWeight='bold'
          textTransform='uppercase'>
          Normal Users Registered Today 
        </StatLabel>
        <Flex>
          <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
            {normalUserRegistrationData[registrationDates[registrationDates.length - 1]] || 0}
          </StatNumber>
        </Flex>
      </Stat>
      <IconBox borderRadius='50%' as='box' h={"45px"} w={"45px"} bg={iconBlue}>
  <CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />
</IconBox>
    </Flex>
    <Text color='gray.400' fontSize='sm'>
      {registrationDates.length > 0 && (
        <>
          <Text as='span' color='green.400' fontWeight='bold'>
            +{normalUserRegistrationData[registrationDates[registrationDates.length - 1]] || 0}{" "}
          </Text>
          Since yesterday
        </>
      )}
    </Text>
  </Flex>
</Card>
      </SimpleGrid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "2fr 1fr" }}
        templateRows={{ lg: "repeat(2, auto)" }}
        gap='20px'>
        <Card
          bg={
            colorMode === "dark"
              ? "navy.800"
              : "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
          }
          p='0px'
          maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction='column' mb='40px' p='28px 0px 0px 22px'>
            <Text color='#fff' fontSize='lg' fontWeight='bold' mb='6px'>
              Sales Overview
            </Text>
            <Text color='#fff' fontSize='sm'>
              <Text as='span' color='green.400' fontWeight='bold'>
                (+5) more{" "}
              </Text>
              in 2022
            </Text>
          </Flex>
          <Box minH='300px'>
            <LineChart
              chartData={lineChartData}
              chartOptions={lineChartOptions}
            />
          </Box>
        </Card>
        <Card p='0px' maxW={{ sm: "320px", md: "100%" }}>
  <Flex direction='column' mb='40px' p='28px 0px 0px 22px'>
    <Text color='gray.400' fontSize='sm' fontWeight='bold' mb='6px'>
      PERFORMANCE
    </Text>
    <Text color={textColor} fontSize='lg' fontWeight='bold'>
      Daily Orders
    </Text>
  </Flex>
  <Box minH='300px'>
    {/* Use the LineChart component with your data and options */}
    <LineChart chartData={lineChartData} chartOptions={lineChartOptions} />
  </Box>
</Card>
        <Card p='0px' maxW={{ sm: "320px", md: "100%" }}>
        <Flex direction='column'>
          <Flex align='center' justify='space-between' p='22px'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              Highest-Rated Pharmacy
            </Text>
            <Button
              variant='primary'
              maxH='30px'
              onClick={() => setShowAllPharmacies(!showAllPharmacies)}
            >
              {showAllPharmacies ? "Show Less" : "See All"}
            </Button>
          </Flex>
        </Flex>
        <Box overflow={{ sm: "scroll", lg: "hidden" }}>
          <Table>
            <Thead>
              <Tr bg={tableRowColor}>
                <Th color='gray.400' borderColor={borderColor}>
                  Pharmacy Name
                </Th>
                <Th color='gray.400' borderColor={borderColor}>
                  Rating
                </Th>
                {/* Add more columns if needed */}
              </Tr>
            </Thead>
            <Tbody>
              {highestRatedPharmacies.slice(0, showAllPharmacies ? undefined : maxPharmaciesToShow).map((pharmacy, index) => (
                <Tr key={index}>
                  <Td
                    color={textTableColor}
                    fontSize='sm'
                    fontWeight='bold'
                    borderColor={borderColor}
                  >
                    {pharmacy.Pharmacy.PHname}
                  </Td>
                  <Td
                    color={textTableColor}
                    fontSize='sm'
                    borderColor={borderColor}
                  >
                    {pharmacy.Pharmacy.rating}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Card>

      </Grid>
    </Flex>
  );
}
