import { ListItem } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const MenuSingleItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <ListItem
      _hover={{ fontWeight: "700" }}
      onClick={() => navigate("/products")}
    >
      {item}
    </ListItem>
  );
};

export default MenuSingleItem;
