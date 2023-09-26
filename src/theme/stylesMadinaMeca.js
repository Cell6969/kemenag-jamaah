import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f6f6f6",
  },
  weather: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  topSection: {
    flexDirection: "column",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    width: "100%",
  },
  chipsScrollView: {
    marginBottom: 0,
  },
  chipsItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginRight: 2,
    backgroundColor: "#fff",
    borderRadius: 20,
    height: 30,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  mapContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
  },
  mapBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    overflow: "hidden",
    flex: 1,
    marginTop: 0,
  },
  map: {
    flex: 1,
  },
  spinnerText: {
    color: "#3662AA",
  },
  overlay: {
    position: "absolute", // Fill the entire parent
    backgroundColor: "transparent", // Make it transparent
  },
  filteredCategory: {
    backgroundColor: "#9fc5e8",
  },
});

export default styles;