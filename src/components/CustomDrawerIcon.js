import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const CustomDrawerIcon = ({name, size, focused}) => {
    const color = focused ? "white" : "black";
    return <MaterialIcons name={name} size={size} color={color} />
};

export default CustomDrawerIcon;