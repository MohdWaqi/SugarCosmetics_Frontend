import { Box, ListItem, Text, UnorderedList, Flex } from "@chakra-ui/react";
import React from "react";
import MenuSingleItem from "./MenuSingleItem";

const MenuSection = ({ detailData }) => {
  console.log(detailData);
  return (
    <Flex>
      {detailData?.length &&
        detailData.map((data) => (
          <Box p="10px 20px" m="10px 20px" w="14rem">
            <Text fontWeight="700" _hover={{ color: "#FF008B" }}>
              {data.product}
            </Text>
            <UnorderedList fontSize="small" color="gray" spacing="5%" mt="5%">
              {data.list?.length &&
                data.list.map((item) => <MenuSingleItem item={item} />)}
            </UnorderedList>
          </Box>
        ))}
    </Flex>
  );
};

export default MenuSection;
