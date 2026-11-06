import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router/js-tabs";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#00754A",
        tabBarInactiveTintColor: "#1E1E1E",
        tabBarLabelStyle: { fontSize: 13 },
        tabBarStyle: { height: 80, paddingTop: 8 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={28}
              color={focused ? "#00754A" : "#1E1E1E"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="qr-code"
              size={28}
              color={focused ? "#00754A" : "#1E1E1E"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: "Order",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="cafe"
              size={28}
              color={focused ? "#00754A" : "#1E1E1E"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="rewards"
        options={{
          title: "Rewards",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="star"
              size={28}
              color={focused ? "#00754A" : "#1E1E1E"}
            />
          ),
          tabBarBadge: "NEW",
          tabBarBadgeStyle: {
            backgroundColor: "#2B5F43",
            fontSize: 10,
            minWidth: 38,
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
