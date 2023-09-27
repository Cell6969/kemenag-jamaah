import {
  MaterialCommunityIcons,
  Ionicons,
  Fontisto,
  FontAwesome5,
} from "@expo/vector-icons";
import {
  HotelMadina,
  HospitalMadina,
  BusMadina,
  PharmacyMadina,
  TrainMadina,
  MarketMadina,
  MoneyChangerMadina,
  ATMMadina,
  PoskoMadina,
} from "./coordinate";

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
  {
    name: "Penukaran Uang",
    icon: <FontAwesome5 name="money-bill" size={18} />,
    data: MoneyChangerMadina,
  },
  {
    name: "Apotik",
    icon: <MaterialCommunityIcons name="medical-bag" size={18} />,
    data: PharmacyMadina,
  },
  {
    name: "Stasiun Kereta",
    icon: <Ionicons name="train-sharp" size={18} />,
    data: TrainMadina,
  },
  {
    name: "Halte Bus",
    icon: <Fontisto name="bus" size={18} />,
    data: BusMadina,
  },
  {
    name: "Minimarket",
    icon: <MaterialCommunityIcons name="shopping" size={18} />,
    data: MarketMadina,
  },
  {
    name: "ATM",
    icon: <FontAwesome5 name="money-bill-wave-alt" size={18} />,
    data: ATMMadina,
  },
  {
    name: "Posko Haji",
    icon: <Ionicons name="trail-sign" size={18} />,
    data: PoskoMadina,
  },
];

export default categoriesFilterMadina;
