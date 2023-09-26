import {
  MaterialCommunityIcons,
  Ionicons,
  Fontisto,
  FontAwesome5,
} from "@expo/vector-icons";
import { HotelMadina, HospitalMadina } from "./coordinate";

const categoriesFilterMadina = [
  {
    name: "Rumah Sakit",
    icon: <MaterialCommunityIcons name="hospital-building" size={18} />,
    data: HospitalMadina,
  },
  {
    name: "Hotel",
    icon: <FontAwesome5 name="hotel" size={18} />,
    data: HotelMadina,
  },
];

export default categoriesFilterMadina;

