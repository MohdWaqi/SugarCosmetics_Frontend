import { ListItem } from "@chakra-ui/react";
import React from "react";

const MenuSingleItem = ({ item }) => {
  return <ListItem _hover={{ fontWeight: "700" }}>{item}</ListItem>;
};

export default MenuSingleItem;
