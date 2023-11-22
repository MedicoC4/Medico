import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "../../redux/doctorSlicer";

function TablesTableRow(props) {
  const { isLast } = props;
  const textColor = useColorModeValue("gray.500", "white");
  const titleColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const doctors = useSelector((state) => state.doctor.data);

  const dispatch = useDispatch();

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        await dispatch(fetchDoctors());
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Tr>
      {doctors.map((doctor) => {
        console.log(doctor);
        return (
          <Tr>
            <Td
              minWidth={{ sm: "250px" }}
              pl="0px"
              borderColor={borderColor}
              borderBottom={isLast ? "none" : null}
            >
              <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                <Avatar
                  src={doctor.Doctor.imageUrl}
                  w="50px"
                  borderRadius="12px"
                  me="18px"
                />
                <Flex direction="column">
                  <Text
                    fontSize="md"
                    color={titleColor}
                    fontWeight="bold"
                    minWidth="100%"
                  >
                    {doctor.Doctor.fullname}
                  </Text>
                  <Text fontSize="sm" color="gray.400" fontWeight="normal">
                    {doctor.email}
                  </Text>
                </Flex>
              </Flex>
            </Td>

            <Td borderColor={borderColor} borderBottom={isLast ? "none" : null}>
              <Flex direction="column">
                <Text fontSize="md" color={textColor} fontWeight="bold">
                  {doctor.type}
                </Text>
                <Text fontSize="sm" color="gray.400" fontWeight="normal">
                  {"subdomain"}
                </Text>
              </Flex>
            </Td>
            <Td borderColor={borderColor} borderBottom={isLast ? "none" : null}>
              <Badge
                bg={doctor.Doctor.isverified === true ? "green.400" : bgStatus}
                color={doctor.Doctor.isverified === true ? "white" : "white"}
                fontSize="16px"
                p="3px 10px"
                borderRadius="8px"
              >
                {"Not Verified"}
              </Badge>
            </Td>

            <Td borderColor={borderColor} borderBottom={isLast ? "none" : null}>
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="bold"
                pb=".5rem"
              >
                {doctor.createdAt}
              </Text>
            </Td>
            <Td borderColor={borderColor} borderBottom={isLast ? "none" : null}>
              <Button p="0px" bg="transparent" variant="no-effects">
                <Td
                  style={{
                    display: "flex",
                    gap: "2rem",
                  }}
                >
                  <button
                    type="button"
                    // onClick={() => rejected function}
                    style={{
                      backgroundColor: "#22C55E",
                      color: "white",
                      border: "none",
                      padding: "0.5rem 2rem",
                      borderRadius: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    Accept
                  </button>
                  <button
                    type="button"
                    // onClick={() => rejected function}
                    style={{
                      backgroundColor: "#FF5630",
                      color: "white",
                      border: "none",
                      padding: "0.5rem 2rem",
                      borderRadius: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    Reject
                  </button>
                </Td>
              </Button>
            </Td>
          </Tr>
        );
      })}
    </Tr>
  );
}

export default TablesTableRow;
