import { Stack } from "expo-router";

const OrderLayout = () => {
  return (
    <Stack screenOptions={{ headerTintColor: "#00754A" }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" options={{ title: "Store" }} />
    </Stack>
  );
};

export default OrderLayout;
