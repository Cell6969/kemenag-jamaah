import {
  MaterialCommunityIcons,
  Ionicons,
  Fontisto,
  FontAwesome5,
} from "@expo/vector-icons";
import {
  ATMMecca,
  BusMecca,
  HospitalMecca,
  HotelMecca,
  MarketMecca,
  MoneyChangerMecca,
  PharmacyMecca,
  PilgrimageMecca,
  PoskoMecca,
  TrainMecca,
} from "./coordinate";

const categoriesFilter = [
  {
    name: "Rumah Sakit",
    icon: <MaterialCommunityIcons name="hospital-building" size={18} />,
    data: HospitalMecca,
  },
  {
    name: "Hotel",
    icon: <FontAwesome5 name="hotel" size={18} />,
    data: HotelMecca,
  },
  {
    name: "Penukaran Uang",
    icon: <FontAwesome5 name="money-bill" size={18} />,
    data: MoneyChangerMecca,
  },
  {
    name: "Apotik",
    icon: <MaterialCommunityIcons name="medical-bag" size={18} />,
    data: PharmacyMecca,
  },
  {
    name: "Stasiun Kereta",
    icon: <Ionicons name="train-sharp" size={18} />,
    data: TrainMecca,
  },
  {
    name: "Halte Bus",
    icon: <Fontisto name="bus" size={18} />,
    data: BusMecca,
  },
  {
    name: "Minimarket",
    icon: <MaterialCommunityIcons name="shopping" size={18} />,
    data: MarketMecca,
  },
  //   {
  //     name: "Restoran",
  //     icon: <Ionicons name="restaurant" size={18}/>
  //   },
  {
    name: "ATM",
    icon: <FontAwesome5 name="money-bill-wave-alt" size={18} />,
    data: ATMMecca,
  },
  {
    name: "Posko Haji",
    icon: <Ionicons name="trail-sign" size={18} />,
    data: PoskoMecca,
  },
  {
    name: "Situs Ziarah",
    icon: <MaterialCommunityIcons name="grave-stone" size={18} />,
    data: PilgrimageMecca,
  },
];

export default categoriesFilter;
