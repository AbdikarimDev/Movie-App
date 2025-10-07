import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="bg-light-100 flex-1 justify-center items-center"
    >
      <Text className="text-accent font-bold text-2xl">Welcome!</Text>
      <Link href="/onboard" className="text-light-300 font-[500]">Get Started</Link>
    </View>
  );
}
