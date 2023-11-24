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
import { fetchPharmacies } from "../../redux/pharmacySlicer";

function DashboardTableRow(props) {
  const { isLast } = props;
  const textColor = useColorModeValue("gray.500", "white");
  const titleColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const pharmacies = useSelector((state) => state.pharmacy.data);

  const dispatch = useDispatch();

  const fetch = () => {
    dispatch(fetchPharmacies());
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Tr>
      {pharmacies.map((pharmacy) => {
        console.log('======>' , pharmacy);
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
                  src={pharmacy.imageUrl}
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
                    {pharmacy.PHname}
                  </Text>
                </Flex>
              </Flex>
            </Td>

            <Td borderColor={borderColor} borderBottom={isLast ? "none" : null}>
              <Flex direction="column">
                <Text fontSize="md" color={textColor} fontWeight="bold">
                  {pharmacy.type}
                </Text>
                <Text fontSize="sm" color="gray.400" fontWeight="normal">
                  {"subdomain"}
                </Text>
              </Flex>
            </Td>
            <Td borderColor={borderColor} borderBottom={isLast ? "none" : null}>
              <Badge
                bg={pharmacy.isverified === true ? "green.400" : bgStatus}
                color={pharmacy.isverified === true ? "white" : "white"}
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
                {pharmacy.createdAt}
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

export default DashboardTableRow;
