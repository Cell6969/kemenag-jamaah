import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";

export const DropdownList = ({
  data,
  categories,
  filteredCategories,
  setFilteredCategories,
}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const handleSelectionChange = (item) => {
    const dataCategory = categories.filter((category) => {
      return category.name === item.value;
    });
    // setValue(dataCategory.data);
    setFilteredCategories(dataCategory[0].data);
  };
  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={"Search ..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={handleSelectionChange}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? "blue" : "black"}
            name="search1"
            size={20}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 0,
  },
  dropdown: {
    borderColor: "#ccc",
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 0,
    width: "100%",
    height: 30,
    backgroundColor: "white",
  },
  icon: {
    marginRight: 5,
    marginLeft: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
});
