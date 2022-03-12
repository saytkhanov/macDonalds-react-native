import { View, Text } from "react-native";
import Header from './src/components/Header';
import Categories from "./src/components/Categories";
import Popular from "./src/components/Popular";
import { COLORS } from "./constants";

export default function App() {
  return (
    <View style={{padding: 24,  paddingTop: 50, backgroundColor: COLORS.black}}>
        <Header />
        <Categories />
        <Popular />
    </View>
  );
}

