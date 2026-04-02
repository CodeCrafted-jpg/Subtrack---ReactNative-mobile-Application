import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-blue-500">
        Sayan
      </Text>
      <Link href="/onBoarding" className="mt-4 px-4 py-2 bg-blue-500 rounded">
        Go to OnBoarding
      </Link>
       <Link href="/(auth)/sign-in" className="mt-4 px-4 py-2 bg-blue-500 rounded">
        Go to sign-in
      </Link>
    </View>
  );
}