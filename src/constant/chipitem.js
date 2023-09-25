import { MaterialCommunityIcons, Ionicons, Fontisto, FontAwesome5 } from "@expo/vector-icons";

const categoriesFilter = [
  {
    name: "Rumah Sakit",
    icon: <MaterialCommunityIcons name="hospital-building" size={18}/>,
  },
  {
    name: "Hotel",
    icon: <FontAwesome5 name="hotel" size={18}/>
  },
  {
    name: "Penukaran Uang",
    icon: <FontAwesome5 name="money-bill" size={18}/>
  },
  {
    name: "Apotik",
    icon: <MaterialCommunityIcons name="medical-bag" size={18}/>
  },
  {
    name: "Stasiun Kereta",
    icon: <Ionicons name="train-sharp" size={18}/>
  },
  {
    name: "Halte Bus",
    icon: <Fontisto name="bus" size={18}/>
  },
  {
    name: "Minimarket",
    icon: <MaterialCommunityIcons name="shopping" size={18}/>
  },
  {
    name: "Restoran",
    icon: <Ionicons name="restaurant" size={18}/>
  },
  {
    name: "ATM",
    icon: <FontAwesome5 name="money-bill-wave-alt" size={18}/>
  }
];


export default categoriesFilter;